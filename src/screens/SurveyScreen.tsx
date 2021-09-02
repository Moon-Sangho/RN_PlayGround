import React from 'react';
import styled from '@emotion/native';
import Txt from 'src/components/atoms/Txt';
import Header from 'src/components/organisms/Header';
import BottomBtnTemplate from 'src/components/templates/BottomBtnTemplate';

const SurveyScreen = () => {
  const onPress = () => {
    console.log('test');
  };

  return (
    <BottomBtnTemplate btnProps={{ onPress }}>
      <Header title="설문조사" />
      <Container>
        <Txt>설문조사 화면</Txt>
      </Container>
    </BottomBtnTemplate>
  );
};

export default SurveyScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;
