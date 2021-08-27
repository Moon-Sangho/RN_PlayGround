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
        <TopContents />
        <BottomContents>
          <Btn onPress={() => navigation.navigate('ChartScreen')}>차트</Btn>
        </BottomContents>
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
  font-weight: 700;
`;

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const TopContents = styled.View``;

const BottomContents = styled.View`
  margin-top: 300px;
`;
