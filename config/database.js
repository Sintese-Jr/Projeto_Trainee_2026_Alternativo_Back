require('dotenv').config();
const mongoose = require('mongoose');

async function conectaBanco() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado ao MongoDB com sucesso!");
  } catch (erro) {
    console.log("Erro ao conectar:", erro);
  }
}

module.exports = conectaBanco;