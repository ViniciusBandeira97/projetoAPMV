const router = require("express").Router();

const carController = require("../controllers/carController");

//Funções
router.route("/carR").post((req, res) => carController.create(req, res));

router.route("/carR").get((req, res) => carController.getAll(req, res));

router.route("/CarR/:Email").get((req, res) => carController.getAllByUserEmail(req, res));

router.route("/carR/:Email/:Modelo/:Ano/:Placa").get((req, res) => carController.delete(req, res));

module.exports = router ;