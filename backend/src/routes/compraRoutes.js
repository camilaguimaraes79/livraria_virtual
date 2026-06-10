import express from 'express';
import CompraController from '../controllers/comprasController.js';
import validateCompra from '../middlewares/compraMiddleware.js';

const router = express.Router();

router.get('/', CompraController.showCompras);
router.get('/:id', CompraController.getCompraById);

router.post(
    '/',
    validateCompra,
    CompraController.createCompra
);

router.put(
    '/:id',
    validateCompra,
    CompraController.updateCompra
);

router.delete('/:id', CompraController.deleteCompra);

export default router;