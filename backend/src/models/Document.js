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
        nome_documento: DataTypes.STRING,
        tipo: DataTypes.STRING,
        url_arquivo: DataTypes.STRING,
        status_assinatura: DataTypes.ENUM('pendente', 'assinado', 'rejeitado'),
      }, {
        sequelize,
        tableName: 'documento',
        timestamps: true,
        underscored: true,
      }
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