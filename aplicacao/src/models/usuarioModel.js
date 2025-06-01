var database = require("../database/config")




// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, dtNasc, senha, icone) {

    var instrucaoSql = `
        INSERT INTO usuario (nome, email, dt_nacimento, senha, icone) VALUES ('${nome}', '${email}', '${dtNasc}', '${senha}','${icone}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarMissao(id) {

    var instrucaoSql = `
        insert into missao(fkusuario,numero_missao,secreta,time_missao,orbs,stylish,item_used,damage,completa)
value	('${id}','1','0','0','0','0','0','0','0'),
		('${id}','2','0','0','0','0','0','0','0'),	
		('${id}','3','0','0','0','0','0','0','0'),
        ('${id}','4','0','0','0','0','0','0','0'),
        ('${id}','5','0','0','0','0','0','0','0'),
        ('${id}','6','0','0','0','0','0','0','0'),
        ('${id}','7','0','0','0','0','0','0','0'),
        ('${id}','8','0','0','0','0','0','0','0'),
        ('${id}','9','0','0','0','0','0','0','0'),
        ('${id}','10','0','0','0','0','0','0','0'),
        ('${id}','11','0','0','0','0','0','0','0'),
        ('${id}','12','0','0','0','0','0','0','0'),
        ('${id}','13','0','0','0','0','0','0','0'),
        ('${id}','14','0','0','0','0','0','0','0'),
        ('${id}','15','0','0','0','0','0','0','0'),
        ('${id}','16','0','0','0','0','0','0','0'),
        ('${id}','17','0','0','0','0','0','0','0'),
        ('${id}','18','0','0','0','0','0','0','0'),
        ('${id}','19','0','0','0','0','0','0','0'),
        ('${id}','20','0','0','0','0','0','0','0'),
        ('${id}','1','1','0','0','0','0','0','0'),
		('${id}','2','1','0','0','0','0','0','0'),
		('${id}','3','1','0','0','0','0','0','0'),
        ('${id}','4','1','0','0','0','0','0','0'),
        ('${id}','5','1','0','0','0','0','0','0'),
        ('${id}','6','1','0','0','0','0','0','0'),
        ('${id}','7','1','0','0','0','0','0','0'),
        ('${id}','8','1','0','0','0','0','0','0'),
        ('${id}','9','1','0','0','0','0','0','0'),
        ('${id}','10','1','0','0','0','0','0','0'),
        ('${id}','11','1','0','0','0','0','0','0'),
        ('${id}','12','1','0','0','0','0','0','0');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function logar(email, senha) {

    var instrucaoSql = `
    select email,nome,id,icone from usuario
    where email = '${email}' and senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarId(email) {

    var instrucaoSql = `
    select id from usuario
    where email = '${email}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarMissao,
    buscarId,
    logar,
    cadastrar
};