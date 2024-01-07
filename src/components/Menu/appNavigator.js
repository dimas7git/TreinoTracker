import * as React from 'react';
//import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Form from './index';
import WorkoutPlan from '../Plan/workoutPlan';

//const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerTransparent: true, 
      headerTitle: 'TreinoTracker',
      headerTitleStyle: {
        fontSize: 20, 
      },
      headerTintColor: 'black', 
    }}
  >
    <Tab.Screen
      name="TreinoTracker"
      component={Form}
      initialRouteName="Menu"
    />
    <Tab.Screen name="WorkoutPlan" component={WorkoutPlan} />
  </Tab.Navigator>
);

export default AppNavigator;
