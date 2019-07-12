require("dotenv").config();

const knex = require("knex");

const knexConfig = require("../../knexfile");

const appEnv = process.env.appEnv || "development";

module.exports = knex(knexConfig[appEnv]);
