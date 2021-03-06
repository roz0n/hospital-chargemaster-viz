const DataUtil = require("../utils/DataUtil");
const data = new DataUtil();
const fs = require("fs");
const path = require("path");
const db = require("../db");

const writePath = path.join(__dirname, `../data/hospitals.json`);

async function rateLimitBy(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

(async () => {
  console.log("Building data set...");

  // Handle geojson file creation
  try {
    const allHospitals = await data.getHospitalList();
    const dataSetItems = [];

    for (index in allHospitals) {
      await rateLimitBy(1000);

      const geoDataRequest = await data.getHospitalGeoData(
        allHospitals[index].hospital_id
      );
      let hospitalData = {};

      if (geoDataRequest.length >= 1) {
        hospitalData = allHospitals[index];
        hospitalData.geo_data = geoDataRequest[0];
      } else {
        hospitalData = allHospitals[index];
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

    return;
  }

  // Handle creating database tables
  try {
    
  } catch (error) {
    
  }
})();
