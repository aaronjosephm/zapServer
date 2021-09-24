import { EnvType, load } from 'ts-dotenv';
 
export type Env = EnvType<typeof schema>;
 
export const schema = {
  APP_MONGODB_URI: String,
  APP_MONGODB_OWNER_API_PRIVATE_KEY: String,
  APP_MONGODB_OWNER_API_PUBLIC_KEY: String,
  POLYGON_API_KEY: String,
  REALM_CLIENT_APP_ID: String,
  REALM_APP_ID: String,
  REALM_GROUP_ID: String,
};
 
export let env: Env;
 
export function loadEnv(): void {
  env = load(schema);
}