import express from 'express';
import LivroController from '../controllers/livrosController.js';

const router = express.Router();

router.get('/', LivroController.showLivros);
router.get('/:id', LivroController.getLivroById);
router.post('/', LivroController.createLivro);
router.put('/:id', LivroController.updateLivro);
router.delete('/:id', LivroController.deleteLivro);

export default router;