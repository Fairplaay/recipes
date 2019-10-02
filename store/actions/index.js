import { TOGGLE_FAVORITE } from '../../constants/actionsTypesEnum';

export const toggleFavorite = (id) => ({ type: TOGGLE_FAVORITE, mealId: id });
export const toggleFavorite2 = () => ({ type: TOGGLE_FAVORITE });
