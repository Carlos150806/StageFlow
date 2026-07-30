const Student = require('../models/Student');
const bcrypt = require('bcrypt');

module.exports = {
  // Método para criar um novo estudante (Cadastro)
  async store(req, res) {
    try {
      const {
        nome, email, senha, data_nascimento, numero_contato,
        instituicao_id, endereco, bairro, cidade, cursando,
        periodo_ensino, turno_estudo, pcd, tipo_deficiencia,
        nome_responsavel, numero_responsavel
      } = req.body;

      // 1. Verificação de segurança: O e-mail já existe?
      const userExists = await Student.findOne({ where: { email } });
      if (userExists) {
        return res.status(400).json({ error: 'Este e-mail já está cadastrado no StageFlow.' });
      }

      // 2. Criar o registro no MySQL
      // O 'hook' no Model Student.js tritura a senha automaticamente!
      const student = await Student.create({
        nome, email, senha, data_nascimento, numero_contato,
        instituicao_id, endereco, bairro, cidade, cursando,
        periodo_ensino, turno_estudo, pcd, tipo_deficiencia,
        nome_responsavel, numero_responsavel
      });

      return res.status(201).json({
        id: student.id,
        nome: student.nome,
        mensagem: '✅ Estudante cadastrado com sucesso!'
      });

    } catch (error) {
      console.error('Erro no cadastro:', error);
      return res.status(500).json({ error: 'Erro interno ao processar o cadastro.' });
    }
  },

  // Método para autenticação (Login)
  async login(req, res) {
    try {
      const { email, senha } = req.body;

      // 1. O aluno existe?
      const student = await Student.findOne({ where: { email } });

      if (!student) {
        return res.status(401).json({ error: 'E-mail não encontrado no StageFlow.' });
      }

      // 2. A senha bate? O bcrypt compara o texto puro com o hash do banco
      const passwordMatch = await bcrypt.compare(senha, student.senha);

      if (!passwordMatch) {
        return res.status(401).json({ error: 'Senha incorreta. Tente novamente.' });
      }

      // 3. Sucesso! Retornamos os dados para o Dashboard do Figma (ou canva)
      return res.json({
        id: student.id,
        nome: student.nome,
        mensagem: `👋 Bem-vindo de volta, ${student.nome}!`
      });

    } catch (error) {
      console.error('Erro no login:', error);
      return res.status(500).json({ error: 'Erro interno ao tentar logar.' });
    }
  }
};