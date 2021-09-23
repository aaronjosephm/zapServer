Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = require("axios");
const env_1 = require("../config/env");
function test() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield axios_1.default.get(`https://api.polygon.io/v1/meta/crypto-exchanges?apiKey=${env_1.env.POLYGON_API_KEY}`);
            return result;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    });
}
exports.test = test;
//# sourceMappingURL=PolygonClient.js.map