import React from 'react';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import backBtn from 'assets/images/back-btn.svg';
import closeBtn from 'assets/images/close-btn.svg';
import { TouchableOpacityProps } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Txt, { FontWeight } from 'src/components/Txt';

type BtnProps = TouchableOpacityProps & {
  type?: 'normal' | 'back' | 'close';
  children?: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: FontWeight;
};

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
  const navigation = useNavigation<StackNavigationProp<RootStackNavigator>>();

  if (type === 'back') {
    return (
      <SvgContainer type={type} onPress={navigation.goBack} {...props}>
        <SvgXml xml={backBtn} />
      </SvgContainer>
    );
  }

  if (type === 'close') {
    return (
      <SvgContainer
        type={type}
        onPress={() => navigation.navigate('LandingScreen')}
        {...props}>
        <SvgXml xml={closeBtn} />
      </SvgContainer>
    );
  }

  return (
    <Container
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      {...props}>
      <Txt color={color} fontSize={fontSize} fontWeight={fontWeight}>
        {children ? children : ''}
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

const SvgContainer = styled.TouchableOpacity<{ type: 'back' | 'close' }>`
  ${({ type }) =>
    type === 'back' ? 'padding-left: 24px' : 'padding-right: 24px'};
`;
