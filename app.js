const fs = require("fs");
const tsv = require("node-tsv-json");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const dataSet = require("./data/hospitals.json");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.get("/api", (req, res) => res.send({ success: true, data: new Date() }));

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
    res.send(500).send({ success: false, error: true, data: error.message });
  }
});

app.get("/api/hospitals/:id", (req, res) => {
  const { id } = req.params;
  const response = dataSet.filter(item => item._id === +id);

  res.send({ success: true, data: response });
});

app.get("/api/all-hospitals", (req, res) => {
  res.send({ success: true, data: dataSet });
});

app.get("/api/hospitals/pricing/:id", async (req, res) => {
  const id = req.id;

  try {
    if (!id) throw new Error("No hospital id provided");

    fs.readFile(
      `../hospital-chargemaster-master/${id}/data-latest.tsv`,
      (error, data) => {
        if (error) {
          throw new Error("Error hospital data not available");
        }

        // Do TSV shit again
      }
    );
  } catch (error) {
    res.send(400).send({ error: true, data: error.message });
  }
});

module.exports = app;
