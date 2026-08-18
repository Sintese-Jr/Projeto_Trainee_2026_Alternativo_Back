const Carrinho = require('../models/Carrinho');

async function buscarCarrinho() {
  let carrinho = await Carrinho.findOne();
  if (!carrinho) {
    carrinho = new Carrinho({ itens: [] });
    await carrinho.save();
  }
  return carrinho;
}

async function salvar(carrinho) {
  return await carrinho.save();
}

module.exports = { buscarCarrinho, salvar };