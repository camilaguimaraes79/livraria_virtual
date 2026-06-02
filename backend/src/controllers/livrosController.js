import LivrosModel from '../models/livroModel.js';

class LivrosController {

    async showLivros(req, res) {
        try {
            const livros = await LivrosModel.showLivros();
            return res.status(200).json(livros);

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getLivroById(req, res) {
        try {
            const { id } = req.params;

            const livro = await LivrosModel.getLivroById(id);

            if (!livro) {
                return res.status(404).json({
                    message: 'Livro não encontrado'
                });
            }

            return res.status(200).json(livro);

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async createLivro(req, res) {
        try {
            const { titulo, autor, ano_publicacao, preco, id_editora, id_categoria } = req.body;

            // validação
            if (!titulo || !autor || !ano_publicacao || !preco || !id_editora || !id_categoria) {
                return res.status(400).json({
                    message: "Todos os campos são obrigatórios"
                });
            }

            const result = await LivrosModel.createLivro({
                titulo,
                autor,
                ano_publicacao,
                preco,
                id_editora,
                id_categoria
            });

            return res.status(201).json({
                message: 'Livro cadastrado com sucesso',
                result
            });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async updateLivro(req, res) {
        try {
            const { id } = req.params;
            const { titulo, autor, ano_publicacao, preco, id_editora, id_categoria } = req.body;

            // validação
            if (!titulo || !autor || !ano_publicacao || !preco || !id_editora || !id_categoria) {
                return res.status(400).json({
                    message: "Todos os campos são obrigatórios"
                });
            }

            const result = await LivrosModel.updateLivro(id, {
                titulo,
                autor,
                ano_publicacao,
                preco,
                id_editora,
                id_categoria
            });

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: "Livro não encontrado"
                });
            }

            return res.status(200).json({
                message: 'Livro atualizado com sucesso'
            });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async deleteLivro(req, res) {
        try {
            const { id } = req.params;

            const result = await LivrosModel.deleteLivro(id);

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: "Livro não encontrado"
                });
            }

            return res.status(200).json({
                message: 'Livro removido com sucesso'
            });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default new LivrosController();