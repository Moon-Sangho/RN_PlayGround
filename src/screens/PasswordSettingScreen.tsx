import React from 'react';
import styled from '@emotion/native';
import Txt from 'src/components/atoms/Txt';

const PasswordSettingScreen = () => {
  return (
    <Container>
      <Txt>Password Setting Screen</Txt>
    </Container>
  );
};

export default PasswordSettingScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;
