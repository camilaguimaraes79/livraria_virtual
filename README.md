# Livraria Virtual — API REST

Sistema backend para gerenciamento de uma livraria online, desenvolvido com Node.js, Express e MySQL como parte de projeto desenvolvido durante o curso de Informática para internet  no SENAC.

---

## Sobre o Projeto

O sistema foi desenvolvido para atender às necessidades de uma livraria online, permitindo o gerenciamento de clientes, categorias de livros, editoras, livros e compras através de uma API REST.

A API segue os princípios REST, utilizando os métodos HTTP (GET, POST, PUT, DELETE) e retornando dados no formato JSON. A arquitetura do projeto segue o padrão MVC (Model-View-Controller), separando as responsabilidades em camadas bem definidas.

---

## Tecnologias Utilizadas

| Pacote | Funcao |
|--------|--------|
| Node.js | Ambiente de execucao JavaScript no servidor |
| Express | Framework para criacao de servidores e rotas HTTP |
| MySQL2 | Driver de conexao com o banco de dados MySQL |
| Dotenv | Carregamento de variaveis de ambiente via arquivo .env |
| CORS | Permissao de acesso a API por outros dominios |
| Bcrypt | Criptografia de senhas |
| JsonWebToken | Geracao e validacao de tokens JWT |
| Nodemon | Reinicio automatico do servidor durante o desenvolvimento |

---

## Estrutura do Projeto

```
livraria_loja_virtual/
│
├── backend/
│   ├── .env
│   ├── server.js
│   ├── package.json
│   │
│   └── src/
│       ├── database/
│       │   └── connection.js
│       │
│       ├── models/
│       │   ├── clienteModel.js
│       │   ├── categoriaModel.js
│       │   ├── editoraModel.js
│       │   ├── livroModel.js
│       │   └── compraModel.js
│       │
│       ├── controllers/
│       │   ├── clienteController.js
│       │   ├── categoriaController.js
│       │   ├── editoraController.js
│       │   ├── livroController.js
│       │   └── compraController.js
│       │
│       ├── routes/
│       │   ├── clienteRoutes.js
│       │   ├── categoriaRoutes.js
│       │   ├── editoraRoutes.js
│       │   ├── livroRoutes.js
│       │   └── compraRoutes.js
│       │
│       ├── middlewares/
│       └── utils/
```

## Banco de Dados

O sistema utiliza as seguintes tabelas no MySQL:

| Tabela | Campos |
|--------|--------|
| clientes | id_cliente, nome, email, telefone, data_cadastro, cidade, estado |
| categorias | id_categoria, categoria |
| editoras | id_editora, nome, email, telefone, data_cadastro |
| livros | id_livro, titulo, autor, ano_publicacao, preco, id_editora, id_categoria |
| compras | id_compra, qtde, valor, desconto, data_compra, id_livro, id_cliente |

---

## Como Executar

### Pre-requisitos

- Node.js v18 ou superior
- MySQL instalado e em execucao

### Passo a passo

**1. Clone o repositorio**
```bash
git clone https://github.com/seu-usuario/livraria_loja_virtual.git
cd livraria_loja_virtual/backend
```

**2. Instale as dependencias**
```bash
npm install
```

**3. Configure o arquivo .env**

Crie um arquivo `.env` dentro da pasta `backend` com as seguintes variaveis:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=livraria
JWT_SECRET=sua_chave_secreta
PORT=4000

**4. Inicie o servidor em modo de desenvolvimento**
```bash
npm run dev
```

A API estara disponivel em `http://localhost:4000`.

---

## Arquitetura
Requisicao HTTP
|
Routes       <- define qual URL chama qual controller
|
Controllers   <- recebe req, chama o model, devolve res
|
Models      <- executa o SQL no banco de dados
|
MySQL DB     <- armazena e retorna os dados

---

## Endpoints da API

### Clientes — `/clientes`

| Metodo | Endpoint | Descricao |
|--------|----------|-----------|
| GET | /clientes | Lista todos os clientes |
| GET | /clientes/:id | Busca cliente por ID |
| POST | /clientes | Cadastra novo cliente |
| PUT | /clientes/:id | Atualiza dados do cliente |
| DELETE | /clientes/:id | Remove cliente |

### Categorias — `/categorias`

| Metodo | Endpoint | Descricao |
|--------|----------|-----------|
| GET | /categorias | Lista todas as categorias |
| GET | /categorias/:id | Busca categoria por ID |
| POST | /categorias | Cadastra nova categoria |
| PUT | /categorias/:id | Atualiza categoria |
| DELETE | /categorias/:id | Remove categoria |

### Editoras — `/editoras`

| Metodo | Endpoint | Descricao |
|--------|----------|-----------|
| GET | /editoras | Lista todas as editoras |
| GET | /editoras/:id | Busca editora por ID |
| POST | /editoras | Cadastra nova editora |
| PUT | /editoras/:id | Atualiza editora |
| DELETE | /editoras/:id | Remove editora |

### Livros — `/livros`

| Metodo | Endpoint | Descricao |
|--------|----------|-----------|
| GET | /livros | Lista todos os livros |
| GET | /livros/:id | Busca livro por ID |
| POST | /livros | Cadastra novo livro |
| PUT | /livros/:id | Atualiza livro |
| DELETE | /livros/:id | Remove livro |

### Compras — `/compras`

| Metodo | Endpoint | Descricao |
|--------|----------|-----------|
| GET | /compras | Lista todas as compras |
| GET | /compras/:id | Busca compra por ID |
| POST | /compras | Registra nova compra |
| PUT | /compras/:id | Atualiza compra |
| DELETE | /compras/:id | Remove compra |

---

## Exemplos de Requisicao

### POST /clientes
```json
{
  "nome": "Joao Silva",
  "email": "joao@email.com",
  "telefone": "(11) 91234-5678",
  "cidade": "Sao Paulo",
  "estado": "SP"
}
```

### POST /livros
```json
{
  "titulo": "Fundamentos de Node.js",
  "autor": "Autor Exemplo",
  "ano_publicacao": 2024,
  "preco": 59.90,
  "id_editora": 1,
  "id_categoria": 1
}
```

### POST /compras
```json
{
  "id_cliente": 1,
  "id_livro": 1,
  "qtde": 2,
  "valor": 119.80,
  "desconto": 11.98,
  "data_compra": "2024-06-01"
}
```

---

## Codigos de Resposta

| Codigo | Descricao |
|--------|-----------|
| 200 | Requisicao bem-sucedida |
| 201 | Recurso criado com sucesso |
| 400 | Dados invalidos ou campos obrigatorios ausentes |
| 404 | Recurso nao encontrado |
| 500 | Erro interno do servidor |

---

## Autora

Desenvolvido por Camila Guimaraes durante o curso de Informática para internet  de Sistemas no SENAC.
