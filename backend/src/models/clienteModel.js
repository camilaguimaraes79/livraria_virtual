import pool from '../database/database.js';

class ClienteModel {

    async showClientes() {
        const [rows] = await pool.execute(
            'SELECT * FROM clientes'
        );

        return rows;
    }

        async getClienteByEmail (email, id=0) {
        const [row] = await pool.execute(
        "SELECT * FROM clientes WHERE email =? AND id_cliente !=?;",
        [email, id]);

        return row;
    }

    async createCliente(data) {
        console.log("DADOS RECEBIDOS:", data);
        const { nome, email, telefone, cidade, estado } = data;

        const [result] = await pool.execute(
            `INSERT INTO clientes (nome, email, telefone ,cidade ,estado)
            VALUES (?, ?, ?, ?, ?)`,
            [nome, email, telefone,cidade,estado]
        );

        return result;
    }

    async updateCliente(id, data) {
        const { nome, email, telefone, cidade, estado } = data;

        const [result] = await pool.execute(
            `UPDATE clientes
            SET nome = ?,
            email = ?, 
            telefone = ?,
            cidade   = ?,
            estado   = ?
            WHERE id_cliente = ?`,
            [nome, email, telefone,  cidade, estado, id]
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