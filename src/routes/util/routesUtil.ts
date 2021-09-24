import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import { env } from '../../config/env';
import { get } from 'lodash';

async function requireAuth(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  const adminUrl = 'https://realm.mongodb.com/api/admin/v3.0/auth/providers/mongodb-cloud/login';
  const verifyTokenUrl = `https://realm.mongodb.com/api/admin/v3.0/groups/${env.REALM_GROUP_ID}/apps/${env.REALM_APP_ID}/users/verify_token`;

  const { accessToken } = req.body;

  const axiosClient = axios.create({
    timeout: 15 * 1000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })

  let verifyTokenResult;

  try {
    const adminTokenObj = await axiosClient.request({
      url: adminUrl,
      method: 'post',
      data: { "username": env.APP_MONGODB_OWNER_API_PUBLIC_KEY, "apiKey": env.APP_MONGODB_OWNER_API_PRIVATE_KEY }
    });

    verifyTokenResult = await axiosClient.request({
      url: verifyTokenUrl,
      method: 'post',
      headers: {
        Authorization: `Bearer ${get(adminTokenObj, 'data.access_token')}`,
      },
      data: { "token": accessToken }
    })

  } catch (err) {
    console.error("ERROR: ", err);
  }
  
  if (verifyTokenResult) {
    next();
    return;
  }
  return res.status(403).send('Not permitted');
}

export {
  requireAuth
}

// graphql example:
//
// const url = `https://realm.mongodb.com/api/client/v2.0/app/${env.REALM_CLIENT_APP_ID}/graphql`;
//
// const result = await axiosClient.request({
//   url: url,
//   method: 'post',
//   headers: {
//     Authorization: `Bearer ` +  accessToken,
//   },
//   data: {
//     query: `
//       query {
//         customer(query: {name: "Aaron"}) {
//           _id
//           accounts
//           active
//           address
//           birthdate
//           email
//           name
//           password
//         }
//       }
//    `}
// });