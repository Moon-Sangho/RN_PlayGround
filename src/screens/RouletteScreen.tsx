import React from 'react';
import styled from '@emotion/native';
import roulettePin from 'assets/images/roulette-pin.svg';
import Animated from 'react-native-reanimated';
import Svg, { Circle, SvgXml } from 'react-native-svg';
import Btn from 'src/components/atoms/Btn';

const RouletteScreen = () => {
  return (
    <Container>
      <Roulette>
        <RoulettePin>
          <SvgXml xml={roulettePin} />
        </RoulettePin>
        <Animated.View>
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
      <Btn width={100} backgroundColor="gray">
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
