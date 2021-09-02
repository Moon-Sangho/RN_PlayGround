import React from 'react';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Btn from 'src/components/Btn';
import Txt from 'src/components/Txt';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackNavigator>>();

  return (
    <HeaderContainer>
      <Btn type="back" onPress={navigation.goBack} />
      <Txt fontSize={17}>{title}</Txt>
      <Btn type="close" onPress={() => navigation.navigate('LandingScreen')} />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
