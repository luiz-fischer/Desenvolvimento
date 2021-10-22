const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Especialidade = new Schema({
    // _id: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "medicos",
    //     required: true
    // },
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
    // ,autor: { type: Schema.Types.ObjectId, ref: 'medicos' }
}) 

mongoose.model("especialidades", Especialidade)