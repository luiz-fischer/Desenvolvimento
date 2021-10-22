const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Medico = new Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    crm: {
        type: Number,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    especialidade: {
        type: Schema.Types.ObjectId,
        ref: "especialidades",
        required: true
    }
})

mongoose.model("medicos", Medico)