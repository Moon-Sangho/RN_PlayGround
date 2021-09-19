import React, { useCallback } from 'react';
import styled from '@emotion/native';
import { StackScreenProps } from '@react-navigation/stack';
import AnimatedLottieView from 'lottie-react-native';
import { View } from 'react-native';
import Txt from 'src/components/atoms/Txt';
import BottomBtnTemplate from 'src/components/templates/BottomBtnTemplate';

type Props = StackScreenProps<RootStackNavigator, 'SurveyResultScreen'>;

const SurveyResultScreen = ({ navigation, route }: Props) => {
  const { totalValue } = route.params;

  const goToMain = useCallback(() => {
    navigation.navigate('LandingScreen');
  }, [navigation]);

  return (
    <BottomBtnTemplate
      showHeader={false}
      btnText="메인으로 가기"
      btnProps={{ onPress: goToMain }}>
      <Container>
        <ResultTxt>당신의 총 점수는 {totalValue} 점 입니다</ResultTxt>
        <AnimatedLottieView
          source={require('assets/animations/survey-reseult.json')}
          autoPlay
          loop
        />
        <View style={{ height: 400 }} />
      </Container>
    </BottomBtnTemplate>
  );
};

export default SurveyResultScreen;

const Container = styled.View`
  align-items: center;
  padding: 0 24px;
`;

const ResultTxt = styled(Txt)`
  font-size: 20px;
`;
