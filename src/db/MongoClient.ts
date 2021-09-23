import { loadEnv, env } from '../config/env';
loadEnv();

import { MongoClient, Db } from 'mongodb';

let db: Db;

async function connectClient() {
  const client = new MongoClient(env.APP_MONGODB_URI);

  try {
    await client.connect();
    db = client.db('sample_analytics');
  } catch (error) {
    console.error(error);
  } 
}

export {
  connectClient,
  db
}