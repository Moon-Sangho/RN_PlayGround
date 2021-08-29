import React from 'react';
import styled from '@emotion/native';
import { Text } from 'react-native';

const DropdownScreen = () => {
  return (
    <Container>
      <Text>DropdownScreen</Text>
    </Container>
  );
};

export default DropdownScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;
