import { Request, Response } from 'express';
import * as Realm from 'realm';
import realmApp from '../db/Realm';

async function login(req: Request, res: Response) {
  const { 
    email, 
    password,
   } = req.body;
  realmApp.currentUser
  const credentials = Realm.Credentials.emailPassword(
    email,
    password
  );

  try {
    const user = await realmApp.logIn(credentials);
    const token = { 
      accessToken: user.accessToken,
      userId: user.id
    }
    res.send(token).status(200);
  } catch (error) {
    console.error('Error when attempting to login: ', error);
    res.send('There was a problem when trying to login to your account please try again.').status(500);
  } 
}

export default login;

