module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Conversas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      contatoNumero: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      contatoNome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      code: {
        allowNull: false,
        type: Sequelize.STRING(500),
        unique: true,
      },
      excluido: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
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
    return queryInterface.dropTable('Conversas');
  },
};
