/* eslint-disable global-require  */
/* eslint-disable import/no-unresolved  */
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { useScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import MealNavigator from './navigation/MealsNavigation';
import store from './store';

useScreens();

const fetchFont = () => Font.loadAsync({
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFont} onFinish={() => setFontLoaded(true)} />;
  }

  return (
    <View style={styles.container}>
      <Provider store={store}>
        <MealNavigator />
      </Provider>
    </View>
  );
};

export default App;
