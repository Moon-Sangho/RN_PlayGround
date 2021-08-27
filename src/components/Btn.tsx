import React from 'react';
import styled from '@emotion/native';
import { TouchableOpacityProps } from 'react-native';
import Txt from 'src/components/Txt';

type BtnProps = TouchableOpacityProps & {
  children: string;
  color?: string;
  backgroundColor?: string;
  width?: number;
  height?: number;
};

const Btn = ({
  children,
  width,
  height,
  backgroundColor,
  color,
  ...props
}: BtnProps) => {
  return (
    <Container
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      {...props}>
      <Txt color={color}>{children}</Txt>
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
  width: ${({ width }) => (width ? width : '50px')};
  height: ${({ height }) => (height ? height : '30px')};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#2fb7b7'};
`;
