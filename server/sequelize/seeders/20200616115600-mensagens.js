module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'Mensagens',
      [
        {
          conversaId: 1,
          mensagem: 'Olá bom dia, em que posso ajudar?',
          code: 'mensagem1',
          estado: 3,
          origem: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          conversaId: 1,
          mensagem: 'Preciso de ajuda.',
          code: 'mensagem2',
          origem: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          conversaId: 1,
          mensagem: 'Claro em que posso ser útil?',
          code: 'mensagem3',
          estado: 2,
          origem: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Mensagens', null, {});
  },
};
