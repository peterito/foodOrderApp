"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menu = _interopRequireDefault(require("../services/menu.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// created our menu controller
var MenuController = {
  // get menu of the day
  getMenuOfDay: function getMenuOfDay(req, res) {
    var menu = _menu.default.getMenuOfDay();

    return res.json({
      status: 'success',
      data: menu
    }).status(200);
  },
  // Add menu of the day
  addMenuOfDay: function addMenuOfDay(req, res) {
    var newMenu = req.body;

    var updatedMenu = _menu.default.addMenuOfDay(newMenu);

    return res.json({
      status: 'success',
      data: updatedMenu
    }).status(201);
  }
};
var _default = MenuController;
exports.default = _default;
//# sourceMappingURL=menus.controller.js.map