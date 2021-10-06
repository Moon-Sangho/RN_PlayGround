import React, { useEffect } from 'react';
import styled from '@emotion/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

interface Props {
  percent: number;
}

const ProgressBar = ({ percent }: Props) => {
  const width = useSharedValue(percent);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: width.value + '%',
    };
  });

  useEffect(() => {
    width.value = withSpring(percent, {
      damping: 20,
      stiffness: 100,
    });
  }, [width, percent]);

  return (
    <Container>
      <Progress style={animatedStyles} />
    </Container>
  );
};

export default ProgressBar;

const Container = styled.View`
  width: 100%;
  height: 4px;
  background-color: #f0f0f0;
`;

const Progress = styled(Animated.View)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.main};
`;
