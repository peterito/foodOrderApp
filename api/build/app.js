"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _meals = _interopRequireDefault(require("./routes/meals.route"));

var _menus = _interopRequireDefault(require("./routes/menus.route"));

var _orders = _interopRequireDefault(require("./routes/orders.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//body parser to read the data
//instantiate expressjs
var app = (0, _express.default)();
var PORT = process.env.PORT || 8000;
app.use(_bodyParser.default.json()); //creating the api version route

app.use('/api/v1/meals', _meals.default);
app.use('/api/v1/menus', _menus.default);
app.use('/api/v1/orders', _orders.default); //listening to our port

app.listen(PORT, function () {
  console.log("server running on port: ".concat(PORT));
});
var _default = app;
exports.default = _default;
//# sourceMappingURL=app.js.map