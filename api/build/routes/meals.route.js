"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _meal = _interopRequireDefault(require("../controllers/meal.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router(); // creating our routes


router.get('/:id', _meal.default.fetchAllMeals);
router.post('/id', _meal.default.addMeal);
router.get('/:id', _meal.default.getSingleMeal);
router.put('/:id', _meal.default.updateMeal);
router.delete('/:id', _meal.default.deleteMeal);
var _default = router;
exports.default = _default;
//# sourceMappingURL=meals.route.js.map