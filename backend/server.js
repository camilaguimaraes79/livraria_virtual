import express from 'express';
import dotenv from 'dotenv';
dotenv.config();


import clienteRoutes from './src/routes/clienteRoutes.js';
import categoriaRoutes from './src/routes/categoriaRoutes.js';
import editoraRoutes from './src/routes/editoraRoutes.js';
import livroRoutes from './src/routes/livroRoutes.js';
import compraRoutes from './src/routes/compraRoutes.js';

const app = express();

app.use(express.json());

// Rotas
app.use('/clientes', clienteRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/editoras', editoraRoutes);
app.use('/livros', livroRoutes);
app.use('/compras', compraRoutes);

const PORT = process.env.PORT || 3000;

console.log(process.env);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});