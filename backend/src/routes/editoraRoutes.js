import express from 'express';
import EditoraController from '../controllers/editoraController.js';

const router = express.Router();

router.get('/', EditoraController.showEditoras);
router.get('/:id', EditoraController.getEditoraById);
router.post('/', EditoraController.createEditora);
router.put('/:id', EditoraController.updateEditora);
router.delete('/:id', EditoraController.deleteEditora);

export default router;