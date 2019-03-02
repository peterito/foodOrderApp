"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _orders = _interopRequireDefault(require("../controllers/orders.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router(); // creating our routes


router.get('/', _orders.default.getAllOrders);
router.post('/', _orders.default.addOrder);
router.get('/:id', _orders.default.getSingleOrder);
router.put('/:id', _orders.default.updateOrder);
router.delete('/:id', _orders.default.deleteOrder);
var _default = router;
exports.default = _default;
//# sourceMappingURL=orders.route.js.map