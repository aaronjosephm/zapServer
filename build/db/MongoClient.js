Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const env_1 = require("../config/env");
env_1.loadEnv();
const mongodb_1 = require("mongodb");
let db;
exports.db = db;
function connectClient() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const client = new mongodb_1.MongoClient(env_1.env.APP_MONGODB_URI);
        try {
            yield client.connect();
            exports.db = db = client.db('sample_analytics');
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.connectClient = connectClient;
//# sourceMappingURL=MongoClient.js.map