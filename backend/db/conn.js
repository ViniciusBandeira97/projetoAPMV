const mongoose = require ("mongoose")

async function main(){
    try {
        await mongoose.connect(
            "mongodb+srv://viniciusbandeira:9WbuvyCTyCuBesXU@cluster-projetoapmv.4doxudq.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("Conectado ao banco!");
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;