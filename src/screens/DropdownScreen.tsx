import React, { useState } from 'react';
import styled from '@emotion/native';
import dropdownArrow from 'assets/images/dropdown-arrow.svg';
import { ScrollView } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { SvgXml } from 'react-native-svg';
import Txt from 'src/components/atoms/Txt';

const Card = () => {
  const [height, setHeight] = useState(0);
  const show = useSharedValue(false);
  const [isPressed, setIsPressed] = useState(false);

  const dropdownStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(show.value ? height : 0, {
        duration: 200,
      }),
      overflow: 'hidden',
    };
  }, [height]);

  const arrowStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: show.value ? '180deg' : '0deg' }],
    };
  });

  return (
    <Wrapper>
      <CardContainer
        onPress={() => {
          show.value = !show.value;
          setIsPressed(prevState => !prevState);
        }}
        isPressed={isPressed}>
        <Txt>Show Contents</Txt>
        <Animated.View style={arrowStyle}>
          <SvgXml xml={dropdownArrow} />
        </Animated.View>
      </CardContainer>
      <Animated.View style={dropdownStyle}>
        <Contents onLayout={e => setHeight(e.nativeEvent.layout.height)}>
          <ContentText>Contents</ContentText>
          <ContentText>Contents</ContentText>
          <ContentText>Contents</ContentText>
          <ContentText>Contents</ContentText>
          <ContentText>Contents</ContentText>
        </Contents>
      </Animated.View>
    </Wrapper>
  );
};

const DropdownScreen = () => {
  return (
    <Container>
      <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </Container>
  );
};

export default DropdownScreen;

const Wrapper = styled.View`
  margin: 5px 0;
`;

const CardContainer = styled.TouchableOpacity<{ isPressed: boolean }>`
  width: 320px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  border: ${({ theme }) => `1px solid ${theme.colors.deepGray}`};
  border-radius: 7px;
  ${({ isPressed }) =>
    isPressed
      ? `border-bottom-width: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px`
      : ``};
`;

const Contents = styled.View`
  position: absolute;
  align-items: flex-end;
  width: 100%;
  border: ${({ theme }) => `0.5px solid ${theme.colors.deepGray}`};
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  padding-right: 24px;
`;

const ContentText = styled(Txt)`
  margin: 5px 0;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;
