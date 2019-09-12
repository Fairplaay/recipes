import React from 'react';
import {
  View, FlatList, StyleSheet,
} from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


const CategoriesMealsScreen = ({ navigation }) => {
  const renderMealItem = (itemData) => (
    <MealItem
      title={itemData.item.title}
      duration={itemData.item.duration}
      complexity={itemData.item.complexity}
      affordability={itemData.item.affordability}
      image={itemData.item.imageUrl}
      onSelectedMeal={() => { navigation.navigate('MealDetail', { mealId: itemData.item.id }); }}
    />
  );

  const categoryId = navigation.getParam('categoryId');

  const displaySelected = MEALS.filter((meal) => meal.categoryId.indexOf(categoryId) >= 0);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={displaySelected}
        renderItem={renderMealItem}
        style={{
          width: '100%', padding: 12,
        }}
      />
    </View>
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
