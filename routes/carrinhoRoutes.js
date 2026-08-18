const express = require('express');
const router = express.Router();
const carrinhoController = require('../controllers/carrinhoController');

router.post('/carrinho/item', carrinhoController.adicionar);
router.delete('/carrinho/item/:id', carrinhoController.remover);
router.get('/carrinho', carrinhoController.visualizar);

module.exports = router;