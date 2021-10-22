const { truncate } = require("fs");
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Paciente = new Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    dt_nasc: {
        type: Date,
        required: true
    },
    documentoCpf: {
        type: Number,
        required: true
    },
    documentoRg: {
        type: Number,
        required: true
    },
    nomeMae: {
        type: String,
        required: true
    },
    nomePai: {
        type: String,
        required: true
    }
})

mongoose.model("pacientes", Paciente)