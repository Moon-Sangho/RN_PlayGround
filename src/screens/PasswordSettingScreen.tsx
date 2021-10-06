import React, { useState } from 'react';
import styled from '@emotion/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PasswordTemplate from 'src/components/templates/PasswordTemplate';

// ! 작업 중

const PasswordSettingScreen = () => {
  const [password, setPassword] = useState('');
  return (
    <Container edges={['bottom']}>
      <PasswordTemplate
        value={password}
        description="비밀번호를 입력하세요"
        onChange={setPassword}
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
