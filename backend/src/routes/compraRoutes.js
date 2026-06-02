import express from 'express';
import CompraController from '../controllers/comprasController.js';

const router = express.Router();

router.get('/', CompraController.showCompras);
router.get('/:id', CompraController.getCompraById);
router.post('/', CompraController.createCompra);
router.put('/:id', CompraController.updateCompra);
router.delete('/:id', CompraController.deleteCompra);

export default router;