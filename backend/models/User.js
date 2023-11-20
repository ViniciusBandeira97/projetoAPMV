const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema ({
        Email: {
            type: String,
            unique: true,
            require: true
        },
        ImageURL: {
            type: String
        },
        Name: {
            type: String
        }, 
        Cars: [{ 
            type: String, 
            ref: 'Car' 
        }], // Usar o campo Email como referência

    },
    { timestamps: true});

const User = mongoose.model("User", userSchema);

module.exports = {
    User
};