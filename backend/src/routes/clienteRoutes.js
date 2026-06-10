import express from 'express';
import ClienteController from '../controllers/clienteController.js';
import validateCliente from '../middlewares/clienteMiddleware.js';

const router = express.Router();

router.get('/', ClienteController.showClientes);
router.get('/:id', ClienteController.getClienteById);

router.post(
    '/',
    validateCliente,
    ClienteController.createCliente
);

router.put(
    '/:id',
    validateCliente,
    ClienteController.updateCliente
);

router.delete(
    '/:id',
    ClienteController.deleteCliente
);

export default router;