import express from 'express';
import CategoriaController from '../controllers/categoriaController.js';
import validateCategoria from '../middlewares/categoriaMiddleware.js';

const router = express.Router();

router.get('/', CategoriaController.showCategorias);
router.get('/:id', CategoriaController.getCategoriaById);

router.post(
    '/',
    validateCategoria,
    CategoriaController.createCategoria
);

router.put(
    '/:id',
    validateCategoria,
    CategoriaController.updateCategoria
);

router.delete(
    '/:id',
    CategoriaController.deleteCategoria
);

export default router;