/*
 * ZapTrade
 * Author - Aaron Mednick
 * 12/19/2020
 *
 * Load environment variables before anything else is done. This loads synchronously.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require('dotenv').config();
const env_1 = require("./config/env");
env_1.loadEnv();
/*
 * Load rest of modules for app.
 */
const express = require("express");
const main_1 = require("./routes/main");
const bodyParser = require("body-parser");
const MongoClient_1 = require("./db/MongoClient");
const app = express();
function main() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            yield MongoClient_1.connectClient();
            app.use(bodyParser.urlencoded({ extended: true }));
            app.use(bodyParser.json());
            app.use((req, res, next) => {
                res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Methods', 'DELETE, POST, GET, OPTIONS');
                res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
                next();
            });
            app.use(main_1.router);
            app.listen(1337, () => {
                console.log('Listening on port 1337');
            });
        }
        catch (error) {
            throw error;
        }
    });
}
main().then(() => {
    console.log('App successfully running!');
}).catch((error) => {
    console.error('Got error upon starting app: ', error);
});
//# sourceMappingURL=index.js.map