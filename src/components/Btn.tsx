import React from 'react';
import styled from '@emotion/native';
import { TouchableOpacityProps } from 'react-native';
import Txt, { FontWeight } from 'src/components/Txt';

type BtnProps = TouchableOpacityProps & {
  children: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: FontWeight;
};

const Btn = ({
  children,
  width,
  height,
  backgroundColor,
  color = '#ffffff',
  fontSize,
  fontWeight,
  ...props
}: BtnProps) => {
  return (
    <Container
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      {...props}>
      <Txt color={color} fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </Txt>
    </Container>
  );
};

export default Btn;

const Container = styled.TouchableOpacity<{
  width?: number;
  height?: number;
  backgroundColor?: string;
}>`
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : '50px')};
  height: ${({ height }) => (height ? `${height}px` : '30px')};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#2fb7b7'};
  margin: 5px;
`;
