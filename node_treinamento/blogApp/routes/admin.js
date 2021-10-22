const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/Especialidade");
const Especialidade = mongoose.model("especialidades");
require("../models/Medico")
const Medico = mongoose.model("medicos");
const {isAdmin} = require("../helpers/adminUser")

router.get("/", isAdmin, (req, res) => {
  res.render("admin/index");
});

// router.get("/posts", isAdmin, (req, res) => {
//   res.send("Pagina de posts");
// });

router.get("/especialidades", (req, res) => {
    Especialidade.find().then((especialidades) => {
        res.render("admin/especialidades", {especialidades: especialidades.map(especialidades => especialidades.toJSON())})
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao listar")
        res.redirect("/admin")
    })
});

router.get("/especialidades/add", (req, res) => {
  res.render("admin/addEspecialidade");
});

router.get("/especialidades/edit/:id", (req, res) => {
    Especialidade.findOne({_id:req.params.id}).then((especialidade) => {
        res.render("admin/editEspecialidade", {especialidade: especialidade.toJSON()})
    }).catch((err) => {
        req.flash("error_msg", "Esta especialidade nao existe")
        res.redirect("/admin/especialidades")
    })
})

router.post("/especialidades/edit", (req, res) => {
    Especialidade.findOne({_id: req.body.id}).then((especialidade) => {
        especialidade.nome = req.body.nome
        especialidade.slug = req.body.slug

        especialidade.save().then(() => {
            req.flash("succcess_msg", "Especialidade editada com sucesso")
            res.redirect("/admin/especialidades")
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro ao salvar a ediçao")
            res.redirect("/admin/especialidades")
        })

    }).catch((err) => {
        req.flash("error_msg", "Erro ao editar especialidade")
        req.redirect("/admin/especialidades")
    })
})

router.post("/especialidades/deletar", (req, res) => {
    Especialidade.remove({_id: req.body.id}).then(() => {
        req.flash("success_msg", "Especialidade deletada com sucesso")
        res.redirect("/admin/especialidades")
    }).catch((err) => {
        req.flash("error_msg", "Erro ao remover especialidade")
        res.redirect("/admin/especialidades")
    })
})

router.post("/especialidades/nova", (req, res) => {
  var erros = [];

  if (
    !req.body.nome ||
    typeof req.body.nome == undefined ||
    req.body.nome == null
  ) {
    erros.push({ texto: "Nome da Especialidade Inválido!" });
  }

  // if (
  //   !req.body.slug ||
  //   typeof req.body.slug == undefined ||
  //   req.body.slug == null
  // ) {
  //   erros.push({ texto: "Slug inválido" });
  // }

  if (req.body.nome.length < 2) {
    erros.push({ texto: "Especialidade com nome muito curto!" });
  }

  if (erros.length > 0) {
    res.render("admin/addEspecialidade", { erros: erros });
  } else {
    const novaEspecialidade = {
      nome: req.body.nome,
      descricao: req.body.descricao
    };

    new Especialidade(novaEspecialidade).save().then(() => {
        req.flash('success_msg', 'Especialidade criada com sucesso!')
        res.redirect("/admin/especialidades")
      }).catch((erro) => {
        req.flash('error_msg', 'Houve um erro, tente novamente!')
        res.redirect('/admin')
    });
  }
});

// MEDICOS
// router.get("/medicos", (req, res) => {
//   Medico.find().lean().then((medicos) => {
//     res.render("admin/medicos", {medicos: medicos})
//   }).catch((err) => {
//     req.flash("error_msg", "Houve um erro ao listar os medicos!")
//     res.redirect("/admin")
//   })
// })

router.get("/medicos", (req, res) => {

  Medico.find().lean().populate("especialidade").sort({data:"desc"}).then((medicos) => {
    res.render("admin/medicos", {medicos: medicos})
  }).catch((err) => {
    req.flash("error_msg", "Houve um erro ao cadastrar medico" + err)
    res.redirect("/admin")
  })
})


router.get("/medicos/add", (req, res) => {
    Especialidade.find().sort({name: 'asc'}).lean().then((especialidades) => {
        res.render("admin/addMedico", {especialidades: especialidades})
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao carregar o formulario")
        res.redirect("/admin")
    })
})

router.post("/medicos/nova", (req, res) => {

  var erros = []

  if(req.body.especialidade == "0") {
    erros.push({texto: "Especialidade invalida, registre uma especialidade"})
  }

  if(erros.length > 0){
    Especialidade.find().lean().then((especialidades) => {
     res.render("admin/addMedico",{erros:erros, especialidades:especialidades})
    })
  } else {
    const novoMedico = {
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      crm: req.body.crm,
      telefone: req.body.telefone,
      especialidade: req.body.especialidade
    };

    new Medico(novoMedico).save().then(() => {
      req.flash("success_msg", "Medico criada com sucesso")
      res.redirect("/admin/medicos")
    }).catch((err) => {
      req.flash("error_msg", "Houve um erro ao criar a medico" + err)
      res.redirect("/admin/medicos")
    })
  }
})

router.post("/medicos/edit",(req,res)=> {
  Medico.findOne({_id: req.body.id}).then((medicos)=> {
          
      medicos.nome = req.body.nome
      medicos.sobrenome = req.body.sobrenome
      medicos.crm = req.body.crm
      medicos.telefone = req.body.telefone
      medicos.especialidade = req.body.especialidade
      //medico.date = req.body.date
      
      medico.save().then(() =>{
          req.flash('success_msg', 'Medico editada com sucesso!');
          res.redirect('/admin/medicos');
         }).catch((err)=> {
          console.log(err)
          req.flash('error_msg', 'Houve um erro ao salvar edição' +err);
          res.redirect('/admin/medicos');


              }).catch((err)=> {
                  console.log(err)
                  req.flash("error_msg","Houve um erro ao salvar edição")
                  res.redirect("/admin/medicos")
              })
    })
})

router.get("/medicos/edit/:id", (req, res) => {
  
  Medico.findB({_id: req.params.id}).lean().then((medico) => {
  
  Especialidade.find().lean().then((especialidades) => {
    res.render("admin/editMedico", {especialidades: especialidades, medico: medico})
  }).catch((err) => {
    req.flash("error_msg", "Houve um erro ao listar as especialidades")
    res.redirect("/admin/medicos")
  })


  }).catch((err) => {
    req.flash("error_msg", "Houve um erro ao carregar o formulario de edição")
    res.redirect("/admin/medicos")
  })
  
})

router.get("/medicos/deletar/:id", (req, res) => {
  Medico.remove({_id: req.params.id}).then(() => {
    req.flash("success_msg", "Medico deletada com sucesso")
    res.redirect("/admin/medicos")
  }).catch((err) => {
    req.flash("error_msg", "Houve um erro interno")
    res.redirect("/admin/medicos")
  })
})



module.exports = router