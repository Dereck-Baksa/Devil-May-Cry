var express = require("express");
var router = express.Router();

var missoesController = require("../controllers/missoesController");


router.post("/missaoUpdate", function (req, res) {
    missoesController.missaoUpdate(req, res);
})
router.post("/missaoSecretaUpdate", function (req, res) {
    missoesController.missaoSecretaUpdate(req, res);
})


module.exports = router;
