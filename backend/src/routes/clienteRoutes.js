import express from 'express';
import ClienteController from '../controllers/clienteController.js';

const router = express.Router();

router.get('/', ClienteController.showClientes);
router.get('/:id', ClienteController.getClienteById);
router.post('/', ClienteController.createCliente);
router.put('/:id', ClienteController.updateCliente);
router.delete('/:id', ClienteController.deleteCliente);

export default router;