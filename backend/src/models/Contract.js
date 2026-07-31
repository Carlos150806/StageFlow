const { Model, DataTypes } = require('sequelize'); // Importa o Model e DataTypes do Sequelize para definir o modelo

class Contract extends Model {
  static init(sequelize) {
    // Inicializa o modelo com os campos do banco de dados
    super.init({
      // Campo de data (sem hora) para o início do estágio
      data_inicio: DataTypes.DATEONLY,
      // Campo de data para o término do estágio
      data_fim: DataTypes.DATEONLY,
      // Valor da bolsa (ex: 1200.50). 10 dígitos no total, 2 decimais
      valor_bolsa: DataTypes.DECIMAL(10, 2),
      // Valor do transporte, também decimal para precisão financeira
      auxilio_transporte: DataTypes.DECIMAL(10, 2),
      // Quantas horas o aluno trabalha por dia (ex: 6)
      carga_horaria_diaria: DataTypes.INTEGER,
      // Status do contrato usando ENUM para limitar as opções aceitas
      status: DataTypes.ENUM('em análise', 'ativo', 'concluído', 'cancelado'),
    }, {
      sequelize,
      tableName: 'contrato', // Nome exato da tabela Banco de Dados
    });
    const { Model, DataTypes } = require('sequelize');// Importa o Model e DataTypes do Sequelize para definir o modelo

class Document extends Model {
  static init(sequelize) {
    
    super.init({
      // Nome amigável do arquivo (ex: "Termo de Compromisso Eniac")
      nome_documento: DataTypes.STRING,
      // Qual o tipo do arquivo (ex: "TCE", "Pano de Atividades")
      tipo: DataTypes.STRING,
      // O link/caminho onde o PDF está guardado no seu servidor
      url_arquivo: DataTypes.STRING,
      // Status da assinatura para sabermos o que mostrar no Dashboard
      status_assinatura: DataTypes.ENUM('pendente', 'assinado', 'rejeitado'),
      {
      data_inicio: DataTypes.DATEONLY,
      data_fim: DataTypes.DATEONLY,
      valor_bolsa: DataTypes.DECIMAL(10, 2),
      auxilio_transporte: DataTypes.DECIMAL(10, 2),
      carga_horaria_diaria: DataTypes.INTEGER,
      status: DataTypes.ENUM('em análise', 'ativo', 'concluído', 'cancelado'),
      // O Sequelize gerencia o created_at e updated_at automaticamente se habilitado
    }, {
      sequelize,
      tableName: 'contrato',
      timestamps: true, // Garante que o Sequelize busque esses campos
      underscored: true, // Faz ele procurar por 'updated_at' em vez de 'updatedAt'
    });
    }, {
      sequelize,
      tableName: 'documento', // Nome da tabela criada no Banco de Dados
    });
  }

  static associate(models) {
    // Todo documento obrigatoriamente pertence a um contrato de estágio
    // A chave estrangeira 'contrato_id' faz essa ponte
    this.belongsTo(models.Contract, { foreignKey: 'contrato_id', as: 'contrato' });
  }
}

module.exports = Document; // Exporta o modelo Document para ser usado em outros arquivos
  }

  static associate(models) {
    // Define que este contrato pertence a um aluno específico (estudante_id)
    this.belongsTo(models.Student, { foreignKey: 'estudante_id', as: 'aluno' });// Define que este contrato pertence a uma empresa específica (empresa_id)
    
    // Define que um contrato pode ter vários documentos (TCE, Planos, etc.)
    // Isso liga a tabela 'contrato' à tabela 'documento' (hasMany = tem muitos)
    this.hasMany(models.Document, { foreignKey: 'contrato_id', as: 'documentos' });// Define que este contrato pertence a uma empresa específica (empresa_id)
  }
}

module.exports = Contract;