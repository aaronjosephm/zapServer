Object.defineProperty(exports, "__esModule", { value: true });
const ts_dotenv_1 = require("ts-dotenv");
exports.schema = {
    APP_MONGODB_URI: String,
    POLYGON_API_KEY: String,
    REALM_APP_ID: String,
};
function loadEnv() {
    exports.env = ts_dotenv_1.load(exports.schema);
}
exports.loadEnv = loadEnv;
//# sourceMappingURL=env.js.map