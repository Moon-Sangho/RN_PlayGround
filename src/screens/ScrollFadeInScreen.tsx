import React, { useState } from 'react';
import styled from '@emotion/native';
import { Dimensions, LayoutRectangle } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Txt from 'src/components/atoms/Txt';
import ScrollAnimationView, {
  ScrollAnimationViewProps,
} from 'src/components/organisms/ScrollAnimationView';

interface ComponentProps {
  progress: Readonly<Animated.SharedValue<number>>;
  windowHeight?: number;
}

interface SectionProps extends Omit<ScrollAnimationViewProps, 'children'> {
  section: number;
}

const Section1Component = ({ progress, windowHeight }: ComponentProps) => {
  const sectionStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{ translateY: interpolate(progress.value, [0, 1], [80, 0]) }],
    };
  });

  return (
    <SectionView
      style={sectionStyle}
      backgroundColor="lightgreen"
      windowHeight={windowHeight}>
      <Txt>섹션 1</Txt>
    </SectionView>
  );
};

const Section2Component = ({ progress, windowHeight }: ComponentProps) => {
  const sectionStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{ translateY: interpolate(progress.value, [0, 1], [80, 0]) }],
    };
  });

  return (
    <SectionView
      style={sectionStyle}
      backgroundColor="skyblue"
      windowHeight={windowHeight}>
      <Txt>섹션 2</Txt>
    </SectionView>
  );
};

const Section3Component = ({ progress, windowHeight }: ComponentProps) => {
  const sectionStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{ translateY: interpolate(progress.value, [0, 1], [80, 0]) }],
    };
  });

  return (
    <SectionView
      style={sectionStyle}
      backgroundColor="pink"
      windowHeight={windowHeight}>
      <Txt>섹션 3</Txt>
    </SectionView>
  );
};

const Section = ({ section, ...props }: SectionProps) => {
  const { windowHeight } = props;

  return (
    <ScrollAnimationView {...props}>
      {progress =>
        section === 1 ? (
          <Section1Component progress={progress} windowHeight={windowHeight} />
        ) : section === 2 ? (
          <Section2Component progress={progress} windowHeight={windowHeight} />
        ) : (
          <Section3Component progress={progress} windowHeight={windowHeight} />
        )
      }
    </ScrollAnimationView>
  );
};

const ScrollFadeInScreen = () => {
  const scroll = useSharedValue(0);
  const [windowLayout, setWindowLayout] = useState<LayoutRectangle>();

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      scroll.value = e.contentOffset.y;
    },
  });

  return (
    <SafeAreaView
      edges={['bottom']}
      onLayout={e => setWindowLayout(e.nativeEvent.layout)}
      style={{
        width: windowLayout?.width,
        backgroundColor: 'white',
      }}>
      <Animated.ScrollView onScroll={scrollHandler} scrollEventThrottle={16}>
        <Main>
          <Txt>메인</Txt>
        </Main>
        <Section
          section={1}
          scroll={scroll}
          windowHeight={windowLayout?.height ?? Dimensions.get('window').height}
          offset={500}
        />
        <Section
          section={2}
          scroll={scroll}
          windowHeight={windowLayout?.height ?? Dimensions.get('window').height}
          offset={500}
        />
        <Section
          section={3}
          scroll={scroll}
          windowHeight={windowLayout?.height ?? Dimensions.get('window').height}
          offset={500}
        />
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default ScrollFadeInScreen;

const Main = styled.View`
  height: 700px;
  background-color: lightslategray;
  justify-content: center;
  align-items: center;
`;

const SectionView = styled(Animated.View)<{
  windowHeight?: number;
  backgroundColor: string;
}>`
  height: ${({ windowHeight }) => `${windowHeight}px`};
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
