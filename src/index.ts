/* 
 * ZapTrade
 * Author - Aaron Mednick
 * 12/19/2020
 *
 * Load environment variables before anything else is done. This loads synchronously.
 */

require('dotenv').config();
import { loadEnv } from './config/env';
loadEnv();

/*
 * Load rest of modules for app.
 */
import * as express from 'express';
import { router } from './routes/main';
import * as bodyParser from 'body-parser';

import { connectClient } from './db/MongoClient';

const app = express();

async function main() {
  try {
    await connectClient();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'DELETE, POST, GET, OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
      next();
    })
    app.use(router);

    app.listen(1337, () => {
      console.log('Listening on port 1337')
    });
  } catch (error) {
    throw error;
  }
}

main().then(() => {
  console.log('App successfully running!')
}).catch((error) => {
  console.error('Got error upon starting app: ', error);
})

