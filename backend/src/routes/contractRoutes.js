const express = require('express');
const router = express.Router(); // Inicializa o roteador do Express para este módulo
const upload = require('../config/multer'); // Importa a configuração do Middleware de Upload

/**
 * Rota POST /upload
 * Responsável por receber e processar o upload de contratos.
 * O middleware 'upload.single' valida e armazena o arquivo antes da execução da lógica interna.
 */
router.post('/upload', upload.single('file'), (req, res) => {
  
  // Validação de segurança: Verifica se o arquivo foi interceptado com sucesso pelo Multer
  // Impede erros de 'undefined' caso o cliente não envie o arquivo [3]
  if (!req.file) {
    return res.status(400).json({ 
      error: "Nenhum arquivo enviado. Por favor, anexe um PDF." 
    });
  }

  // Registro técnico: Exibe os metadados do arquivo processado no console do servidor
  console.log("Arquivo processado:", req.file);

  // Resposta de sucesso (Status 201: Created)
  // Retorna o nome único gerado para garantir o rastreamento seguro [1]
  return res.status(201).json({ 
    message: 'Contrato enviado com sucesso!',
    file: req.file.filename 
  });
});

// Exporta as rotas para integração no motor principal (app.js)
module.exports = router;