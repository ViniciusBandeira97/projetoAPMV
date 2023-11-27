const { Car: CarModel } = require("../models/Car");
const { User: UserModel } = require("../models/User");


const carController = {
    create: async (req, res) => {
        try {
            const carR = {
                Marca: req.body.Marca,
                Modelo: req.body.Modelo,
                Ano: req.body.Ano,
                Placa: req.body.Placa,
                Descrição: req.body.Descrição,
                UserEmail: req.body.UserEmail 
            };
            const userExistente = await UserModel.findOne({ Email: carR.UserEmail });

            if (!userExistente) {
                return res.status(404).json({ erro: 'Usuário não encontrado' });
            }

            const response = await CarModel.create(carR);
            
             // Atualizar a lista de carros do usuário
             await UserModel.updateOne({ Email: carR.UserEmail }, { $push: { Cars: response._id } });

            res.status(201).json({ response, msg: "Cadastro de veiculo criado com sucesso!"});

        } catch (error) {
            console.log(error);
            res.status(500).json({ erro: 'Erro interno do servidor' });
        }
    },
    getAllByUserEmail: async (req, res) => {
        const { Email } = req.params;
        try {
            // Busca todos os carros cadastrados para o e-mail fornecido
            const carR = await CarModel.find({ UserEmail: Email });
                
            // Caso o Usuario cadastrado não tenha nenhum veiculo cadastrado
            if (carR.length === 0) {
                return res.json({ mensagem: 'Usuário existe, mas não possui carros cadastrados.' });
            }
            res.json(carR);
            
        } catch (error) {
            console.error('Erro:', error);
            res.status(500).json({ erro: 'Erro interno do servidor' });
        }
    },
    delete: async (req, res) => {
        const { Email, Modelo, Ano, Placa } = req.params;
        try {

            const carR = await CarModel.findOne({UserEmail: Email, Modelo, Ano, Placa});

            if (!carR){
                res.status(404).json({ msg: "Cadastro não encontrado."});
                return;
            }
            
            const response = await CarModel.deleteOne({UserEmail: Email, Modelo, Ano, Placa});
            
            res.status(201).json({ response, msg: "Veiculo excluido com sucesso!"});

        } catch (error) {
            console.error('Erro:', error);
            return res.status(500).json({ erro: 'Erro interno do servidor' });
        }
    },
};

module.exports = carController;