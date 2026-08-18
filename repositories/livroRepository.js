const Livro = require('../models/Livro');

async function criar(livro) {
  const novoLivro = new Livro(livro);
  return await novoLivro.save();
}

async function listarTodos() {
  return await Livro.find();
}

async function buscarPorId(id) {
  return await Livro.findById(id);
}

async function deletar(id) {
  return await Livro.findByIdAndDelete(id);
}

module.exports = { criar, listarTodos, buscarPorId, deletar };