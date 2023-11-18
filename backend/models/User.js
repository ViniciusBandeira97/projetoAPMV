const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema ({
        GoogleID: {
            type: String
        },
        Email: {
            type: String
        },
        Name: {
            type: String
        },
        ImageURL: {
            type: Image
        }, 
    },
);

const User = mongoose.model("User", userSchema);

module.exports = {
    User,
    userSchema
};