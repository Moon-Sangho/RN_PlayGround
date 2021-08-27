import React, { ReactNode } from 'react';
import styled from '@emotion/native';
import { TextProps } from 'react-native';

export type TxtProps = TextProps & {
  children: ReactNode;
  color?: string;
};

const Txt = ({ children, color, ...props }: TxtProps) => {
  return (
    <TextContainer {...props} color={color}>
      {children}
    </TextContainer>
  );
};

export default Txt;

const TextContainer = styled.Text<{ color?: string }>`
  color: ${({ color }) => (color ? color : 'black')};
`;
