const fs = require("fs");

exports.seed = function (knex) {
  const sql = fs.readFileSync(process.cwd() + "/sql/seeds/hospitals.sql").toString();
  return knex.raw(sql);
};