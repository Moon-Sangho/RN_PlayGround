import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { Line, Rect } from 'react-native-svg';

import styled from '@emotion/native';

const CheckboxScreen = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <Container>
      <TouchableOpacity onPress={() => setIsChecked(prevState => !prevState)}>
        {isChecked ? (
          <Svg width="25" height="25">
            <Rect x={2} y={2} width={19} height={19} fill="#889EF0" rx={5} />
            <Line
              x1={7}
              y1={11}
              x2={11}
              y2={15}
              stroke="white"
              strokeWidth={2.5}
              strokeLinecap="round"
            />
            <Line
              x1={11}
              y1={15}
              x2={16}
              y2={8}
              stroke="white"
              strokeWidth={2.5}
              strokeLinecap="round"
            />
          </Svg>
        ) : (
          <Svg width="25" height="25">
            <Rect
              x={3}
              y={3}
              width={17}
              height={17}
              rx={5}
              stroke="#889ef0"
              strokeWidth={2}
            />
          </Svg>
        )}
      </TouchableOpacity>
    </Container>
  );
};

export default CheckboxScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;
