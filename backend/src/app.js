// 1. Conexão com o banco de dados primeiro
const sequelize = require('./config/database');
// 1. Ferramenta base primeiro 
const express = require('express'); 
// 2. Suas rotas logo abaixo
const contractRoutes = require('./routes/contractRoutes'); 
// ... outros imports
const studentRoutes = require('./routes/studentRoutes');

const app = express(); // 3. Instancia o maestro (APENAS UMA VEZ)

// 4. CONFIGURAÇÕES (Tradutores)
// Isso prepara o servidor para entender JSON antes de abrir as rotas
app.use(express.json());

// ... depois de app.use
app.use(studentRoutes); 

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