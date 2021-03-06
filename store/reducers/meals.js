import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../../constants/actionsTypesEnum';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex((meal) => meal.id === action.mealId);
      if (existingIndex >= 0) {
        const updateFavsMeals = [...state.favoriteMeals];
        updateFavsMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updateFavsMeals };
      }
      const newFav = state.meals.find((el) => el.id === action.mealId);
      return { ...state, favoriteMeals: state.favoriteMeals.concat(newFav) };
    default:
      return state;
  }
};

export default mealsReducer;
