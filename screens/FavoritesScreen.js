import React from 'react';
import { useSelector } from 'react-redux';
import {
  View, StyleSheet,
} from 'react-native';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const FavoritesScreen = ({ navigation }) => {
  const favMeals = useSelector((state) => state.mealsReducer.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found. Start adding some!</DefaultText>
      </View>
    );
  }
  return (
    <MealList listData={favMeals} navigation={navigation} />
  );
};

export default FavoritesScreen;
