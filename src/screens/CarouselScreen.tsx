import React from 'react';
import styled from '@emotion/native';
import Txt from 'src/components/atoms/Txt';

const CarouselScreen = () => {
  return (
    <Container>
      <Txt>CarouselScreen</Txt>
    </Container>
  );
};

export default CarouselScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;
