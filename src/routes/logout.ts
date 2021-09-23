import { Request, Response } from 'express';
import realmApp from '../db/Realm';

async function logout(req: Request, res: Response) {
  try {
    const result = await realmApp.currentUser.logOut();
    res.send(result).status(200);
  } catch (error) {
    console.error('Error when attempting to logout: ', error);
    res.send('There was a problem when trying to logout of your account. Please try again.').status(500);
  } 
}

export default logout;

