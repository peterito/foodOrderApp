"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Meal = _interopRequireDefault(require("../models/Meal.model"));

var _dummyData = _interopRequireDefault(require("../utils/dummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuService = {
  // fetching all the data/meals
  getMenuOfDay: function getMenuOfDay() {
    return _dummyData.default.meals.map(function (menu) {
      var newMenu = new _Meal.default();
      newMenu.id = menu.id;
      newMenu.name = menu.name;
      newMenu.size = menu.size;
      newMenu.price = menu.price;
      return newMenu;
    });
  },
  // adding meal of the day
  addMenuOfDay: function addMenuOfDay(menu) {
    menu.id = 1;

    _dummyData.default.meals.splice(0, 1, menu);

    return menu;
  }
};
var _default = MenuService;
exports.default = _default;
//# sourceMappingURL=menu.service.js.map