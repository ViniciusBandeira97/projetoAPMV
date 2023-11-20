const { User: UserModel} = require("../models/User");


const userController = {
    create: async (req, res) => {
        try {
            const userR = {
                Name: req.body.Name,
                Email: req.body.Email,
                ImageURL: req.body.ImageURL
            };

            const response = await UserModel.create(userR);

            res.status(201).json({ response, msg: "Cadastro de usuario realizado com sucesso!"});

        } catch (error) {
            console.log(error);
        }
    },
};

const verificarEmail = { 
  get: async (req, res) => {
    const { Email } = req.params;
        try {
          const usuarioExistente = await UserModel.findOne({ Email: Email });

          if (usuarioExistente) {
            // E-mail já existe
            res.json({ emailExistente: true });
          } else {
            // E-mail não existe
            res.json({ emailExistente: false });
          }
        } catch (error) {
          console.error('Erro ao verificar o e-mail:', error);
          res.status(500).json({ erro: 'Erro interno do servidor' });
        }
  },
};

module.exports = { userController, verificarEmail };
