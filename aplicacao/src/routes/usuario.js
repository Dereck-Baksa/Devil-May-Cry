var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrarMissao", function (req, res) {
    usuarioController.cadastrarMissao(req, res);
})
router.post("/logar", function (req, res) {
    usuarioController.logar(req, res);
})

router.get("/buscarId/:emailVar", function (req, res) {
    usuarioController.buscarId(req, res);
});


module.exports = router;