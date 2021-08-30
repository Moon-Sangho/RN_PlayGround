import React from 'react';
import styled from '@emotion/native';
import { Text } from 'react-native';

const SVGScreen = () => {
  return (
    <Container>
      <Text>SVGScreen</Text>
    </Container>
  );
};

export default SVGScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;
