const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./postgres_db");
const { connectToRedisDb } = require("./postgres_db/redis_db");

const app = express();
const port = 3000;

const usersRouter = require("./routes/users");
const redisRouter = require("./routes/redis");

app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);
app.use("/redis", redisRouter);

const start = async () => {
  await connectToDatabase();
  await connectToRedisDb();
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

start();
