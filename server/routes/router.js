import ConversasController from '../controllers/ConversasController';
import MensagensController from '../controllers/MensagensController';

const router = (app) => {
  app.get('/api/v1/getConversas', ConversasController.getConversas);
  app.get('/api/v1/getMensagens', MensagensController.getMensagens);
};

export default router;
