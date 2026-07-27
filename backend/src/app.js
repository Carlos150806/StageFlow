const express = require('express'); // 1. Ferramenta base primeiro
const contractRoutes = require('./routes/contractRoutes'); // 2. Suas rotas logo abaixo

const app = express(); // 3. Instancia o maestro (APENAS UMA VEZ)

// 4. CONFIGURAÇÕES (Tradutores)
// Isso prepara o servidor para entender JSON antes de abrir as rotas
app.use(express.json());

// 5. ESTRADAS (Rotas)
// Agora plugamos sua rota de contratos
app.use('/contracts', contractRoutes);

// Rota de teste para saber se o servidor está vivo
app.get('/', (req, res) => {
    res.send('Servidor do StageFlow rodando com sucesso!');
});

// 6. IGNIÇÃO (Porta)
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});