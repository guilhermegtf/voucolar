module.exports = (sequelize, Sequelize) => {
  const Mensagens = sequelize.define(
    'Mensagens',
    {
      id: { type: Sequelize.INTEGER, primaryKey: true },
      conversaId: Sequelize.INTEGER,
      mensagem: Sequelize.TEXT('long'),
      code: Sequelize.STRING(500),
      estado: Sequelize.INTEGER(1),
      origem: Sequelize.INTEGER(1),
      excluido: Sequelize.BOOLEAN,
    },
    {}
  );
  Mensagens.associate = (models) => {
    Mensagens.belongsTo(models.Mensagens, { foreignKey: 'conversaId' });
  };
  return Mensagens;
};
