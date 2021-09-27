import React from 'react';
import styled from '@emotion/native';
import { StackScreenProps } from '@react-navigation/stack';
import AnimatedLottieView from 'lottie-react-native';
import { SafeAreaView } from 'react-native';
import Btn from 'src/components/atoms/Btn';
import Txt from 'src/components/atoms/Txt';

type Props = StackScreenProps<RootStackNavigator, 'LandingScreen'>;

const LandingScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <Header>
        <LogoContainer>
          <AnimatedLottieView
            source={require('assets/animations/react-logo.json')}
            autoPlay
            loop
          />
        </LogoContainer>
        <Title>React-Native PlayGround</Title>
      </Header>
      <Container>
        <TopContents>
          <AnimatedLottieView
            source={require('assets/animations/developer.json')}
            autoPlay
            loop
          />
        </TopContents>
        <BottomContents>
          <Btn onPress={() => navigation.navigate('SVGScreen')}>SVG</Btn>
          <Btn onPress={() => navigation.navigate('ChartScreen')}>차트</Btn>
          <Btn onPress={() => navigation.navigate('DropdownScreen')} width={80}>
            드랍다운
          </Btn>
          <Btn onPress={() => navigation.navigate('SurveyScreen')} width={80}>
            설문조사
          </Btn>
          <Btn onPress={() => navigation.navigate('RouletteScreen')}>룰렛</Btn>
          <Btn onPress={() => navigation.navigate('CarouselScreen')} width={90}>
            Carousel
          </Btn>
          <Btn
            onPress={() => navigation.navigate('ScrollFadeInScreen')}
            width={130}>
            Scroll Fade-In
          </Btn>
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

const LogoContainer = styled.View`
  width: 50px;
  height: 50px;
`;

const Title = styled(Txt)`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const TopContents = styled.View`
  width: 250px;
  height: 250px;
`;

const BottomContents = styled.View`
  flex-direction: row;
  width: 300px;
  flex-wrap: wrap;
`;
