import express from 'express';
import LivroController from '../controllers/livrosController.js';
import validateLivro from '../middlewares/livroMiddleware.js';

const router = express.Router();

router.get('/', LivroController.showLivros);
router.get('/:id', LivroController.getLivroById);

router.post(
    '/',
    validateLivro,
    LivroController.createLivro
);

router.put(
    '/:id',
    validateLivro,
    LivroController.updateLivro
);

router.delete('/:id', LivroController.deleteLivro);

export default router;