module.exports = (sequelize, Sequelize) => {
  const Conversas = sequelize.define(
    'Conversas',
    {
      id: { type: Sequelize.INTEGER, primaryKey: true },
      contatoNumero: Sequelize.STRING,
      contatoNome: Sequelize.STRING,
      code: Sequelize.STRING(500),
      excluido: Sequelize.BOOLEAN,
    },
    {}
  );
  Conversas.associate = (models) => {
    Conversas.hasMany(models.Mensagens, { foreignKey: 'id' });
  };
  return Conversas;
};
