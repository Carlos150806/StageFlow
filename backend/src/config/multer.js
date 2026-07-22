const multer = require('multer');
const storage = require('./diskStorage'); // Importa o arquivo que está na mesma pasta

// Regra de segurança que aceita apenas PDF
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Apenas arquivos PDF são permitidos!"), false);
  }
};

// Criando o porteiro configurado
const upload = multer({ 
    storage: storage, 
    fileFilter: fileFilter 
});

module.exports = upload;