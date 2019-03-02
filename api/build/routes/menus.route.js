"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _menus = _interopRequireDefault(require("../controllers/menus.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router(); // creating our routes


router.get('/', _menus.default.getMenuOfDay);
router.post('/', _menus.default.addMenuOfDay);
var _default = router;
exports.default = _default;
//# sourceMappingURL=menus.route.js.map