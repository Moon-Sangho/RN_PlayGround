import React from 'react';
import styled from '@emotion/native';
import { Text } from 'react-native';

const ChartScreen = () => {
  return (
    <Container>
      <Text>ChartScreen</Text>
    </Container>
  );
};

export default ChartScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;
