Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Realm_1 = require("../db/Realm");
function createAccount(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { email, password, } = req.body;
        try {
            yield Realm_1.default.emailPasswordAuth.registerUser(email, password);
            res.send(`A confirmation email has been sent to ${email}`).status(200);
        }
        catch (error) {
            console.error('Got error on account creation: ', error);
            res.send('There was a problem with your account creation. Please try again.').status(500);
        }
    });
}
exports.default = createAccount;
//# sourceMappingURL=createAccount.js.map