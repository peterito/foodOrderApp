"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meal = _interopRequireDefault(require("../models/meal.model"));

var _dummyData = _interopRequireDefault(require("../utils/dummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// created meal service object;
var MealService = {
  // fetching all the data/meals
  fetchAllMeals: function fetchAllMeals() {
    return _dummyData.default.meals.map(function (meal) {
      var newMeal = new _meal.default();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      return newMeal;
    });
  },
  // adding meal
  addMeal: function addMeal(meal) {
    var mealLength = _dummyData.default.meals.length; // checking if the array is empty to avoid undefined errors.

    if (mealLength === undefined || mealLength == 0) {
      meal.id = 1;

      _dummyData.default.meals.push(meal);
    } else {
      var lastId = _dummyData.default.meals[mealLength - 1].id;
      var newId = lastId + 1;
      meal.id = newId;

      _dummyData.default.meals.push(meal);
    }

    return meal;
  },
  // getting meal by id
  getMeal: function getMeal(id) {
    var meal = _dummyData.default.meals.find(function (meal) {
      return meal.id == id;
    });

    return meal || {};
  },
  // updating meal by id
  updateMeal: function updateMeal(id, _updateMeal) {
    // checking for meal id, deleting and updating the array
    var mealId = _dummyData.default.meals.find(function (meal) {
      return meal.id == id;
    });

    _updateMeal.id = mealId.id;

    _dummyData.default.meals.splice(mealId.id - 1, 1, _updateMeal);

    return _updateMeal;
  },
  // delete meal by id
  deleteMeal: function deleteMeal(id) {
    // checking for meal id and deleting it from the array
    var meal = _dummyData.default.meals.find(function (meal) {
      return meal.id == id;
    });

    _dummyData.default.meals.splice(meal.id - 1, 1);

    return {};
  }
};
var _default = MealService;
exports.default = _default;
//# sourceMappingURL=meal.service.js.map