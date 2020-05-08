const fs = require("fs");
const tsv = require("node-tsv-json");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const dataSet = require("./data/hospitals.json");
const db = require("./db/knex");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.get("/api", (req, res) => res.send({ success: true, data: new Date() }));

async function assertDatabaseConnection() {
  return db.raw("select 1+1 as result").catch((err) => {
    console.log(
      "[Fatal] Failed to establish connection to database! Exiting..."
    );
    console.log(err);
    process.exit(1);
  });
}

app.get("/test", async (req, res) => {
  try {
    const query = await db("hospitals").where({ name: "Columbia" });

    if (query) {
      console.log("Query response", query);
      res.send({ success: true, data: query })
    } else {
      throw new Error("Could not query db");
    }
  } catch (error) {
    res.status(500).send({ error: true, message: error.message });
  }
});

app.get("/api/hospitals", (req, res) => {
  try {
    tsv(
      {
        input: "../hospital-chargemaster-master/hospitals.tsv",
        output: null,
        parseRows: true,
      },
      (error, data) => {
        if (error) {
          throw new Error("Error loading all hospitals data");
        } else {
          const headers = data[0];
          const response = [];

          for (let i = 1; i < data.length; i++) {
            let hospital = {};

            headers.forEach(
              (label, labelIndex) =>
                (hospital[label] = data[i][labelIndex] || null)
            );

            hospital["_id"] = i - 1;
            response.push(hospital);
            hospital = {};
          }

          res.send({ success: true, data: response });
        }
      }
    );
  } catch (error) {
    res.send(500).send({ success: false, success: false, data: error.message });
  }
});

app.get("/api/hospitals/:id", (req, res) => {
  const { id } = req.params;
  const response = dataSet.filter((item) => item._id === +id);

  res.send({ success: true, data: response });
});

app.get("/api/all-hospitals", (req, res) => {
  res.send({ success: true, data: dataSet });
});

app.get("/api/hospitals/pricing/:hospital", async (req, res) => {
  const hospitalName = req.params.hospital;

  try {
    tsv(
      {
        input: `../hospital-chargemaster-master/data/${hospitalName}/data-latest.tsv`,
        output: null,
        parseRows: true,
      },
      (error, data) => {
        if (error) {
          res.send(400).send({ success: false, data: error.message });
          throw new Error("Error loading all hospitals data");
        } else {
          const headers = data[0];
          const response = [];

          for (let i = 1; i < data.length; i++) {
            let hospital = {};

            headers.forEach(
              (label, labelIndex) =>
                (hospital[label] = data[i][labelIndex] || null)
            );

            hospital["_id"] = i - 1;
            response.push(hospital);
            hospital = {};
          }

          let filteredResponse = response.filter(
            (item) => item.hospital_id === hospitalName
          );
          res.send({ success: true, data: filteredResponse });
        }
      }
    );
  } catch (error) {
    res.send(400).send({ success: false, data: error.message });
  }
});

module.exports = app;
