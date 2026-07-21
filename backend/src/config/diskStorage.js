const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  // 1. DESTINATION: Onde o arquivo vai morar?
  destination: (req, file, cb) => {
    // __dirname é 'src/config'. 
    // '..' sobe para 'src', o segundo '..' sobe para 'backend'.
    // Aí entramos na pasta 'uploads'.
    cb(null, path.resolve(__dirname, '..', '..', 'uploads'));
  },
  
  // 2. FILENAME: Etiqueta única para evitar conflitos
  filename: (req, file, cb) => {
    const time = Date.now();
    cb(null, `${time}-${file.originalname}`);
  }
});

module.exports = storage;