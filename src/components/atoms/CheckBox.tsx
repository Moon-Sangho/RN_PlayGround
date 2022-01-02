import React from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { Line, Rect } from 'react-native-svg';

import { useTheme } from '@emotion/react';

interface Props {
  isChecked: boolean;
  color: string;
  onPress: () => void;
}

const Checkbox = ({ isChecked, color, onPress }: Props) => {
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      {isChecked ? (
        <Svg width="25" height="25">
          <Rect x={5} y={5} width={17} height={17} fill={color} rx={3} />
          <Line
            x1={9}
            y1={14}
            x2={13}
            y2={17}
            stroke={theme.colors.white}
            strokeWidth={2.5}
            strokeLinecap="round"
          />
          <Line
            x1={13}
            y1={17}
            x2={18}
            y2={11}
            stroke={theme.colors.white}
            strokeWidth={2.5}
            strokeLinecap="round"
          />
        </Svg>
      ) : (
        <Svg width="25" height="25">
          <Rect
            x={6}
            y={6}
            width={15}
            height={15}
            rx={3}
            stroke={color}
            strokeWidth={2}
          />
        </Svg>
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;
