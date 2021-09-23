import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import realmApp from '../../db/Realm';
import { get } from 'lodash';

async function requireAuth(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  const url = 'https://realm.mongodb.com/api/client/v2.0/app/application-0-fenzj/graphql';
  const { accessToken } = req.body;

  const axiosClient = axios.create({
    timeout: 15 * 1000,
  })
  try {
    const result = await axiosClient.request({
      url: url,
      method: 'post',
      headers: {
        Authorization: `Bearer ` +  accessToken,
      },
      data: {
        query: `
          query {
            customer(query: {name: "Aaron"}) {
              _id
              accounts
              active
              address
              birthdate
              email
              name
              password
            }
          }
       `}
    });
    console.log('RESULT IS: ', result);
  } catch (err) {
    console.error("ERROR: ", err);
  }
  
  const isLoggedIn = get(realmApp, 'currentUser.isLoggedIn', false);
  if (isLoggedIn) {
    next();
    return;
  }
  return res.status(403).send('Not permitted');
}

export {
  requireAuth
}