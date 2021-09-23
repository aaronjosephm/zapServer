Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = require("axios");
const Realm_1 = require("../../db/Realm");
const lodash_1 = require("lodash");
function requireAuth(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const url = 'https://realm.mongodb.com/api/client/v2.0/app/application-0-fenzj/graphql';
        const { accessToken } = req.body;
        const axiosClient = axios_1.default.create({
            timeout: 15 * 1000,
        });
        try {
            const result = yield axiosClient.request({
                url: url,
                method: 'post',
                headers: {
                    Authorization: `Bearer ` + accessToken,
                },
                data: {
                    query: `
          query {
            customer(query: {name: "Aaron"}) {
              _id
              accounts
              active
              address
              birthdate
              email
              name
              password
            }
          }
       `
                }
            });
            console.log('RESULT IS: ', result);
        }
        catch (err) {
            console.error("ERROR: ", err);
        }
        const isLoggedIn = lodash_1.get(Realm_1.default, 'currentUser.isLoggedIn', false);
        if (isLoggedIn) {
            next();
            return;
        }
        return res.status(403).send('Not permitted');
    });
}
exports.requireAuth = requireAuth;
//# sourceMappingURL=routesUtil.js.map