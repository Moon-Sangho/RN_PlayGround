import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Btn from 'src/components/Btn';
import ChartScreen from 'src/screens/ChartScreen';
import DropdownScreen from 'src/screens/DropdownScreen';
import LandingScreen from 'src/screens/LandingScreen';
import SVGScreen from 'src/screens/SVGScreen';
import SurveyScreen from 'src/screens/SurveyScreen';

const Stack = createStackNavigator<RootStackNavigator>();

const RootStackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { shadowColor: 'transparent' },
        headerLeft: () => <Btn type="back" onPress={navigation.goBack} />,
      }}>
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SVGScreen"
        component={SVGScreen}
        options={{
          headerTitle: 'SVG',
        }}
      />
      <Stack.Screen
        name="ChartScreen"
        component={ChartScreen}
        options={{
          headerTitle: '차트',
        }}
      />
      <Stack.Screen
        name="DropdownScreen"
        component={DropdownScreen}
        options={{
          headerTitle: '드랍다운',
        }}
      />
      <Stack.Screen
        name="SurveyScreen"
        component={SurveyScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
