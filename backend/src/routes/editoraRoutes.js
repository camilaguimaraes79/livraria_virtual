import express from 'express';
import EditoraController from '../controllers/editoraController.js';
import validateEditora from '../middlewares/editoraMiddleware.js';

const router = express.Router();

router.get('/', EditoraController.showEditoras);
router.get('/:id', EditoraController.getEditoraById);

router.post(
    '/',
    validateEditora,
    EditoraController.createEditora
);

router.put(
    '/:id',
    validateEditora,
    EditoraController.updateEditora
);

router.delete('/:id', EditoraController.deleteEditora);

export default router;