const { Sequelize } = require("sequelize");
const { createClient } = require("redis");

const sequelize = new Sequelize(process.env.POSTGRES_DB, { logging: false }); // Example for postgres
// const sequelize = new Sequelize("test", "postgres", "Danggro@120300", {
//   host: "mcdt.postgres.database.azure.com",
//   dialect: "postgres",
//   port: 5432,
// });
const clientRedis = createClient({
  url: process.env.REDIS_DB,
});

module.exports = { sequelize, clientRedis };
