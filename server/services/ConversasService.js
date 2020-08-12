import db from '../sequelize/models';

const getConversas = () => db.Conversas.findAll();
const getMensagens = () => db.Mensagens.findAll();

module.exports = {
  getConversas,
  getMensagens,
};
