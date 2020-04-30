const DataUtil = require("../utils/DataUtil");
const data = new DataUtil();
const fs = require("fs");
const path = require("path");
const writePath = path.join(__dirname, `./output.json`);

async function rateLimitBy(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

(async () => {
  console.log("Building data set...");

  try {
    const allHospitals = await data.getHospitalList();
    const dataSetItems = [];

    for (index in allHospitals) {
      await rateLimitBy(1000);

      const geoDataRequest = await data.getHospitalGeo(allHospitals[index].hospital_name);
      let hospitalData = {};

      if (geoDataRequest.length >= 1) {
        hospitalData = allHospitals[index];
        hospitalData.geo_data = geoDataRequest;
      } else {
        hospitalData.geo_data = null;
      }

      dataSetItems.push(hospitalData);
      console.log(`Completed ${dataSetItems.length}/${allHospitals.length}`);
    }

    fs.writeFile(writePath, JSON.stringify(dataSetItems, null, 4), (error) =>
      error
        ? console.error("Error writing data-set...")
        : console.log("Successfully created data-set!")
    );
  } catch (error) {
    console.log(
      "Error obtaining chargemaster hospitals list... is the API down?",
      error.message
    );
  }
})();
