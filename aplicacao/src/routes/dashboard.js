var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");


router.get("/buscarDesempenhoGeral/:idVar", function (req, res) {
    dashboardController.buscarDesempenhoGeral(req, res);
});

router.get("/buscarDesempenhoMissao/:idVar", function (req, res) {
    dashboardController.buscarDesempenhoMissao(req, res);
});

router.get("/buscarKPI/:idVar", function (req, res) {
    dashboardController.buscarKPI(req, res);
});

module.exports = router;