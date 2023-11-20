const mongoose = require("mongoose");

const { Schema } = mongoose;

const carSchema = new Schema ({
    Marca: {
        type: String,
        required: true
    },
    Modelo: {
        type: String,
        required: true
    },
    Ano: {
        type: Number,
        required: true
    },
    Placa: {
        type: String,
        required: true
    }, 
    Descrição: {
        type: String
    },
    UserEmail: { 
        type: String, 
        ref: 'User.Email', 
        required: true 
    }, // Usar o campo Email como referência
    },
    { timestamps: true});

const Car = mongoose.model("Car", carSchema);

module.exports = {
    Car,
    carSchema
};