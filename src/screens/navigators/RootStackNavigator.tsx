import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import BackBtn from 'src/components/BackBtn';
import ChartScreen from 'src/screens/ChartScreen';
import DropdownScreen from 'src/screens/DropdownScreen';
import LandingScreen from 'src/screens/LandingScreen';
import SVGScreen from 'src/screens/SVGScreen';
import SurveyScren from 'src/screens/SurveyScreen';

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
        name="SVGScreen"
        component={SVGScreen}
        options={{ headerTitle: 'SVG', headerLeft: () => <BackBtn /> }}
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
      <Stack.Screen
        name="SurveyScreen"
        component={SurveyScren}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
