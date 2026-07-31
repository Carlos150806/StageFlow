const Contract = require('../models/Contract');
const Document = require('../models/Document');

module.exports = {
  // Método para listar os contratos e documentos do aluno logado
  async index(req, res) {
    try {
      // 1. Buscamos no banco todos os contratos onde o estudante_id é o do Token
      const contracts = await Contract.findAll({
        where: { estudante_id: req.userId },
        // 2. O 'include' faz o JOIN: traz os documentos vinculados a cada contrato
        include: [{
          model: Document,
          as: 'documentos', // O mesmo nome que usamos no associate do Model
          attributes: ['id', 'nome_documento', 'tipo', 'status_assinatura', 'url_arquivo']
        }]
      });

      // 3. Retornamos a lista completa para o Dashboard do Figma
      return res.json(contracts);

    } catch (error) {
      console.error('Erro ao buscar contratos/documentos:', error);
      return res.status(500).json({ error: 'Erro interno ao carregar o Dashboard.' });
    }
  }
};
