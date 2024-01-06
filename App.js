import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/components/Menu/appNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <AppNavigator />
    </NavigationContainer>
  );
}


