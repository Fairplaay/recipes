import React from 'react';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';

const FavoritesScreen = ({ navigation }) => {
  const favMeals = useSelector((state) => state.mealsReducer.favoriteMeals);

  return (
    <MealList listData={favMeals} navigation={navigation} />
  );
};

export default FavoritesScreen;
