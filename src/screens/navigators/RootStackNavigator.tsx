import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import BackBtn from 'src/components/BackBtn';
import ChartScreen from 'src/screens/ChartScreen';
import DropdownScreen from 'src/screens/DropdownScreen';
import LandingScreen from 'src/screens/LandingScreen';

const Stack = createStackNavigator<RootStackNavigator>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={{ header: () => <View /> }}
      />
      <Stack.Screen
        name="ChartScreen"
        component={ChartScreen}
        options={{ headerTitle: '차트', headerLeft: () => <BackBtn /> }}
      />
      <Stack.Screen
        name="DropdownScreen"
        component={DropdownScreen}
        options={{ headerTitle: '드랍다운', headerLeft: () => <BackBtn /> }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
