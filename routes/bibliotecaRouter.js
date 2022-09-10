// const express = require('express');
// const router = express.Router();

const router = require('express').Router();

const bibliotecaController = require('../controllers/bibliotecaController');

router.get('/biblioteca', (req, res) => {});

router.post('/biblioteca', (req, res) => {
    try {
        const result = await bibliotecaController.salvarLivro(req.body);
        res.json(result);
    } catch(err) {
        console.error(err);
    }
});

router.put('/biblioteca/:id', (req, res) => {});

router.delete('/biblioteca/:id', (req, res) => {});

module.exports = router;    