const livroRepository = require('../repositories/livroRepository');

async function criarLivro(dados) {
  const { titulo, autor, preco, quantidade_estoque } = dados;

  if (preco < 0) {
    throw new Error('O preço não pode ser negativo.');
  }
  if (quantidade_estoque < 0) {
    throw new Error('A quantidade em estoque não pode ser negativa.');
  }

  return await livroRepository.criar({ titulo, autor, preco, quantidade_estoque });
}

async function listarLivros() {
  return await livroRepository.listarTodos();
}

async function buscarLivro(id) {
  return await livroRepository.buscarPorId(id);
}

async function deletarLivro(id) {
  const resultado = await livroRepository.deletar(id);
  return resultado !== null;
}

module.exports = { criarLivro, listarLivros, buscarLivro, deletarLivro };