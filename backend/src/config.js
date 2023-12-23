const { Sequelize } = require("sequelize");
const { createClient } = require("redis");

const sequelize = new Sequelize(process.env.POSTGRES_DB, { logging: false }); // Example for postgres

const clientRedis = createClient({
  url: process.env.REDIS_DB,
});

module.exports = { sequelize, clientRedis };
