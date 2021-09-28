import React, { useState } from 'react';
import { LayoutRectangle, View } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useDerivedValue,
} from 'react-native-reanimated';

export interface ScrollAnimationViewProps {
  scroll: Animated.SharedValue<number>;
  windowHeight: number;
  children: (
    progress: Readonly<Animated.SharedValue<number>>,
    scroll: Animated.SharedValue<number>,
    layout: LayoutRectangle | undefined,
  ) => JSX.Element;
  offset?: number;
}

const ScrollAnimationView = ({
  scroll,
  windowHeight,
  children,
  offset = 0,
}: ScrollAnimationViewProps) => {
  const [layout, setLayout] = useState<LayoutRectangle>();

  const progress = useDerivedValue(() => {
    return layout
      ? interpolate(
          scroll.value,
          [layout.y - windowHeight, layout.y - windowHeight + offset],
          [0, 1],
          Extrapolate.CLAMP,
        )
      : 0;
  });

  return (
    <View onLayout={e => setLayout(e.nativeEvent.layout)}>
      {children(progress, scroll, layout)}
    </View>
  );
};

export default ScrollAnimationView;
