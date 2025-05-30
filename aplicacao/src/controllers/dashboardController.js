var dashboardModel = require("../models/dashboardModel");


function buscarDesempenhoGeral(req, res) {
    var id = req.params.idVar;


    dashboardModel.buscarDesempenhoGeral(id).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as medidas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}




function buscarDesempenhoMissao(req, res) {
   var id = req.params.idVar


    dashboardModel.buscarDesempenhoMissao(id).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as medidas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



function buscarKPI(req, res) {
    var id = req.params.idVar;


    dashboardModel.buscarKPI(id).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as medidas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarDesempenhoGeral,
    buscarDesempenhoMissao,
    buscarKPI
};