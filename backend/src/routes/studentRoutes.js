const express = require('express'); // Importa o framework Express para criar rotas
const routes = express.Router(); // Instancia o roteador do Express para criar rotas
const StudentController = require('../controllers/StudentController'); // Importa o maestro (controller) que vai reger a orquestra das rotas
const ContractController = require('../controllers/ContractController'); 

const authMiddleware = require('../middlewares/auth'); // Importa o segurança da porta (middleware) para proteger rotas


// Rota de Cadastro e Login de Estudante e tambem Uma rota publica, não precisa de autenticação
routes.post('/students', StudentController.store);
routes.post('/login', StudentController.login);

// Rota Privada (SÓ QUEM TEM O TOKEN ACESSA)
// Quando o aluno clicar no Dashboard do Figma, o front-end chamará isso:
routes.get('/dashboard', authMiddleware, (req, res) => {
  return res.json({ 
    mensagem: "🔒 Você acessou uma área restrita!", 
    seu_id_no_token: req.userId 
  });
});

routes.get('/my-contracts', authMiddleware, ContractController.index); // Rota para listar os contratos e documentos do aluno logado, protegida pelo middleware de autenticação

module.exports = routes;