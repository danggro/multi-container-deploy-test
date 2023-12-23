const { clientRedis } = require("../../config");

const connectToRedisDb = async () => {
  try {
    await clientRedis.connect();
    console.log("Success connect to redis db");
  } catch (error) {
    console.log(("Error connect to redis db", error));
  }
};

module.exports = { connectToRedisDb };
