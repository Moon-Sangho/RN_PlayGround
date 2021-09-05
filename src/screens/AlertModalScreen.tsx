import React from 'react';
import styled from '@emotion/native';
import { StackScreenProps } from '@react-navigation/stack';
import { LogBox } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AlertModal from 'src/components/organisms/AlertModal';

type Props = StackScreenProps<RootStackNavigator, 'AlertModalScreen'>;

const AlertModalScreen = ({ navigation, route }: Props) => {
  return (
    <Container>
      <Touchable activeOpacity={1} onPress={() => navigation.goBack()} />
      <AlertModal {...route.params} />
    </Container>
  );
};

export default AlertModalScreen;

const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

const Touchable = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`;

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
