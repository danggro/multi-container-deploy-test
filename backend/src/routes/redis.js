const { clientRedis } = require("../config");

const router = require("express").Router();

router.post("/:id", async (req, res) => {
  const { id } = req.params;
  const time = new Date().toLocaleTimeString();
  await clientRedis.set(id, time);
  res.send({ time });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const time = await clientRedis.get(id);
  res.send({ time });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await clientRedis.del(id);
  res.send({ id });
});

module.exports = router;
