import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Form from './index';
import WorkoutPlan from './workoutPlan';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTransparent: true, 
      headerTitle: '',
      headerTintColor: 'black', 
    }}
  >
    <Stack.Screen
      name="TreinoTracker"
      component={Form}
      initialRouteName="Menu"
    />
    <Stack.Screen name="WorkoutPlan" component={WorkoutPlan} />
  </Stack.Navigator>
);

export default AppNavigator;
