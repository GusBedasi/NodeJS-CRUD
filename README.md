# Teste FAAP

Teste consiste básicamente em duas telas, uma de cadastro e uma de listagem de items cadastrados, contando também com validações dos campos inseridos.

Desenvolvido com uma API própria para registro de dados, atualização, exclusão e listagem dos dados salvos.

## Tecnologias

NodeJS | ReactJS | SQLITE3

## Installation

Use o NPM ou YARN para a instalação, todos as dependências que estão no arquivo packet  .json serão instalados:
```nodejs
cd server 
npm install

cd web
npm install
```

## Usage
Com todas as depêndencias instaladas é preciso inciar o servidor da API e a aplicão web:

```nodejs
cd server
npm start

and

cd web
npm start
```
E para os registros serem salvos no banco de dados é necessário executar:

```nodejs
cd server
npm run knex:migrate
```

Então basta entrar no formulário de cadastro e começar a cadastrar, para visualização dos itens cadastrados basta alterar para a página de listagem.
