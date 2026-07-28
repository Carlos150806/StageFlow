const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  // 1. DESTINATION: Onde o arquivo vai morar?
  destination: (req, file, cb) => {
    // __dirname é 'src/config'. 
    // '..' sobe para 'src'
    // Aí entramos na pasta 'uploads'.
    cb(null, path.resolve(__dirname, '..', 'uploads'));
  },
  
  // 2. FILENAME: Etiqueta única para evitar conflitos
  filename: (req, file, cb) => {
    const time = Date.now();
    // O .replace(/\s+/g, '_')troca espaços por underlines para evitar problemas de URL (_)
    const cleanedName = file.originalname.replace(/\s+/g, '_'); // Limpeza do nome original do arquivo
    cb(null, `${time}-${cleanedName}`);
  }
});

module.exports = storage;