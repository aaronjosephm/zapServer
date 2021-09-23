Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Realm_1 = require("../db/Realm");
function confirmUser(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { token, tokenId, } = req.body;
        try {
            const user = yield Realm_1.default.emailPasswordAuth.confirmUser(token, tokenId);
            res.send(user).status(200);
        }
        catch (error) {
            console.error('Got error on account creation: ', error);
            res.send('There was a problem with your account creation. Please try again.').status(500);
        }
    });
}
exports.default = confirmUser;
//# sourceMappingURL=confirmUser.js.map