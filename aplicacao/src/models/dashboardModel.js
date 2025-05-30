var database = require("../database/config")


function buscarDesempenhoGeral(id) {

    var instrucaoSql = `
   select numero_missao as missao,
round(avg(time_missao + orbs + stylish + damage + item_used)) as media
from missao
where fkusuario = ${id} and completa = 1 and secreta = 0 and time_missao > 0 and orbs > 0 and stylish > 0 and damage > 0 and item_used > 0 
group by missao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarDesempenhoMissao(id) {

    var instrucaoSql = `
  select numero_missao as missao, time_missao as time , orbs as orbs, stylish as stylish, damage as damage, item_used as item
from missao
where fkusuario = ${id} and completa = 1 and secreta = 0;
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarKPI(id) {

    var instrucaoSql = `
   select numero_missao from missao
where fkusuario = ${id} and completa = 1 and secreta = 1;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
 buscarDesempenhoGeral,
 buscarDesempenhoMissao,
 buscarKPI
};