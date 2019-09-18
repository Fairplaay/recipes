import { combineReducers } from 'redux';
import mealsReducer from './meals';

const allReducers = combineReducers({
  meals: mealsReducer,
});

export default allReducers;
