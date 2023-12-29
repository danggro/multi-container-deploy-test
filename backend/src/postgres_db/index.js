const User = require("./model");
const { sequelize } = require("../config");

// Option 1: Passing a connection URI
const connectToDatabase = async () => {
  try {
    console.log(process.env.POSTGRES_DB);
    await sequelize.authenticate();
    await User.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { connectToDatabase, sequelize };
