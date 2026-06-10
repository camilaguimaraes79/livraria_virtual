import pool from '../database/database.js';

class CategoriasModel {

    async showCategorias() {
        const [rows] = await pool.execute(
            'SELECT * FROM categorias'
        );

        return rows;
    }

    async getCategoriaById(id) {
        const [rows] = await pool.execute(
            'SELECT * FROM categorias WHERE id_categoria = ?',
            [id]
        );

        return rows[0];
    }

    async createCategoria(data) {
        console.log("Dados recebidos:", data);
        const { categoria } = data;
        console.log("categoria:", categoria);

        
        const [rows] = await pool.execute(
            `INSERT INTO categorias (categoria)
            VALUES (?)`,
            [categoria]
        );

        return rows;
    }

    async updateCategoria(id, data) {
        const { categoria } = data;

        const [rows] = await pool.execute(
            `UPDATE categorias
            SET categoria = ?
            WHERE id_categoria = ?`,
            [categoria, id]
        );

        return rows;
    }

    async deleteCategoria(id) {
        const [rows] = await pool.execute(
            'DELETE FROM categorias WHERE id_categoria = ?',
            [id]
        );

        return rows;
    }
}

export default new CategoriasModel();