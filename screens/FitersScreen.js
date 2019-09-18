import React, { useState, useEffect, useCallback } from 'react';
import {
  View, Text, StyleSheet, Switch, Platform,
} from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,
  },
});

const FilterSwitch = ({ label, state, onChange }) => (
  <View style={styles.filterContainer}>
    <Text>{label}</Text>
    <Switch
      trackColor={{ true: Colors.primaryColor }}
      thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
      value={state}
      onValueChange={(newValue) => onChange(newValue)}
    />
  </View>
);

const FiltersScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      Vegan: isVegan,
      vegetarian: isVegetarian,
    };
    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters() });
  }, [saveFilters]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch label="Gluten-free" state={isGlutenFree} onChange={(newValue) => setIsGlutenFree(newValue)} />
      <FilterSwitch label="Lactose-free" state={isLactoseFree} onChange={(newValue) => setIsLactoseFree(newValue)} />
      <FilterSwitch label="Vegan" state={isVegan} onChange={(newValue) => setIsVegan(newValue)} />
      <FilterSwitch label="Vegetarian" state={isVegetarian} onChange={(newValue) => setIsVegetarian(newValue)} />
    </View>
  );
};

export default FiltersScreen;
