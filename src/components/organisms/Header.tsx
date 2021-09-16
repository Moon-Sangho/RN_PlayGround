import React from 'react';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Platform } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import Btn from 'src/components/atoms/Btn';
import ProgressBar from 'src/components/atoms/ProgressBar';
import Txt from 'src/components/atoms/Txt';

type HeaderProps = SafeAreaViewProps & {
  title: string;
  percent?: number;
  showProgressBar?: boolean;
  onBackPress?: () => void;
  onClosePress?: () => void;
};

const Header = ({
  title,
  percent = 0,
  showProgressBar = false,
  onBackPress,
  onClosePress,
  ...props
}: HeaderProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackNavigator>>();

  return (
    <>
      <Container
        style={{ height: Platform.select({ ios: 100, android: 60 }) }}
        {...props}>
        <Btn
          type="back"
          onPress={onBackPress ? onBackPress : navigation.goBack}
        />
        <Txt fontSize={17}>{title}</Txt>
        <Btn
          type="close"
          onPress={
            onClosePress
              ? onClosePress
              : () => navigation.navigate('LandingScreen')
          }
        />
      </Container>
      {showProgressBar && <ProgressBar percent={percent} />}
    </>
  );
};

export default Header;

const Container = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
