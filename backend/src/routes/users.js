const router = require("express").Router();
const User = require("../postgres_db/model");

router.post("/", async (req, res) => {
  const { name } = req.body;
  const user = await User.create({ name });
  res.send(user);
});

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } });
  res.send({ id });
});

module.exports = router;
