"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _orders = _interopRequireDefault(require("../services/orders.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// created our meal controller
var OrderController = {
  // Get all orders
  getAllOrders: function getAllOrders(req, res) {
    var allOrders = _orders.default.getAllOrders();

    return res.json({
      status: 'success',
      data: allOrders
    }).status(200);
  },
  // Get order by id
  getSingleOrder: function getSingleOrder(req, res) {
    var _ref = [req.params.id],
        id = _ref[0];

    var foundOrder = _orders.default.getSingleOrder(id);

    return res.json({
      status: 'success',
      data: foundOrder
    }).status(200);
  },
  // Add order
  addOrder: function addOrder(req, res) {
    var Order = req.body;

    var newOrder = _orders.default.addToOrder(Order);

    return res.json({
      status: 'success',
      data: newOrder
    }).status(201);
  },
  // Update order
  updateOrder: function updateOrder(req, res) {
    var _ref2 = [req.params.id],
        id = _ref2[0];
    var newOrder = req.body;

    var updateOrder = _orders.default.updateOrder(id, newOrder);

    return res.json({
      status: 'success',
      data: updateOrder
    }).status(201);
  },
  // Delete Order
  deleteOrder: function deleteOrder(req, res) {
    var _ref3 = [req.params.id],
        id = _ref3[0];

    var deleteOrder = _orders.default.deleteOrder(id);

    return res.json({
      status: 'success',
      data: deleteOrder
    }).status(200);
  }
};
var _default = OrderController;
exports.default = _default;
//# sourceMappingURL=orders.controller.js.map