import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/router';
import './bootstrap';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.disable('x-powered-by');
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
router(app);

const port = process.env.API_PORT || 3001;
app.listen(port, () => console.log(`Working again on ${port}`));
