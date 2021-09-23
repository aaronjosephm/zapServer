Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PolygonClient_1 = require("../apis/PolygonClient");
const getCryptoExchanges = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    try {
        const result = yield PolygonClient_1.test();
        res.status(200).send(result.data);
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.getCryptoExchanges = getCryptoExchanges;
//# sourceMappingURL=polygonRoutes.js.map