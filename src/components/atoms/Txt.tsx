import React from 'react';
import styled from '@emotion/native';
import { TextProps } from 'react-native';

export type FontWeight = 'thin' | 'regular' | 'medium' | 'bold';

export type TxtProps = TextProps & {
  children: string;
  color?: string;
  fontSize?: number;
  fontWeight?: FontWeight;
};

const Txt = ({
  children,
  color,
  fontSize,
  fontWeight = 'medium',
  ...props
}: TxtProps) => {
  return (
    <TextContainer
      {...props}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}>
      {children}
    </TextContainer>
  );
};

export default Txt;

const TextContainer = styled.Text<{
  color?: string;
  fontSize?: number;
  fontWeight?: FontWeight;
}>`
  color: ${({ color }) => (color ? color : 'black')};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : `16px`)};
  font-weight: ${({ fontWeight }) => {
    switch (fontWeight) {
      case 'thin':
        return '400';
      case 'regular':
        return '500';
      case 'medium':
        return '600';
      case 'bold':
        return '700';
      default:
        return '500';
    }
  }};
`;
