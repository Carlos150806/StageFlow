// Importando o framework express
const express = require('express');

// Instanciando o servidor
const app = express();

// Middleware para que o servidor entenda dados em formato JSON (igual usamos no PyFinance!)
app.use(express.json());

// Rota de teste inicial para ver se está "vivo"
app.get('/', (req, res) => {
    res.send('Servidor do StageFlow rodando com sucesso!');
});

// Definindo a porta onde o sistema vai "ouvir" as requisições
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});