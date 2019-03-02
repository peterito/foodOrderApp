"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meal = _interopRequireDefault(require("../services/meal.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// created our meal controller
var MealController = {
  // get/fetch all meals
  fetchAllMeals: function fetchAllMeals(req, res) {
    var allMeals = _meal.default.fetchAllMeals();

    return res.json({
      status: 'success',
      data: allMeals
    }).status(200);
  },
  // Add meal
  addMeal: function addMeal(req, res) {
    var newMeal = req.body;

    var createdMeal = _meal.default.addMeal(newMeal);

    return res.json({
      status: 'success',
      data: createdMeal
    }).status(201);
  },
  // Get meal by id
  getSingleMeal: function getSingleMeal(req, res) {
    var _ref = [req.params.id],
        id = _ref[0];

    var foundMeal = _meal.default.getMeal(id);

    return res.json({
      status: 'success',
      data: foundMeal
    }).status(200);
  },
  // Update Meal
  updateMeal: function updateMeal(req, res) {
    var _ref2 = [req.params.id],
        id = _ref2[0];
    var newMeal = req.body;

    var updatedMeal = _meal.default.updateMeal(id, newMeal);

    return res.json({
      status: 'success',
      data: updatedMeal
    }).status(201);
  },
  // Delete Meal
  deleteMeal: function deleteMeal(req, res) {
    var _ref3 = [req.params.id],
        id = _ref3[0];

    var deleteMeal = _meal.default.deleteMeal(id);

    return res.json({
      status: 'success',
      data: deleteMeal
    }).status(200);
  }
};
var _default = MealController;
exports.default = _default;
//# sourceMappingURL=meal.controller.js.map