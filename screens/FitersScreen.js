import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


const FiltersScreen = () => (
  <View style={styles.container}>
    <Text>Filters meals</Text>
  </View>
);

export default FiltersScreen;
