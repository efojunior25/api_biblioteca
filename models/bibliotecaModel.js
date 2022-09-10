const { connectionMysql } = require('../connectors/mysql');

const criaLivro = ({id, titulo, descricao, autor, editora}) => {
    return new Promise((resolve, reject) => {
        
        connectionMysql.query(`INSERT INTO LIVRO (id, titulo, descricao, autor, editora) VALUE(${id}, ${titulo}, ${descricao}, ${autor}, ${editora})`, err => {
            err ? reject(err) : resolve('Adicionado com sucesso!');
        });
            

    });
}

module.exports = {
    criaLivro
}