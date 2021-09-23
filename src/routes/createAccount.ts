import { Request, Response } from 'express';
import realmApp from '../db/Realm';

async function createAccount(req: Request, res: Response) {
  const { 
    email, 
    password,
   } = req.body;

  try {
    await realmApp.emailPasswordAuth.registerUser(email, password);
    res.send(`A confirmation email has been sent to ${email}`).status(200);
  } catch (error) {
    console.error('Got error on account creation: ', error);
    res.send('There was a problem with your account creation. Please try again.').status(500);
  } 
}

export default createAccount;

