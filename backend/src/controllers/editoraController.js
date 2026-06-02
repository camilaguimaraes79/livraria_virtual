import EditorasModel from '../models/editoraModel.js';

class EditoraController {

    async showEditoras(req, res) {
        try {
            const editoras = await EditorasModel.showEditoras();

            return res.status(200).json(editoras);

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getEditoraById(req, res) {
        try {
            const { id } = req.params;

            const editora = await EditorasModel.getEditoraById(id);

            if (!editora) {
                return res.status(404).json({
                    message: 'Editora não encontrada'
                });
            }

            return res.status(200).json(editora);

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async createEditora(req, res) {
        try {
            const result = await EditorasModel.createEditora(req.body);

            return res.status(201).json({
                message: 'Editora cadastrada com sucesso',
                result
            });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async updateEditora(req, res) {
        try {
            const { id } = req.params;

            await EditorasModel.updateEditora(id, req.body);

            return res.status(200).json({
                message: 'Editora atualizada com sucesso'
            });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async deleteEditora(req, res) {
        try {
            const { id } = req.params;

            await EditorasModel.deleteEditora(id);

            return res.status(200).json({
                message: 'Editora removida com sucesso'
            });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default new EditoraController();