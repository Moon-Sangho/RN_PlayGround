import React from 'react';
import styled from '@emotion/native';
import { Text } from 'react-native';
import Animated from 'react-native-reanimated';

const DropdownScreen = () => {
  return (
    <Container>
      <Text>DropdownScreen</Text>
      <Animated.View>
        <Text>123</Text>
      </Animated.View>
    </Container>
  );
};

export default DropdownScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;
