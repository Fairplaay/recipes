import React from 'react';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoriesMealsScreen = ({ navigation }) => {
  const availableMeals = useSelector((state) => state.mealsReducer.filteredMeals);
  const categoryId = navigation.getParam('categoryId');

  const displaySelected = availableMeals.filter((meal) => meal.categoryId.indexOf(categoryId) >= 0);

  return (
    <MealList listData={displaySelected} navigation={navigation} />
  );
};

CategoriesMealsScreen.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');
  const categorySelected = CATEGORIES.find((item) => item.id === categoryId);
  return {
    title: categorySelected.title,
  };
};

export default CategoriesMealsScreen;
