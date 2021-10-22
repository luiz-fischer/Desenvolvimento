// Carregando Modulos
const express = require('express')
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
const path = require("path")
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('connect-flash')
require("./models/Medico")
const Medico = mongoose.model("medicos")
require("./models/Especialidade")
const Especialidade = mongoose.model("especialidades")
require("./models/Paciente")
const Paciente = mongoose.model("pacientes")
const usuarios = require("./routes/usuario")
const passport = require("passport")
require("./config/auth")(passport)

// Configurações
// Sessão
    app.use(session({
        secret: "cursodenode",
        resave: true,
        saveUninitialized: true
    }))

    app.use(passport.initialize())
    app.use(passport.session())
    app.use(flash())

//MIDLEWARE - Variaveis Globais
    app.use((req, res, next) => {
        res.locals.success_msg = req.flash("success_msg")
        res.locals.error_msg = req.flash("error_msg")
        res.locals.error = req.flash("error")
        res.locals.user = req.user || null;
        next()
    })

// BodyParser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

// HandleBars
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars');

// Mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/blog', {
                useNewUrlParser: true,
                useUnifiedTopology:true
            }).then(() => {
                console.log("Conectado ao mongo")
            }).catch((erro) => {
                console.log("ERRO" + erro)
            })

// Public
    app.use(express.static(path.join(__dirname, "public")))

// ROTA INDEX
    app.get('/', (req, res) => {
            res.render("index")
        })
    

    // ROTAS ESPECIALIDADES
    app.get("/especialidades", (req, res) => {
        Especialidade.find().lean().then((especialidades) => {
            res.render("especialidades/index", { especialidades: especialidades })
        }).catch((err) => {
            req.flash("error_msg",  "Houve um erro ao listar as especialidades")
            res.redirect("/")
        })
    })

    app.get("/especialidades/:id", (req, res) => {
        Especialidade.findOne({_id: req.params.id}).lean().then((especialidade) => {
            if(especialidade) {
                
                Medico.find({especialidade: especialidade._id}).lean().then((medicos) => {
                    res.render("especialidades/medicos", {medicos: medicos, especialidade: especialidade})
                }).catch((err) => {
                    req.flash("error_msg", "Houve um erro ao listar as Especialidades.")
                res.redirect("/")
                })

            } else {
                req.flash("error_msg", "Esta especialidade nao existe")
                res.redirect("/")
            }
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro ao carregar")
            res.redirect("/")
        })
    })
    
    // ROTAS MEDICO
    app.get("/medicos", (req, res) => {
        Medico.find().lean().then((medicos) => {
            res.render("medicos/index", {medicos: medicos})
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro ao listar os Médicos!")
            res.redirect("/")
        })
    })

    app.get("/medicos/:id", (req, res) => {
        Medico.findOne({_id: req.params.id}).lean().then((medicos) => {
            if(medico) {
                Medico.find({medico: medico._id}).lean().then((medicos) => {
                    res.render("medicos/index", {medicos: medicos})
                }).catch((err) => {
                    req.flash("error_msg", "Houve um erro ao listar as medicos!.")
                res.redirect("/")
                })

            } else {
                req.flash("error_msg", "Esta medico nao existe")
                res.redirect("/")
            }
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro ao carregar")
            res.redirect("/")
        })
    })

    
    // app.get("/medico/:id", (req, res) => {
    //     Medico.findOne({_id: req.params.id}).lean().then((medico) => {
    //         if(medico) {
    //             res.render("medicos/index", { medico: medico})
    //         } else {
    //             req.flash("error_msg", "Esse medico não existe!")
    //             res.redirect("/")
    //         }
    //     }).catch((err) => {
    //         req.flash("error_msg", "Houve um erro interno!")
    //         res.redirect("/")
    //     })
    // })


    // ROTAS PACIENTES
    app.get("/pacientes", (req, res)=> {
        Paciente.find().lean().then((pacientes) => {
                res.render("pacientes/index", {pacientes: pacientes})
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro ao listar os pacientes!")
            res.redirect("/")
        })
    })

    app.get("/pacientes/:id", (req, res) => {
        Medico.findOne({_id: req.params.id}).lean().then((pacientes) => {
            if(pacientes) {
                res.render("pacientes/index", { pacientes: pacientes})
            } else {
                req.flash("error_msg", "Esse pacientes não existe!")
                res.redirect("/")
            }
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro interno!")
            res.redirect("/")
        })
    })

    //OUTRAS ROTAS
    app.use('/admin', admin)
    app.use('/usuarios', usuarios)

    app.get("/404", (req, res) =>{
        res.send("ERRO 404!")
    })

// Outros
    const PORT = 8081
    app.listen(PORT, () => {
        console.log("Servidor Rodando")
    });