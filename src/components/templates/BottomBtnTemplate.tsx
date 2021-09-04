import React, { ReactNode, useMemo } from 'react';
import styled from '@emotion/native';
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
}: Props) => {
  const backgroundColor = useMemo(() => {
    if (showBottomBtn) {
      return disabled ? '#A8A8A8' : bottomBtnBackgroundColor;
    } else {
      return '#fff';
    }
  }, [showBottomBtn, bottomBtnBackgroundColor, disabled]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }} edges={['bottom']}>
      <Container>
        <Header title={headerTitle} onBackPress={onBackPress} />
        {children}
      </Container>
      {showBottomBtn ? (
        <BottomBtn
          type="bottomBtn"
          backgroundColor={backgroundColor}
          disabled={disabled}
          fontSize={20}
          {...btnProps}>
          {btnText ? btnText : '확인'}
        </BottomBtn>
      ) : null}
    </SafeAreaView>
  );
};

export default BottomBtnTemplate;

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const BottomBtn = styled(Btn)<{ backgroundColor?: string }>`
  justify-content: center;
  align-items: center;
  height: 44px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
