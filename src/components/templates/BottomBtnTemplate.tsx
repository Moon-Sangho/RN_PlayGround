import React, { ReactNode, useMemo } from 'react';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { TouchableOpacityProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Btn from 'src/components/atoms/Btn';
import Header from 'src/components/organisms/Header';

type Props = {
  headerTitle: string;
  children: ReactNode;
  bottomBtnBackgroundColor?: string;
  disabled?: boolean;
  showBottomBtn?: boolean;
  btnText?: string;
  btnProps?: TouchableOpacityProps;
  onBackPress?: () => void;
  onClosePress?: () => void;
};

const BottomBtnTemplate = ({
  headerTitle,
  children,
  bottomBtnBackgroundColor = '#313C54',
  disabled = false,
  showBottomBtn = true,
  btnText,
  btnProps,
  onBackPress,
  onClosePress,
}: Props) => {
  const theme = useTheme();
  const backgroundColor = useMemo(() => {
    if (showBottomBtn) {
      return disabled ? `${theme.colors.disabled}` : bottomBtnBackgroundColor;
    } else {
      return `${theme.colors.white}`;
    }
  }, [showBottomBtn, theme, bottomBtnBackgroundColor, disabled]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }} edges={['bottom']}>
      <Container>
        <Header
          title={headerTitle}
          onBackPress={onBackPress}
          onClosePress={onClosePress}
        />
        {children}
      </Container>
      {showBottomBtn && (
        <BottomBtn
          type="bottomBtn"
          backgroundColor={backgroundColor}
          disabled={disabled}
          fontSize={20}
          {...btnProps}>
          {btnText ? btnText : '확인'}
        </BottomBtn>
      )}
    </SafeAreaView>
  );
};

export default BottomBtnTemplate;

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

const BottomBtn = styled(Btn)<{ backgroundColor?: string }>`
  justify-content: center;
  align-items: center;
  height: 44px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
