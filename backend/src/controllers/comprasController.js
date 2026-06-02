import ComprasModel from '../models/compraModel.js';

class ComprasController {

    async showCompras(req, res) {
        try {
            const compras = await ComprasModel.showCompras();

            return res.status(200).json(compras);

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getCompraById(req, res) {
        try {
            const { id } = req.params;

            const compra = await ComprasModel.getCompraById(id);

            if (!compra) {
                return res.status(404).json({
                    message: 'Compra não encontrada'
                });
            }

            return res.status(200).json(compra);

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async createCompra(req, res) {
        try {
            const result = await ComprasModel.createCompra(req.body);

            return res.status(201).json({
                message: 'Compra registrada com sucesso',
                result
            });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async updateCompra(req, res) {
        try {
            const { id } = req.params;

            await ComprasModel.updateCompra(id, req.body);

            return res.status(200).json({
                message: 'Compra atualizada com sucesso'
            });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async deleteCompra(req, res) {
        try {
            const { id } = req.params;

            await ComprasModel.deleteCompra(id);

            return res.status(200).json({
                message: 'Compra removida com sucesso'
            });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default new ComprasController();