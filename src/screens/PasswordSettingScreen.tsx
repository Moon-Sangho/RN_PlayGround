import React from 'react';
import styled from '@emotion/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NumberPad from 'src/components/organisms/NumberPad';

// ! 작업 중

const PasswordSettingScreen = () => {
  const onPress = (value = 1) => {
    console.log(value);
  };

  const onClear = () => {};

  const onBack = () => {};

  return (
    <Container edges={['bottom']}>
      <NumberPad
        onChange={onPress}
        onClear={onClear}
        onBack={onBack}
        shuffle={true}
      />
    </Container>
  );
};

export default PasswordSettingScreen;

const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;
