import React from 'react';
import styled from '@emotion/native';
import { Linking, ScrollView } from 'react-native';
import Svg, {
  Circle,
  Defs,
  Ellipse,
  Line,
  LinearGradient,
  Polygon,
  Polyline,
  Rect,
  Stop,
} from 'react-native-svg';
import Txt from 'src/components/atoms/Txt';

const SVGScreen = () => {
  return (
    <Container>
      <LinkTxt
        onPress={() =>
          Linking.openURL(
            'https://github.com/react-native-svg/react-native-svg#svg',
          )
        }>
        Go to react-native-svg github
      </LinkTxt>
      <ScrollView bounces={false} style={{ width: '100%' }}>
        <SvgContainer>
          <Svg width="200" height="100">
            <Rect
              x="25"
              y="5"
              width="150"
              height="80"
              fill="rgb(0,0,255)"
              strokeWidth="3"
              stroke="rgb(0,0,0)"
            />
          </Svg>
          <Txt>Rectangle</Txt>
        </SvgContainer>
        <SvgContainer>
          <Svg height="100" width="100">
            <Circle
              cx="50"
              cy="50"
              r="40"
              fill="pink"
              stroke="rgb(0,0,0)"
              strokeWidth="1"
            />
          </Svg>
          <Txt>Circle</Txt>
        </SvgContainer>
        <SvgContainer>
          <Svg height="100" width="200">
            <Line
              x1="200"
              y1="0"
              x2="0"
              y2="100"
              stroke="red"
              strokeWidth="2"
            />
          </Svg>
          <Txt>Line</Txt>
        </SvgContainer>
        <SvgContainer>
          <Svg height="120" width="100">
            <Polygon
              points="50,5 90,80 35,95"
              fill="lime"
              stroke="purple"
              strokeWidth="1"
            />
          </Svg>
          <Txt>Polygon</Txt>
        </SvgContainer>
        <SvgContainer>
          <Svg height="110" width="100">
            <Polyline
              points="10,10 20,20 30,30 40,40 50,80 60,80 70,75 80,70 90,60"
              fill="none"
              stroke="black"
              strokeWidth="3"
            />
          </Svg>
          <Txt>Polyline</Txt>
        </SvgContainer>
        <SvgContainer>
          <Svg height="150" width="300">
            <Defs>
              <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                <Stop offset="0" stopColor="red" stopOpacity="0.3" />
                <Stop offset="1" stopColor="red" stopOpacity="1" />
              </LinearGradient>
            </Defs>
            <Ellipse cx="150" cy="75" rx="75" ry="55" fill="url(#grad)" />
          </Svg>
          <Txt>LinearGradient-Ellipse</Txt>
        </SvgContainer>
      </ScrollView>
    </Container>
  );
};

export default SVGScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #ffffff;
  height: 100%;
`;

const LinkTxt = styled(Txt)`
  color: #2fb7b7;
  padding: 10px;
`;

const SvgContainer = styled.View`
  align-items: center;
  margin: 10px 0;
`;
