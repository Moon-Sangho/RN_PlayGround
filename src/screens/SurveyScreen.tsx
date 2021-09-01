import React from 'react';
import styled from '@emotion/native';
import { SafeAreaView } from 'react-native';
import BackBtn from 'src/components/BackBtn';
import Txt from 'src/components/Txt';

const SurveyScren = () => {
  return (
    <SafeAreaView>
      <BackBtn />
      <Container>
        <Txt>SurveyScren</Txt>
      </Container>
    </SafeAreaView>
  );
};

export default SurveyScren;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;
