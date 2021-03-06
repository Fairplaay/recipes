import React, { useEffect, useCallback } from 'react';
import {
  ScrollView, View, Text, StyleSheet, Image,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import CustomHeaderButton from '../components/headerButton';
import DefaultText from '../components/DefaultText';
import { toggleFavorite } from '../store/actions';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#CCC',
    borderWidth: 1,
    padding: 10,
  },
});


const MealDetailsScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const MEALS = useSelector((state) => state.mealsReducer.meals);

  const mealId = navigation.getParam('mealId');

  const currentFavMeals = useSelector((state) => state.mealsReducer.favoriteMeals.some((meal) => meal.id === mealId));

  const selectedMeal = MEALS.find((item) => item.id === mealId);

  const ListItem = ({ children }) => (
    <View style={styles.listItem}>
      <DefaultText>{children}</DefaultText>
    </View>
  );

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams(({ toggleFav: toggleFavoriteHandler }));
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    navigation.setParams(({ isFav: currentFavMeals }));
  }, [currentFavMeals]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{`${selectedMeal.duration}m`}</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((el) => <ListItem key={el}>{el}</ListItem>)}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((el) => <ListItem key={el}>{el}</ListItem>)}
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = ({ navigation }) => {
  const headerTitle = navigation.getParam('mealTitle');
  const ontoggleFavorite = navigation.getParam('toggleFav');
  const isFavorite = navigation.getParam('isFav');
  return {
    headerTitle,
    headerRight:
  <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    <Item
      title="Favorite"
      iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
      onPress={ontoggleFavorite}
    />
  </HeaderButtons>,
  };
};

export default MealDetailsScreen;
