module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Mensagens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      conversaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Conversas',
          key: 'id',
        },
      },
      mensagem: {
        allowNull: false,
        type: Sequelize.TEXT('long'),
      },
      code: {
        allowNull: false,
        type: Sequelize.STRING(500),
        unique: true,
      },
      estado: {
        allowNull: false,
        type: Sequelize.INTEGER(1),
        defaultValue: 0,
      },
      origem: {
        allowNull: false,
        type: Sequelize.INTEGER(1),
      },
      excluido: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Mensagens');
  },
};
