import userModel from "../models/userModel.js";

class UserController {
    async getAllUsers(req, res) {
        try {
            const allUsers = await userModel.selectAllUsers();

            if (allUsers.lenght === 0) {
                return res.status(404).json({
                    error: "Nenhum usuário encontrado"
                });
            }
            return res.status(200).json(allUsers);
        }catch(err) {
            return res.status(500).json({
                error: "Erro a buscar usuários"
            });
        }
    }


    async getUserById(req, res) {
        try {
            const {id} = req.params; 

            const userById = await userModel.selectUserById(id);

            if(userById.lenght === 0) {
                return res.status(404).json({
                    error:"Usuário não encontrado!"
                })
            }
            return res.status(200).json(userById);
            }catch (err) {
                return res.status(500).json({
                    error: "Error ao buscar usuário!"
                })
            }
        }
        async getUserByEmail (req,res) {
            try {
                const {user_email} = req.params;
                const userByEmail = await userModel.selectUserByEmail(user_email);

                if(userByEmail) {
                    return res.status(400).json({
                        error: "Este email já esta cadastrado no sistema!"
                    });
                }
            return res.status(200).json(userByEmail);
            }catch (err) {
                return res.status(500).json({
                    error:"Erro ao buscar usuário por email "
                });

            }
        }
        async createUser(req, res) {
            try {
                const [existsUser] = await userModel.selectUserByEmail(req.body.user_email);

                if(existsUser) {
                    return res.status(400).json({
                        error: "Este email já está cadastrado no sistema!"
                    });
                }

                const newUser = await userModel.InsertUser(req.body);

                if (newUser.affectedRows > 0) {
                    return res.status(200).json({
                        sucess: "Usuário cadastrado com sucesso!"
                    })
                }
            }catch (err) {
                return res.status(500).json({
                    error: "Erro ao criar usuário!",
                });
            }
        }

}




