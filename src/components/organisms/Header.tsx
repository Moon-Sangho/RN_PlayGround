import React from 'react';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import Btn from 'src/components/atoms/Btn';
import Txt from 'src/components/atoms/Txt';

type HeaderProps = SafeAreaViewProps & {
  title: string;
  height?: number;
  onBackPress?: () => void;
};

const Header = ({ title, height, onBackPress, ...props }: HeaderProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackNavigator>>();

  return (
    <HeaderContainer height={height} {...props}>
      <Btn
        type="back"
        onPress={onBackPress ? onBackPress : navigation.goBack}
      />
      <Txt fontSize={17}>{title}</Txt>
      <Btn type="close" onPress={() => navigation.navigate('LandingScreen')} />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.SafeAreaView<{
  height?: number;
  marginTop?: number;
}>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${({ height }) => (height ? `${height}px` : `90px`)};
`;
