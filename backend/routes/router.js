const router = require("express").Router();

// Car Router
const carRouter = require("./carR")

router.use("/", carRouter);

// User Router
const userRouter = require("./userR")

router.use("/", userRouter);

module.exports = router;