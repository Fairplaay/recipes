import React from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';
import CATEGORIES from '../data/dummy-data';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


const CategoriesMealsScreen = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');

  const categorySelected = CATEGORIES.find((item) => item.id === categoryId);

  return (
    <View style={styles.container}>
      <Text>Categories meals</Text>
      <Text>{categorySelected.title}</Text>
      <Button title="Go to Details screen!" onPress={() => { navigation.navigate('MealDetail'); }} />
      <Button title="Go back!" onPress={() => navigation.pop()} />
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
