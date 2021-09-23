import { Router, Request, Response } from 'express';
import createAccount from './createAccount';
import confirmUser from './confirmUser';
import login from './login';
import logout from './logout';
import { getCryptoExchanges } from './polygonRoutes';
import RequestWithBody from './interfaces/RequestWithBody';
import { requireAuth } from './util/routesUtil';

const router = Router();

router.post('/login', login);

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route log in user.');
})

router.post('/createAccount', createAccount);

router.post('/confirmUser', confirmUser);

router.post('/logout', logout);

router.post('/getCryptoExchanges', requireAuth, getCryptoExchanges);

export { router }