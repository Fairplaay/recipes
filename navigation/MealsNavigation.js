import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import CustomHeaderButton from '../components/headerButton';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FitersScreen';


const defaultNavOptions = {
  defaultNavigationOptions: () => ({
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? '#FFFFFF' : Colors.primaryColor,
    headerTitleStyle: 'open-sans-bold',
    headerBackTitleStyle: 'open-sans',
  }),
};

const MealNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Meal Categories',
        headerLeft:
  <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    <Item
      title=" Menu"
      iconName="ios-menu"
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    />
  </HeaderButtons>,
      }),
    },
    CategoriesMeals: {
      screen: CategoriesMealsScreen,
    },
    MealDetail: {
      screen: MealDetailsScreen,
    },
  },
  defaultNavOptions,
);

const FavoritesNaviagtor = createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Your Favorites',
        headerLeft:
  <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    <Item
      title=" Menu"
      iconName="ios-menu"
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    />
  </HeaderButtons>,
      }),
    },
    MealDetail: { screen: MealDetailsScreen },
  }, defaultNavOptions,
);

const FiltersNavigator = createStackNavigator({
  Filters: {
    screen: FiltersScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Filters Meal',
      headerLeft:
  <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    <Item
      title=" Menu"
      iconName="ios-menu"
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    />
  </HeaderButtons>,
    }),
  },
});

const tabScreenConfigs = {
  Meals: {
    screen: MealNavigator,
    navigationOptions: () => ({
      tabBarIcon: (tabInfo) => <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />,
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text> : 'Meals',

    }),
  },
  Favorites: {
    screen: FavoritesNaviagtor,
    navigationOptions: () => ({
      tabBarIcon: (tabInfo) => <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />,
      tabBarColor: Colors.accentColor,
      tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }}>Favorites</Text> : 'Favorites',
    }),
  },
};

const MealFavTabNavigator = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(tabScreenConfigs, {
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
    },
    shifting: true,
  })
  : createBottomTabNavigator(tabScreenConfigs, {
    tabBarOptions: {
      labelStyle: {
        fontFamily: 'open-sans-bold',
      },
      activeTintColor: Colors.accentColor,
    },
  });

const MainNavigator = createDrawerNavigator(
  {
    MealFavs: { screen: MealFavTabNavigator },
    Filters: FiltersNavigator,
  },
);

export default createAppContainer(MainNavigator);
