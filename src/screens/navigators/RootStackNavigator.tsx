import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import Btn from 'src/components/atoms/Btn';
import AlertModalScreen from 'src/screens/AlertModalScreen';
import CarouselScreen from 'src/screens/CarouselScreen';
import ChartScreen from 'src/screens/ChartScreen';
import DropdownScreen from 'src/screens/DropdownScreen';
import LandingScreen from 'src/screens/LandingScreen';
import RouletteScreen from 'src/screens/RouletteScreen';
import SVGScreen from 'src/screens/SVGScreen';
import SurveyResultScreen from 'src/screens/SurveyResultScreen';
import SurveyScreen from 'src/screens/SurveyScreen';

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
          headerTitle: '룰렛',
        }}
      />
      <Stack.Screen
        name="CarouselScreen"
        component={CarouselScreen}
        options={{
          headerTitle: 'Carousel',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
