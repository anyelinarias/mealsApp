import { StyleSheet } from 'react-native'
import CategoriesScreen from "./screens/CategoriesScreens";
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScree from './screens/MealDetailScreen';

const Stack = createStackNavigator();

export default function App() {

  
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
              headerStyle: { backgroundColor: '#c1d3fe'},
              headerTintColor: 'black',
              contentStyle: { backgroundColor: '#F1E5D1'}
          }}
        >
          <Stack.Screen 
            name="MealsCategories" 
            component={CategoriesScreen}
          />
          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen}
            options={{
              title: 'All categories',
              headerTintColor: 'black',
              contentStyle: { backgroundColor: '#defcff'}
            }} 
          />
          <Stack.Screen 
            name="MealDetails" 
            component={MealDetailScree} 
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
  },
});