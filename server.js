const express = require('express');
const conectaBanco = require('./config/database');
const livroRoutes = require('./routes/livroRoutes');
const carrinhoRoutes = require('./routes/carrinhoRoutes');

const app = express();
app.use(express.json());
app.use(livroRoutes);
app.use(carrinhoRoutes);

conectaBanco();

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});