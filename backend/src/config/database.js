const { Sequelize } = require('sequelize');

// Configuração da conexão - Alinhada com a agilidade e segurança do StageFlow
const sequelize = new Sequelize(
  'stageflow', // 'stageflow'
  'root',               // Usuário padrão
  '',                   // Senha padrão (vazia para desenvolvimento local)
  {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,     // Mantém o terminal limpo para organização
  }
);

// Função de teste automática para confirmar a saúde do motor
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com o MySQL estabelecida com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco de dados:', error.message);
  }
}

testConnection();

module.exports = sequelize;