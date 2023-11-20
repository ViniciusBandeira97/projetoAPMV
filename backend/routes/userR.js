const router = require("express").Router();

const { userController, verificarEmail } = require("../controllers/userController");


//Funções
router.route("/userR").post((req, res) => userController.create(req, res));

router.route("/userR/:Email").get((req, res) => verificarEmail.get(req, res));


module.exports = router ;