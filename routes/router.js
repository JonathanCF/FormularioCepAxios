const express = require("express");
const routes = express.Router()
const FormularioController = require('../controllers/controllersFormulario')

routes.get('/', FormularioController.index)

routes.post('/formulario/save', FormularioController.save)

routes.get('/buscarCep', FormularioController.buscarCep)

module.exports = routes