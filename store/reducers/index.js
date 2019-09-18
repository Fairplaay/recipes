import { combineReducers } from 'redux';
import mealsReducer from './meals';

const allReducers = combineReducers({
  mealsReducer,
});

export default allReducers;
