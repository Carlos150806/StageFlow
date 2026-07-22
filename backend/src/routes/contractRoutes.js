const express = require('express');
const router = express.Router(); // 1. Aqui criamos o "gerenciador de rotas"
const upload = require('../config/multer'); // Importa o porteiro que você já fez

// 2. Definimos a rota POST. 
// O caminho é '/upload' e ele passa pelo porteiro 'upload.single('file')'
router.post('/upload', upload.single('file'), (req, res) => {
  
  // 3. Este é o interior da "sala". 
  // Se o código chegou aqui, é porque o porteiro (Multer) deixou o PDF passar.
  
  // Vamos imprimir no terminal do VS Code as informações do arquivo que o Multer salvou
  console.log(req.file);

  // 4. Enviamos a resposta para o Next.js confirmando o sucesso
  return res.status(201).json({ 
    message: 'Contrato enviado com sucesso!',
    file: req.file.filename // Mostramos o nome único gerado pelo Date.now()
  });
});

// 5. ESSENCIAL: Exportamos o router para ser usado no app.js
module.exports = router;