import pool from '../database/database.js';

class ClienteModel {

    async showClientes() {
        const [rows] = await pool.execute(
            'SELECT * FROM clientes'
        );

        return rows;
    }

    async getClienteById(id) {
        const [rows] = await pool.execute(
            'SELECT * FROM clientes WHERE id_cliente = ?',
            [id]
        );

        return rows[0];
    }

    async createCliente(data) {
        const { nome, email, telefone } = data;

        const [result] = await pool.execute(
            `INSERT INTO clientes (nome, email, telefone)
            VALUES (?, ?, ?)`,
            [nome, email, telefone]
        );

        return result;
    }

    async updateCliente(id, data) {
        const { nome, email, telefone } = data;

        const [result] = await pool.execute(
            `UPDATE clientes
            SET nome = ?, email = ?, telefone = ?
            WHERE id_cliente = ?`,
            [nome, email, telefone, id]
        );

        return result;
    }

    async deleteCliente(id) {
        const [result] = await pool.execute(
            'DELETE FROM clientes WHERE id_cliente = ?',
            [id]
        );

        return result;
    }
}

export default new ClienteModel();