const mongoose = require('mongoose');

const carrinhoSchema = new mongoose.Schema({
  itens: [
    {
      livroId: { type: mongoose.Schema.Types.ObjectId, ref: 'Livro' },
      quantidade: Number
    }
  ]
});

module.exports = mongoose.model('Carrinho', carrinhoSchema);