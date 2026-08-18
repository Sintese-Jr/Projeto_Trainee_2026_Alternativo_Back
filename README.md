# API Projeto Alternativo Simon Books

API RESTful desenvolvida para a livraria Simon Books, com o objetivo de
gerenciar o catálogo de livros e um carrinho de compras.

## Tecnologias utilizadas
- Node.js
- Express.js
- MongoDB (via Mongoose)

## Como rodar o projeto

### 1. Clonar o repositório e instalar dependências
```bash
npm install
```

### 2. Configurar variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto, seguindo o modelo do `.env.example`:MONGO_URI=string_de_conexao

### 3. Popular o banco de dados (opcional, mas recomendado)
```bash
node seeder.js
```
Isso lê o arquivo `livros.csv` e insere os livros no banco de dados.

### 4. Iniciar o servidor
```bash
node server.js
```
O servidor sobe na porta 3000.

## Endpoints (ações) disponíveis

### Catálogo de Livros
- `POST /livros` — cria um novo livro
- `GET /livros` — lista todos os livros
- `GET /livros/:id` — busca um livro específico
- `DELETE /livros/:id` — remove um livro

### Carrinho de Compras
- `POST /carrinho/item` — adiciona um item ao carrinho
- `DELETE /carrinho/item/:id` — remove um item do carrinho
- `GET /carrinho` — visualiza o carrinho atual

## Estrutura do projeto
- config/ -> conexão com o banco de dados
- models/ -> schemas do MongoDB (Mongoose)
- repositories/ -> acesso direto ao banco de dados
- services/ -> regras de negócio
- controllers/ -> tratamento das requisições e respostas
- routes/ -> definição das rotas