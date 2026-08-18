const carrinhoService = require('../services/carrinhoService');

async function adicionar(req, res) {
  try {
    const { livroId, quantidade } = req.body;
    const carrinho = await carrinhoService.adicionarItem(livroId, quantidade);
    res.status(201).json(carrinho);
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
}

async function remover(req, res) {
  const carrinho = await carrinhoService.removerItem(req.params.id);
  res.status(200).json(carrinho);
}

async function visualizar(req, res) {
  const carrinho = await carrinhoService.verCarrinho();
  res.status(200).json(carrinho);
}

module.exports = { adicionar, remover, visualizar };