import React from 'react';
import styled from '@emotion/native';
import { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import Btn from 'src/components/Btn';
import Txt from 'src/components/Txt';

type Props = StackScreenProps<RootStackNavigator, 'LandingScreen'>;

const LandingScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <Header>
        <Title>React-Native PlayGround</Title>
      </Header>
      <Container>
        <Btn onPress={() => navigation.navigate('ChartScreen')} color="#ffffff">
          차트
        </Btn>
      </Container>
    </SafeAreaView>
  );
};

export default LandingScreen;

const Header = styled.View`
  justify-content: center;
  align-items: center;
`;

const Title = styled(Txt)`
  font-size: 22px;
  font-weight: bold;
`;

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;
