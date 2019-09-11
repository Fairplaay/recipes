import React from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


const MealDetailsScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Meals Details meals</Text>
    <Button title="Go to Categories!" onPress={() => navigation.popToTop()} />
  </View>
);

export default MealDetailsScreen;
