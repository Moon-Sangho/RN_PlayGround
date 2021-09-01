import React from 'react';
import styled from '@emotion/native';
import { SafeAreaView } from 'react-native';
import Txt from 'src/components/Txt';

const SurveyScreen = () => {
  return (
    <SafeAreaView>
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
