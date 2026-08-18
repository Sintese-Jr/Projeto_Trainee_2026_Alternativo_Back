const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  preco: Number,
  quantidade_estoque: Number
});

module.exports = mongoose.model('Livro', livroSchema);