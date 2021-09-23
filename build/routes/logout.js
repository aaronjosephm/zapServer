Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Realm_1 = require("../db/Realm");
function logout(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield Realm_1.default.currentUser.logOut();
            res.send(result).status(200);
        }
        catch (error) {
            console.error('Error when attempting to logout: ', error);
            res.send('There was a problem when trying to logout of your account. Please try again.').status(500);
        }
    });
}
exports.default = logout;
//# sourceMappingURL=logout.js.map