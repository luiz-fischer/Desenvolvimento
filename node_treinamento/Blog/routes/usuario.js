const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
require("../models/Usuario")
const Usuario = mongoose.model("usuarios")
const bcrypt = require('bcryptjs')
const passport = require("passport")

router.get("/registro", (req, res) => {
    res.render("usuarios/registro")
})

router.post("/registro", (req, res) => {
    var erros = []

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
        erros.push({texto: "Nome Inválido"})
    }

    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null) {
        erros.push({texto: "Email Inválida"})
    }

    if(!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null) {
        erros.push({texto: "Senha Inválida"})
    }

    if(req.body.senha.length < 4) {
        erros.push({texto: "Senha muito curta"})
    }

    if(req.body.senha != req.body.senha2) {
        erros.push({texto: "As senhas são diferentes, tente novamente!"})
    }

    if(erros.length > 0) {
        res.render("usuarios/registro", {erros: erros})

    } else {
        Usuario.findOne({email: req.body.email}).lean().then((usuario) => {
            if(usuario) {
                req.flash("error_msg", "Já existe uma conta registrada com esse E-mail.")
                res.redirect("/usuarios/registro")

            } else {
                const novoUsuario = new Usuario({
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: req.body.senha
                })

                bcrypt.genSalt(10, (erro, salt) => {
                    bcrypt.hash(novoUsuario.senha, salt, (error, hash) => {
                        if(error) {
                            req.flash("error_msg", "Houve um erro durante a criação do Usuário")
                            res.redirect("/")
                        
                        } else {
                            novoUsuario.senha = hash
                            novoUsuario.save().then(() => {
                                req.flash("success_msg", "Usuário Criado com Sucesso!")
                                res.redirect("/")
                            
                            }).catch((err) => {
                                req.flash("error_msg", "Houve um erro ao salvar")
                                res.redirect("/")
                            
                            })
                        }
                    })
                })

            }
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro interno")
            res.redirect("/")
        })


    }
})

router.get("/login", (req, res) => {
    res.render("usuarios/login")
})

router.post("/login", (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/usuarios/login",
        failureFlash: true
    })(req, res, next)

})

router.get("/logout", (req, res) => {
    req.logOut()
    req.flash("success_msg", "Logout com Sucesso!")
    res.redirect("/")
})


module.exports = router