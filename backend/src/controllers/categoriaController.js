import CategoriasModel from '../models/categoriaModel.js';

class CategoriasController {

    async showCategorias(req, res) {
        try {
            const categorias = await CategoriasModel.showCategorias();

            return res.status(200).json(categorias);

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getCategoriaById(req, res) {
        try {
            const { id } = req.params;

            const categoria = await CategoriasModel.getCategoriaById(id);

            if (!categoria) {
                return res.status(404).json({
                    message: 'Categoria não encontrada'
                });
            }

            return res.status(200).json(categoria);

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async createCategoria(req, res) {
        try {
            const result = await CategoriasModel.createCategoria(req.body);

            return res.status(201).json({
                message: 'Categoria cadastrada com sucesso',
                result
            });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async updateCategoria(req, res) {
        try {
            const { id } = req.params;

            await CategoriasModel.updateCategoria(id, req.body);

            return res.status(200).json({
                message: 'Categoria atualizada com sucesso'
            });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async deleteCategoria(req, res) {
        try {
            const { id } = req.params;

            await CategoriasModel.deleteCategoria(id);

            return res.status(200).json({
                message: 'Categoria removida com sucesso'
            });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default new CategoriasController();