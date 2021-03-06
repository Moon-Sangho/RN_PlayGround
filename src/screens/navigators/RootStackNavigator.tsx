import React from 'react';
import { View } from 'react-native';
import Btn from 'src/components/atoms/Btn';
import AlertModalScreen from 'src/screens/AlertModalScreen';
import CarouselScreen from 'src/screens/CarouselScreen';
import ChartScreen from 'src/screens/ChartScreen';
import CheckboxScreen from 'src/screens/CheckboxScreen';
import DropdownScreen from 'src/screens/DropdownScreen';
import LandingScreen from 'src/screens/LandingScreen';
import PasswordSettingScreen from 'src/screens/PasswordSettingScreen';
import RouletteScreen from 'src/screens/RouletteScreen';
import ScrollFadeInScreen from 'src/screens/ScrollFadeInScreen';
import SurveyResultScreen from 'src/screens/SurveyResultScreen';
import SurveyScreen from 'src/screens/SurveyScreen';
import SVGScreen from 'src/screens/SVGScreen';

import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator<RootStackNavigator>();

const RootStackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { shadowColor: 'transparent' },
        headerLeft: () => <Btn type="back" onPress={navigation.goBack} />,
      }}
      detachInactiveScreens={false}>
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AlertModalScreen"
        component={AlertModalScreen}
        options={{
          headerShown: false,
          cardOverlayEnabled: true,
          cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
          cardStyleInterpolator: ({ current }) => ({
            cardStyle: {
              opacity: current.progress,
            },
          }),
        }}
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
          headerTitle: '??????',
        }}
      />
      <Stack.Screen
        name="DropdownScreen"
        component={DropdownScreen}
        options={{
          headerTitle: '????????????',
        }}
      />
      <Stack.Screen
        name="SurveyScreen"
        component={SurveyScreen}
        options={{
          header: () => <View />,
        }}
      />
      <Stack.Screen
        name="SurveyResultScreen"
        component={SurveyResultScreen}
        options={{
          header: () => <View />,
        }}
      />
      <Stack.Screen
        name="RouletteScreen"
        component={RouletteScreen}
        options={{
          headerTitle: '??????',
        }}
      />
      <Stack.Screen
        name="CarouselScreen"
        component={CarouselScreen}
        options={{
          headerTitle: 'Carousel',
        }}
      />
      <Stack.Screen
        name="ScrollFadeInScreen"
        component={ScrollFadeInScreen}
        options={{
          headerTitle: 'Scroll Fade-In',
        }}
      />
      <Stack.Screen
        name="PasswordSettingScreen"
        component={PasswordSettingScreen}
        options={{
          header: () => <View />,
        }}
      />
      <Stack.Screen
        name="CheckboxScreen"
        component={CheckboxScreen}
        options={{
          headerTitle: 'Checkbox',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
