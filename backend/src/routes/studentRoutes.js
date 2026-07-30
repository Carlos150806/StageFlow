const express = require('express');
const routes = express.Router();
const StudentController = require('../controllers/StudentController');

// Rota de Cadastro de Estudante
routes.post('/students', StudentController.store);

// Rota de Login de Estudante
routes.post('/login', StudentController.login);

module.exports = routes;