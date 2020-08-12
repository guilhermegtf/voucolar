import Conversas from '../services/ConversasService';

const getConversas = async (req, res) => {
  const conversas = await Conversas.getConversas();
  res.send(conversas);
};

module.exports = {
  getConversas,
};
