const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');

const Student = sequelize.define('Student', {
  // Colunas EXATAS da página 4 do seu PDF
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data_nascimento: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  numero_contato: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true }
  },
  endereco: {
    type: DataTypes.STRING
  },
  bairro: {
    type: DataTypes.STRING
  },
  cidade: {
    type: DataTypes.STRING
  },
  instituicao_id: {
    type: DataTypes.INTEGER, // Chave estrangeira para a tabela instituicao_ensino
    allowNull: false
  },
  cursando: {
    type: DataTypes.STRING
  },
  periodo_ensino: {
    type: DataTypes.STRING
  },
  turno_estudo: {
    type: DataTypes.STRING
  },
  pcd: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  tipo_deficiencia: {
    type: DataTypes.STRING
  },
  nome_responsavel: {
    type: DataTypes.STRING
  },
  numero_responsavel: {
    type: DataTypes.STRING
  },
  // IMPORTANTE: Adicionei 'senha' para podermos fazer o Login
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'estudante', // Nome da tabela conforme o banco
  timestamps: true,       // Gerencia automaticamente o 'created_at' visto no PDF
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  hooks: {
    // Segurança: Tritura a senha antes de salvar, conforme as normas de conformidade
    beforeCreate: async (student) => {
      const salt = await bcrypt.genSalt(10);
      student.senha = await bcrypt.hash(student.senha, salt);
    }
  }
});

module.exports = Student;