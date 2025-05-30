var missoesModel = require("../models/missoesModel");

function missaoUpdate(req, res) {
    var time = req.body.timeServer;
    var orbs = req.body.orbsServer;
    var stylish = req.body.stylishServer;
    var damage = req.body.damageServer;
    var item_used = req.body.item_usedServer;
    var id = req.body.idServer;
    var num_missao = req.body.num_missaoServer;
    


    if (id == undefined) {
        res.status(400).send("Id is undefined!");
    } else if (num_missao == undefined) {
        res.status(400).send("Número_missão is undefined!");
    } else if (time == undefined) {
        res.status(400).send("Time is undefined!");
    } else if (orbs == undefined) {
        res.status(400).send("Orbs is undefined!");
    } else if (stylish == undefined) {
        res.status(400).send("Stylish is undefined!");
    } else if (damage == undefined) {
        res.status(400).send("Damage is undefined!");
    } else  if (item_used == undefined) {
        res.status(400).send("Item_used is undefined!");
    } else {

        missoesModel.missaoUpdate(time,orbs,stylish,damage,item_used,id,num_missao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function missaoSecretaUpdate(req, res) {
    var idSecreta = req.body.idSecretaServer;
    var num_missaoSecreta = req.body.num_missaoSecretaServer;
    


    if (idSecreta == undefined) {
        res.status(400).send("id is undefined!");
    } else if (num_missaoSecreta == undefined) {
        res.status(400).send("Número_missão is undefined!");
    } else {

        missoesModel.missaoSecretaUpdate(idSecreta,num_missaoSecreta)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    missaoUpdate,
    missaoSecretaUpdate

}