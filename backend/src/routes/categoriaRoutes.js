import express from 'express';
import CategoriaController from '../controllers/categoriaController.js';

const router = express.Router();

router.get('/', CategoriaController.showCategorias);
router.get('/:id', CategoriaController.getCategoriaById);
router.post('/', CategoriaController.createCategoria);
router.put('/:id', CategoriaController.updateCategoria);
router.delete('/:id', CategoriaController.deleteCategoria);

export default router;