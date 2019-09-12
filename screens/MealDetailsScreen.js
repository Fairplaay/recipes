import React from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MEALS } from '../data/dummy-data';
import CustomHeaderButton from '../components/headerButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


const MealDetailsScreen = ({ navigation }) => {
  const mealId = navigation.getParam('mealId');
  const selectedMeal = MEALS.find((item) => item.id === mealId);
  return (
    <View style={styles.container}>
      <Text>{selectedMeal.title}</Text>
      <Button title="Go to Categories!" onPress={() => navigation.popToTop()} />
    </View>
  );
};

MealDetailsScreen.navigationOptions = ({ navigation }) => {
  const mealId = navigation.getParam('mealId');
  const selectedMeal = MEALS.find((item) => item.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight:
  <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    <Item
      title="Favorite"
      iconName="ios-star"
      onPress={() => { console.log('item mark as favorite'); }}
    />
  </HeaderButtons>,
  };
};

export default MealDetailsScreen;
