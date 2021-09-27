import React from 'react';
import styled from '@emotion/native';
import Txt from 'src/components/atoms/Txt';

const ScrollFadeInScreen = () => {
  return (
    <Container>
      <Txt>Scroll Fade-In</Txt>
    </Container>
  );
};

export default ScrollFadeInScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;
