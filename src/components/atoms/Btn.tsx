import React from 'react';
import styled from '@emotion/native';
import backBtn from 'assets/images/back-btn.svg';
import closeBtn from 'assets/images/close-btn.svg';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Txt, { FontWeight } from 'src/components/atoms/Txt';

export interface BtnProps extends TouchableOpacityProps {
  type?: 'normal' | 'back' | 'close' | 'bottomBtn';
  children?: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: FontWeight;
}

const Btn = ({
  type = 'normal',
  children,
  width,
  height,
  backgroundColor,
  color = '#ffffff',
  fontSize,
  fontWeight,
  ...props
}: BtnProps) => {
  if (type === 'back') {
    return (
      <SvgContainer type={type} {...props}>
        <SvgXml xml={backBtn} />
      </SvgContainer>
    );
  }

  if (type === 'close') {
    return (
      <SvgContainer type={type} {...props}>
        <SvgXml xml={closeBtn} />
      </SvgContainer>
    );
  }

  if (type === 'bottomBtn') {
    return (
      <TouchableOpacity {...props}>
        <Txt color={color} fontSize={fontSize} fontWeight={fontWeight}>
          {children}
        </Txt>
      </TouchableOpacity>
    );
  }

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

const SvgContainer = styled.TouchableOpacity<{ type: 'back' | 'close' }>`
  ${({ type }) =>
    type === 'back' ? 'padding-left: 24px' : 'padding-right: 24px'};
`;

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
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : `${theme.colors.main}`};
  margin: 5px;
`;
