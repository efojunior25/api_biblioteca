// const express = require('express');
// const router = express.Router();

const router = require('express').Router();

const bibliotecaController = require('../controllers/bibliotecaController');

router.get('/livro', (req, res) => {});

router.post('/livro', (req, res) => {
    try {
        const result = await bibliotecaController.salvarLivro(req.body);
        res.json(result);
    } catch(err) {
        console.error(err);
    }
});

router.put('/livro/:id', (req, res) => {});

router.delete('/livro/:id', (req, res) => {});

module.exports = router;    