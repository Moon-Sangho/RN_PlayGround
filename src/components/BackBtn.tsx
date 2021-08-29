import React from 'react';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import backBtn from 'assets/images/back-btn.svg';
import { SvgXml } from 'react-native-svg';

const BackBtn = () => {
  const navigation = useNavigation();

  return (
    <Container onPress={navigation.goBack}>
      <SvgXml xml={backBtn} />
    </Container>
  );
};

export default BackBtn;

const Container = styled.TouchableOpacity`
  padding-left: 24px;
`;
