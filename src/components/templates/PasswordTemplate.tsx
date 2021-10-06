import React, { useCallback } from 'react';
import styled from '@emotion/native';
import _ from 'lodash';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Txt, { TxtProps } from 'src/components/atoms/Txt';
import NumberPad from 'src/components/organisms/NumberPad';

interface Props {
  value: string;
  description: string;
  onChange: (value: string) => void;
  title?: string;
  error?: string | null;
}

const PasswordTemplate = ({
  value,
  description,
  onChange,
  title,
  error,
}: Props) => {
  const onPress = useCallback(
    (number: number) => {
      const newValue = value.length < 6 ? '' + value + number : value;
      onChange(newValue);
    },
    [value, onChange],
  );

  return (
    <Container>
      <Header style={{ backgroundColor: '#fff' }}>
        <Title>{title || '비밀번호 설정'}</Title>
        <View>
          <Description>{description}</Description>
        </View>
        <DotContainer>
          {_.range(6).map(index => (
            <Dot key={index} active={index < value.length} />
          ))}
        </DotContainer>
        {error && <ErrorText>{error}</ErrorText>}
      </Header>
      <NumberPad
        onChange={onPress}
        onClear={() => onChange('')}
        onBack={() => onChange(value.slice(0, value.length - 1))}
        shuffle={true}
      />
    </Container>
  );
};

export default PasswordTemplate;

const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

const Header = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled((props: TxtProps) => <Txt {...props} fontWeight="bold" />)`
  font-size: 22px;
  color: #121212;
  margin-bottom: 12px;
`;

const Description = styled(Txt)`
  font-size: 14px;
  color: #888888;
  margin-bottom: 56px;
`;

const DotContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 204px;
`;

const Dot = styled.View<{ active: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.main : '#eeeeee'};
`;

const ErrorText = styled(Txt)`
  position: absolute;
  font-size: 14px;
  color: #f50000;
  bottom: 16px;
`;
