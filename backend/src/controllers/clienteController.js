import clienteModel from '../models/clienteModel.js';
import ClientesModel from '../models/clienteModel.js';

class ClienteController {

    async showClientes(req, res) {
        try {
            const clientes = await ClientesModel.showClientes();

            return res.status(200).json(clientes);

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getClienteById(req, res) {
        try {
            const { id } = req.params;

            const cliente = await ClientesModel.getClienteById(id);

            if (!cliente) {
                return res.status(404).json({
                    message: 'Cliente não encontrado'
                });
            }

            return res.status(200).json(cliente);

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async createCliente(req, res) {
        try {
            const [findEmail] = await clienteModel.selectClientByEmail(req.body.email);
            if (findEmail) {
                return res.json({message: "Email já cadastrado "});
            }
            const result = await ClientesModel.createCliente(req.body);
            if(clienteModel.affectedRows > 0) {return res.status(201).json({message:"Cliente cadastrado com sucesso!"});
                
            }


        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async updateCliente(req, res) {
        try {
            const { id } = req.params;
            const[findEmail] = await clienteModel.getClienteByEmail(req.body.email,id);

            if(findEmail) {
                return res.json({message:"Email já cadastrado"});
            }

            const cliente =  await ClientesModel.updateCliente(id, req.body);
            if(cliente.affectedRows > 0) {
                return res.status(200).json({
                message: 'Cliente atualizado com sucesso'
            });
            }

            

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async deleteCliente(req, res) {
        try {
            const { id } = req.params;

            await ClientesModel.deleteCliente(id);

            return res.status(200).json({
                message: 'Cliente removido com sucesso'
            });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default new ClienteController();