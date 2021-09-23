Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("../config/env");
env_1.loadEnv();
const Realm = require("realm");
const realmApp = new Realm.App({ id: env_1.env.REALM_APP_ID });
exports.default = realmApp;
//# sourceMappingURL=Realm.js.map