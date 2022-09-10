const bibliotecaModel = require('../models/bibliotecaModel');

const { v4 } = require('uuid');

const salvarLivro = async (payload) => {
    try {
        payload.id = v4();

        const result = await bibliotecaModel.criaLivro(payload);

        return result;

    } catch(err) {
        console.error(err);
    }
}

module.exports = {
    salvarLivro
}