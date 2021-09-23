import { Request, Response } from 'express';
import realmApp from '../db/Realm';

async function confirmUser(req: Request, res: Response) {
  const { 
    token, 
    tokenId,
   } = req.body;

  try {
    const user = await realmApp.emailPasswordAuth.confirmUser(token, tokenId);
    res.send(user).status(200);
  } catch (error) {
    console.error('Got error on account creation: ', error);
    res.send('There was a problem with your account creation. Please try again.').status(500);
  } 
}

export default confirmUser;

