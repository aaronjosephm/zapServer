Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Realm = require("realm");
const Realm_1 = require("../db/Realm");
function login(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { email, password, } = req.body;
        Realm_1.default.currentUser;
        const credentials = Realm.Credentials.emailPassword(email, password);
        try {
            const user = yield Realm_1.default.logIn(credentials);
            const token = {
                accessToken: user.accessToken,
            };
            res.send(token).status(200);
        }
        catch (error) {
            console.error('Error when attempting to login: ', error);
            res.send('There was a problem when trying to login to your account please try again.').status(500);
        }
    });
}
exports.default = login;
//# sourceMappingURL=login.js.map