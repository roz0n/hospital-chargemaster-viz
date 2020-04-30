const fs = require("fs");
const got = require("got");

class DataUtil {
  hospitalsListEndpoint = "http://127.0.0.1:8081/api/hospitals";
  geodataEndpoint = (name) =>
    `https://nominatim.openstreetmap.org/?addressdetails=1&q=${name}&format=json&limit=1&countrycodes=US`;

  async getHospitalList() {
    try {
      const response = await got(this.hospitalsListEndpoint).json();
      return response.data;
    } catch (error) {
      console.log("ERROR in DataUti get func", error);
    }
  }

  async getHospitalGeo(name) {
    try {
      const response = await got(this.geodataEndpoint(name)).json();
      return response;
    } catch (error) {
      console.log("ERROR in DataUtil geo func");
    }

    return null;
  }
}

module.exports = DataUtil;
