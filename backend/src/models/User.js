const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');

const User = sequelize.define('User', {
  // Use EXATAMENTE os nomes que estão no PDF do Murilo
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  data_nascimento: { // Antes estava birthDate, mude para bater com o banco
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  senha: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  usuario_tipo: { // Estudante, Empresa ou Instituição [2]
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'usuarios', // Verifique se o nome da tabela no MySQL é 'usuarios'
  timestamps: true,
  hooks: {
    beforeCreate: async (user) => {
      const salt = await bcrypt.genSalt(10);
      user.senha = await bcrypt.hash(user.senha, salt);
    }
  }
});

module.exports = User;