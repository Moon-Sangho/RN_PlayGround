import React, { useMemo } from 'react';
import styled from '@emotion/native';
import _ from 'lodash';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Txt from 'src/components/atoms/Txt';

interface Props {
  onChange: (value: number) => void;
  onClear: () => void;
  onBack: () => void;
  style?: StyleProp<ViewStyle>;
  shuffle?: boolean;
}

const NumberPad = ({ onChange, onClear, onBack, style, shuffle }: Props) => {
  const numbers = useMemo(() => _.range(1, 10), []);
  const shuffled = useMemo(
    () => (shuffle ? _.shuffle(numbers) : numbers),
    [numbers, shuffle],
  );
  const chunks = useMemo(() => _.chunk(shuffled, 3), [shuffled]);

  return (
    <Container style={style}>
      {chunks.map((chunk, index) => (
        <NumberPadRow key={index}>
          {chunk.map(number => (
            <NumberButton key={number}>
              <NumberContent>{number}</NumberContent>
            </NumberButton>
          ))}
        </NumberPadRow>
      ))}
      <NumberPadRow>
        <NumberButton onPress={onClear}>
          <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <Path d="M1 1L17 17" stroke="#000000" strokeWidth="2.5" />
            <Path d="M1 17L17 1" stroke="#000000" strokeWidth="2.5" />
          </Svg>
        </NumberButton>
        <NumberButton onPress={() => onChange(0)}>
          <NumberContent>0</NumberContent>
        </NumberButton>
        <NumberButton onPress={onBack}>
          <Svg width="24" height="20" viewBox="0 0 24 20" fill="none">
            <Path
              d="M10 18.4998L2 9.99996M2 9.99996L10 1.49976M2 9.99996H23"
              stroke="#000000"
              strokeWidth="2.5"
            />
          </Svg>
        </NumberButton>
      </NumberPadRow>
    </Container>
  );
};

export default NumberPad;

const Container = styled.View`
  padding: 0 32px;
`;

const NumberPadRow = styled.View`
  flex-direction: row;
  width: 100%;
`;

const NumberButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  padding: 20px 0;
`;

const NumberContent = styled(Txt)`
  font-size: 28px;
  font-weight: 500;
`;
