const livroService = require('../services/livroService');

async function criar(req, res) {
  try {
    const livro = await livroService.criarLivro(req.body);
    res.status(201).json(livro);
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
}

async function listar(req, res) {
  const livros = await livroService.listarLivros();
  res.status(200).json(livros);
}

async function buscarPorId(req, res) {
  try {
    const livro = await livroService.buscarLivro(req.params.id);
    if (!livro) {
      return res.status(404).json({ erro: 'Livro não encontrado.' });
    }
    res.status(200).json(livro);
  } catch (erro) {
    res.status(400).json({ erro: 'ID inválido.' });
  }
}

async function deletar(req, res) {
  try {
    const removeu = await livroService.deletarLivro(req.params.id);
    if (!removeu) {
      return res.status(404).json({ erro: 'Livro não encontrado.' });
    }
    res.status(200).json({ removido: true });
  } catch (erro) {
    res.status(400).json({ erro: 'ID inválido.' });
  }
}

module.exports = { criar, listar, buscarPorId, deletar };