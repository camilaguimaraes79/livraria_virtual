import pool from '../database/database.js';

class ComprasModel {

    async showCompras() {
        const [rows] = await pool.execute(`
            SELECT
                cp.*,
                c.nome AS cliente,
                l.titulo AS livro
            FROM compras cp
            INNER JOIN clientes c
                ON cp.id_cliente = c.id_cliente
            INNER JOIN livros l
                ON cp.id_livro = l.id_livro
        `);

        return rows;
    }

    async getCompraById(id) {
        const [rows] = await pool.execute(
            'SELECT * FROM compras WHERE id_compra = ?',
            [id]
        );

        return rows[0];
    }

    async createCompra(data) {
        const {
            id_cliente,
            id_livro,
            quantidade,
            data_compra
        } = data;

        const [result] = await pool.execute(
            `INSERT INTO compras
            (id_cliente, id_livro, quantidade, data_compra)
            VALUES (?, ?, ?, ?)`,
            [
                id_cliente,
                id_livro,
                quantidade,
                data_compra
            ]
        );

        return result;
    }

    async updateCompra(id, data) {
        const {
            id_cliente,
            id_livro,
            quantidade,
            data_compra
        } = data;

        const [result] = await pool.execute(
            `UPDATE compras
            SET id_cliente = ?,
                id_livro = ?,
                quantidade = ?,
                data_compra = ?
            WHERE id_compra = ?`,
            [
                id_cliente,
                id_livro,
                quantidade,
                data_compra,
                id
            ]
        );

        return result;
    }

    async deleteCompra(id) {
        const [result] = await pool.execute(
            'DELETE FROM compras WHERE id_compra = ?',
            [id]
        );

        return result;
    }
}

export default new ComprasModel();