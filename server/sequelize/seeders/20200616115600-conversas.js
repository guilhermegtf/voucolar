module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'Conversas',
      [
        {
          id: 1,
          contatoNumero: '11989809929',
          contatoNome: 'Flavio Riper',
          code: 'conversa1',
          excluido: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          contatoNumero: '11981184690',
          contatoNome: 'Natalya Antunes',
          code: 'conversa2',
          excluido: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Conversas', null, {});
  },
};
