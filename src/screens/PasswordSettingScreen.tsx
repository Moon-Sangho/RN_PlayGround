import React, { useContext, useEffect, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import PasswordTemplate from 'src/components/templates/PasswordTemplate';
import { AppContext } from 'src/contexts/AppContext';

type Props = StackScreenProps<RootStackNavigator, 'PasswordSettingScreen'>;

const PasswordSettingScreen = ({ navigation }: Props) => {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState<
    undefined | boolean
  >(undefined);
  const { setUser } = useContext(AppContext);

  useEffect(() => {
    const showConfirmModal = () => {
      navigation.navigate('AlertModalScreen', {
        title: '비밀번호가 설정되었습니다.',
        buttons: [
          {
            content: '확인',
            onPress: $navigation => {
              $navigation.navigate('LandingScreen');
            },
          },
        ],
      });
    };

    if (password.length === 6 && password === repeatPassword) {
      setIsPasswordCorrect(true);
      setUser({ password });
      showConfirmModal();
    }

    if (repeatPassword.length === 6 && password !== repeatPassword) {
      setIsPasswordCorrect(false);
      setRepeatPassword('');
    }
  }, [
    navigation,
    password,
    repeatPassword,
    setUser,
    setRepeatPassword,
    setIsPasswordCorrect,
  ]);

  if (password.length !== 6) {
    return (
      <PasswordTemplate
        value={password}
        description="비밀번호를 입력하세요"
        onChange={setPassword}
      />
    );
  }

  return (
    <PasswordTemplate
      value={repeatPassword}
      title="비밀번호 확인"
      description="비밀번호를 다시 한 번 입력해주세요"
      onChange={setRepeatPassword}
      error={
        isPasswordCorrect === false ? '비밀번호가 일치하지 않습니다' : null
      }
    />
  );
};

export default PasswordSettingScreen;
