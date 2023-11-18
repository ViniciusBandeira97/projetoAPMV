const mongoose = require("mongoose");

const { Schema } = mongoose;

const { userSchema } = require("./User");

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
    },
    { timestamps: true}
);

const Car = mongoose.model("Car", carSchema);

module.exports = {
    Car
};