import React, { useRef, useState } from 'react';
import styled from '@emotion/native';
import roulettePin from 'assets/images/roulette-pin.svg';
import { Animated, Easing } from 'react-native';
import Svg, { Circle, SvgXml } from 'react-native-svg';
import Btn from 'src/components/atoms/Btn';

const RouletteScreen = () => {
  const roulette = useRef(new Animated.Value(0)).current;

  const createRandomDegree = () => {
    return Math.floor(Math.random() * 360) + 1080; // 3 바퀴 이상 돌리기 위해 1080도 추가
  };

  const [degree, setDegree] = useState(0);
  const [nextDegree, setNextDegree] = useState(degree + createRandomDegree());

  const interpolateRotation = roulette.interpolate({
    inputRange: [0, 1],
    outputRange: [`${degree}deg`, `${nextDegree}deg`],
  });

  const rouletteStyle = {
    transform: [
      {
        rotate: interpolateRotation,
      },
    ],
  };

  const rotateRoulette = () => {
    roulette.setValue(0);
    setDegree(nextDegree);
    setNextDegree(nextDegree + createRandomDegree());

    Animated.timing(roulette, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Container>
      <Roulette>
        <RoulettePin>
          <SvgXml xml={roulettePin} />
        </RoulettePin>
        <Animated.View style={rouletteStyle}>
          <SvgWrapper>
            <Svg height="100" width="100">
              <Circle cx="100" cy="100" r="100" fill="pink" />
            </Svg>
            <Svg height="100" width="100">
              <Circle cx="0" cy="100" r="100" fill="powderblue" />
            </Svg>
          </SvgWrapper>
          <SvgWrapper>
            <Svg height="100" width="100">
              <Circle cx="100" cy="0" r="100" fill="yellow" />
            </Svg>
            <Svg height="100" width="100">
              <Circle cx="0" cy="0" r="100" fill="skyblue" />
            </Svg>
          </SvgWrapper>
        </Animated.View>
      </Roulette>
      <Btn width={100} backgroundColor="gray" onPress={rotateRoulette}>
        룰렛 돌리기
      </Btn>
    </Container>
  );
};

export default RouletteScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

const SvgWrapper = styled.View`
  flex-direction: row;
`;

const Roulette = styled.View`
  margin: 30px 0;
`;

const RoulettePin = styled.View`
  position: absolute;
  top: -3%;
  left: 23%;
  z-index: 2;
`;
