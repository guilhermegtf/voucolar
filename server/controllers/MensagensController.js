import Mensagens from '../services/MensagensService';

const getMensagens = async (req, res) => {
  const conversas = await Mensagens.getMensagens();
  res.send(conversas);
};

module.exports = {
  getMensagens,
};
