import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ImageBackground,
} from 'react-native';
import DefaultText from './DefaultText';

const styles = StyleSheet.create({
  mealItem: {
    width: '100%',
    height: 200,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0, 0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    color: '#FFF',
    textAlign: 'center',
  },
});

const MealItem = ({
  title, onSelectedMeal, duration, complexity, affordability, image,
}) => (
  <View style={styles.mealItem}>
    <TouchableOpacity onPress={onSelectedMeal}>
      <View>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground source={{ uri: image }} style={styles.bgImage}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <DefaultText>{`${duration}m`}</DefaultText>
          <DefaultText>{complexity.toUpperCase()}</DefaultText>
          <DefaultText>{affordability.toUpperCase()}</DefaultText>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

export default MealItem;
