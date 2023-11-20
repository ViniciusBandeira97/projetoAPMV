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
    getAll: async (req, res) => {
        try {
            const carR = await CarModel.find();

            res.json(carR);
        } catch (error) {
            console.error('Erro:', error);
            res.status(500).json({ erro: 'Erro interno do servidor' });
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const carR = await CarModel.findById(id);

            if (!carR){
                res.status(404).json({ msg: "Cadastro não encontrado."});
                return;
            }
            
            const deletedCar = await CarModel.findByIdAndDelete(id);

            res
                .status(200)
                .json({ deletedCar, msg: "Cadastro de veículo excluído com sucesso."});

        } catch (error) {
            
        }
    }
};

module.exports = carController;