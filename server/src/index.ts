import express from 'express';
import { router } from './routes/loginRoutes';
import { AppRouter } from './AppRouter';
import cookieSession from 'cookie-session';

import './controllers/LoginController';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['asdasd'] }));

app.use(router);
app.use(AppRouter.getInstance());

app.listen(3000, () => console.log('listening on port 3000'));
