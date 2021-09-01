import React from 'react';
import styled from '@emotion/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import Btn from 'src/components/Btn';
import Txt from 'src/components/Txt';
import ChartScreen from 'src/screens/ChartScreen';
import DropdownScreen from 'src/screens/DropdownScreen';
import LandingScreen from 'src/screens/LandingScreen';
import SVGScreen from 'src/screens/SVGScreen';
import SurveyScreen from 'src/screens/SurveyScreen';

const Stack = createStackNavigator<RootStackNavigator>();

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Btn type="back" />
      <Txt fontSize={17}>{title}</Txt>
      <Btn type="close" />
    </HeaderContainer>
  );
};

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
        options={{ headerTitle: 'SVG', headerLeft: () => <Btn type="back" /> }}
      />
      <Stack.Screen
        name="ChartScreen"
        component={ChartScreen}
        options={{ headerTitle: '차트', headerLeft: () => <Btn type="back" /> }}
      />
      <Stack.Screen
        name="DropdownScreen"
        component={DropdownScreen}
        options={{
          headerTitle: '드랍다운',
          headerLeft: () => <Btn type="back" />,
        }}
      />
      <Stack.Screen
        name="SurveyScreen"
        component={SurveyScreen}
        options={{
          header: () => <Header title="설문조사" />,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;

const HeaderContainer = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
`;
