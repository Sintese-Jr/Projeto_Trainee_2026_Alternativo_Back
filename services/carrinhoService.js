const carrinhoRepository = require('../repositories/carrinhoRepository');
const livroRepository = require('../repositories/livroRepository');

async function adicionarItem(livroId, quantidade) {
  const livro = await livroRepository.buscarPorId(livroId);

  if (!livro) {
    throw new Error('Livro não encontrado.');
  }
  if (livro.quantidade_estoque < quantidade) {
    throw new Error('Estoque insuficiente para essa quantidade.');
  }

  const carrinho = await carrinhoRepository.buscarCarrinho();
  carrinho.itens.push({ livroId: livroId, quantidade: quantidade });
  await carrinhoRepository.salvar(carrinho);

  return carrinho;
}

async function removerItem(livroId) {
  const carrinho = await carrinhoRepository.buscarCarrinho();
  carrinho.itens = carrinho.itens.filter(item => item.livroId.toString() !== livroId);
  await carrinhoRepository.salvar(carrinho);
  return carrinho;
}

async function verCarrinho() {
  return await carrinhoRepository.buscarCarrinho();
}

module.exports = { adicionarItem, removerItem, verCarrinho };