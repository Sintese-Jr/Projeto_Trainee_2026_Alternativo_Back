const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

router.post('/livros', livroController.criar);
router.get('/livros', livroController.listar);
router.get('/livros/:id', livroController.buscarPorId);
router.delete('/livros/:id', livroController.deletar);

module.exports = router;