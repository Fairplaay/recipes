import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealItem from './MealItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

const MealList = ({ listData, navigation }) => {
  const favoriteMeal = useSelector((state) => state.mealsReducer.favoriteMeals);

  const renderMealItem = (itemData) => {
    const isFav = favoriteMeal.some(((el) => el.id === itemData.item.id));
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectedMeal={() => {
          navigation.navigate('MealDetail', { mealId: itemData.item.id, mealTitle: itemData.item.title, isFav });
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={listData}
        renderItem={renderMealItem}
        style={{
          width: '100%',
        }}
      />
    </View>
  );
};

export default MealList;
