"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Meal = _interopRequireDefault(require("../models/Meal.model"));

var _dummyData = _interopRequireDefault(require("../utils/dummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrdersService = {
  // fetching all the orders
  getAllOrders: function getAllOrders() {
    return _dummyData.default.meals.map(function (order) {
      var orders = new _Meal.default();
      orders.id = order.id;
      orders.name = order.name;
      orders.size = order.size;
      orders.price = order.price;
      return orders;
    });
  },
  // getting order by id
  getSingleOrder: function getSingleOrder(id) {
    var orders = _dummyData.default.meals.find(function (order) {
      return order.id == id;
    });

    return orders || {};
  },
  // adding to order list
  addToOrder: function addToOrder(order) {
    var orderLength = _dummyData.default.meals.length; // checking if the array is empty to avoid undefined errors.

    if (orderLength === undefined || orderLength == 0) {
      order.id = 1;

      _dummyData.default.meals.push(order);
    } else {
      var lastId = _dummyData.default.meals[orderLength - 1].id;
      var newId = lastId + 1;
      order.id = newId;

      _dummyData.default.meals.push(order);
    }

    return order;
  },
  // updating order
  updateOrder: function updateOrder(id, _updateOrder) {
    // checking for meal id, deleting and updating the array
    var orderId = _dummyData.default.meals.find(function (order) {
      return order.id == id;
    });

    _updateOrder.id = orderId.id;

    _dummyData.default.meals.splice(orderId.id - 1, 1, _updateOrder);

    return _updateOrder;
  },
  // delete order by id
  deleteOrder: function deleteOrder(id) {
    // checking for order id and deleting it from the array
    var order = _dummyData.default.meals.find(function (order) {
      return order.id == id;
    });

    _dummyData.default.meals.splice(order.id - 1, 1);

    return {};
  }
};
var _default = OrdersService;
exports.default = _default;
//# sourceMappingURL=orders.service.js.map