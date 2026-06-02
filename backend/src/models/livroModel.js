import pool from '../database/database.js';

class LivrosModel {

    async showLivros() {
        console.log("🔥 MODEL ATUAL EXECUTADO");
        const [rows] = await pool.execute(`
            SELECT
                l.*,
                c.categoria,
                e.nome
            FROM livros l
            INNER JOIN categorias c
                ON l.id_categoria = c.id_categoria
            INNER JOIN editoras e
                ON l.id_editora = e.id_editora
        `);

        return rows;
    }

    async getLivroById(id) {
        const [rows] = await pool.execute(
            'SELECT * FROM livros WHERE id_livro = ?',
            [id]
        );

        return rows[0];
    }

    async createLivro(data) {
        const {
            titulo,
            autor,
            ano_publicacao,
            preco,
            id_categoria,
            id_editora
        } = data;

        const [result] = await pool.execute(
            `INSERT INTO livros
            (titulo, autor, ano_publicacao, preco, id_categoria, id_editora)
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                titulo,
                autor,
                ano_publicacao,
                preco,
                id_categoria,
                id_editora
            ]
        );

        return result;
    }

    async updateLivro(id, data) {
        const {
            titulo,
            autor,
            ano_publicacao,
            preco,
            id_categoria,
            id_editora
        } = data;

        const [result] = await pool.execute(
            `UPDATE livros
            SET titulo = ?,
                autor = ?,
                ano_publicacao = ?,
                preco = ?,
                id_categoria = ?,
                id_editora = ?
            WHERE id_livro = ?`,
            [
                titulo,
                autor,
                ano_publicacao,
                preco,
                id_categoria,
                id_editora,
                id
            ]
        );

        return result;
    }

    async deleteLivro(id) {
        const [result] = await pool.execute(
            'DELETE FROM livros WHERE id_livro = ?',
            [id]
        );

        return result;
    }
}

export default new LivrosModel();