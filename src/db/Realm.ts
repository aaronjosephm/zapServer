import { loadEnv, env } from '../config/env';
loadEnv();

import * as Realm from 'realm';

const realmApp = new Realm.App({ id: env.REALM_CLIENT_APP_ID });

export default realmApp;