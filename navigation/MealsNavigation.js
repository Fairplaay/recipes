import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import Colors from '../constants/Colors';

const MealNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: () => ({
      headerTitle: 'Meal Categories',
    }),
  },
  CategoriesMeals: {
    screen: CategoriesMealsScreen,
  },
  MealDetail: {
    screen: MealDetailsScreen,
  },
},
{
  defaultNavigationOptions: () => ({
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? '#FFFFFF' : Colors.primaryColor,
  }),
});

export default createAppContainer(MealNavigator);
