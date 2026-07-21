const fileFilter = (req, file, cb) => {
  // Verifica se o tipo do arquivo é PDF
  if (file.mimetype === "application/pdf") {
    cb(null, true); // Aceita o arquivo
  } else {
    cb(new Error("Apenas arquivos PDF são permitidos!"), false); // Rejeita e envia um erro
  }
};