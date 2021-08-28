import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChartScreen from 'src/screens/ChartScreen';
import DropdownScreen from 'src/screens/DropdownScreen';
import LandingScreen from 'src/screens/LandingScreen';

const Stack = createStackNavigator<RootStackNavigator>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
      <Stack.Screen name="ChartScreen" component={ChartScreen} />
      <Stack.Screen name="DropdownScreen" component={DropdownScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
