var database = require("../database/config")






function missaoUpdate(time,orbs,stylish,damage,item_used,id,num_missao) {

    var instrucaoSql = `
update missao set time_missao = ${time}, orbs = ${orbs}, stylish = ${stylish},damage = ${damage}, item_used = ${item_used},
completa = 1 where fkusuario = ${id} and  numero_missao = ${num_missao} and secreta = 0;
`;
console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}

function missaoSecretaUpdate(idSecreta,num_missaoSecreta) {

    var instrucaoSql = `
update missao set completa = 1 where fkusuario = ${idSecreta} and  numero_missao = ${num_missaoSecreta} and secreta = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    missaoUpdate,
    missaoSecretaUpdate

}