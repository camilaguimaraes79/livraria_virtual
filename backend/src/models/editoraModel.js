import pool from '../database/database.js';

class EditorasModel {

    async showEditoras() {
        const [rows] = await pool.execute(
            'SELECT * FROM editoras'
        );

        return rows;
    }

    async getEditoraById(id) {
        const [rows] = await pool.execute(
            'SELECT * FROM editoras WHERE id_editora = ?',
            [id]
        );

        return rows[0];
    }

    async createEditora(data) {
        const { nome, email, telefone } = data;

        const [rows] = await pool.execute(
            `INSERT INTO editoras (nome, email, telefone)
            VALUES (?, ?, ?)`,
            [nome, email, telefone]
        );

        return rows;
    }

    async updateEditora(id, data) {
        const { nome, email, telefone } = data;

        const [rows] = await pool.execute(
            `UPDATE editoras
            SET nome = ?,
            email = ?, 
            telefone = ?
            WHERE id_editora = ?`,
            [nome, email, telefone, id]
        );

        return rows;
    }

    async deleteEditora(id) {
        const [rows] = await pool.execute(
            'DELETE FROM editoras WHERE id_editora = ?',
            [id]
        );

        return rows;
    }
}

export default new EditorasModel();