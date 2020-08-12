import db from '../sequelize/models';

const getMensagens = () => db.Mensagens.findAll();

module.exports = {
  getMensagens,
};
