var database = require("../database/config")




// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
    function cadastrar(nome, email, telefone, senha, icone) {
 
    var instrucaoSql = `
        INSERT INTO usuario (nome, telefone, email, senha) VALUES ('${nome}', '${email}', '${telefone}', '${senha}','${icone}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    }

    function logar(email, senha){

    var instrucaoSql = `
    select email,nome,id, from usuario
    where email = '${email}' and senha = '${senha}';
    `;   
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    }
module.exports = {
    logar,
    cadastrar
};