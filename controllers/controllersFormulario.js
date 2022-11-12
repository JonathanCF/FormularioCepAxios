const axios = require("axios");
const express = require("express");
const Formulario = require("../database/Formulario");

class FormularioController {
  static index(req, res) {
    res.render("index");
  }
  static async save(req, res) {
    let data = req.body;

    await Formulario.create({
      nome: data.nome,
      email: data.email,
      telefone: data.telefone,
      data: data.data,
      cep: data.cep,
      bairro: data.bairro,
      logradouro: data.logradouro,
      complemento: data.complemento,
      localidade: data.localidade,
      uf: data.uf,
    });

    res.redirect("/");
  }

  static async buscarCep(req, res) {


  
  }
}

module.exports = FormularioController;
