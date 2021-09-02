import React from 'react';
import styled from '@emotion/native';
import { SafeAreaView } from 'react-native';
import Header from 'src/components/Header';
import Txt from 'src/components/Txt';

const SurveyScreen = () => {
  return (
    <SafeAreaView>
      <Header title="설문조사" />
      <Container>
        <Txt>SurveyScren</Txt>
      </Container>
    </SafeAreaView>
  );
};

export default SurveyScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;
