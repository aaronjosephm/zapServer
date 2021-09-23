Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createAccount_1 = require("./createAccount");
const confirmUser_1 = require("./confirmUser");
const login_1 = require("./login");
const logout_1 = require("./logout");
const polygonRoutes_1 = require("./polygonRoutes");
const routesUtil_1 = require("./util/routesUtil");
const router = express_1.Router();
exports.router = router;
router.post('/login', login_1.default);
router.get('/protected', routesUtil_1.requireAuth, (req, res) => {
    res.send('Welcome to protected route log in user.');
});
router.post('/createAccount', createAccount_1.default);
router.post('/confirmUser', confirmUser_1.default);
router.post('/logout', logout_1.default);
router.post('/getCryptoExchanges', routesUtil_1.requireAuth, polygonRoutes_1.getCryptoExchanges);
//# sourceMappingURL=main.js.map