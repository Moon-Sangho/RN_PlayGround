import React, { useState } from 'react';
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
}

interface SectionProps extends Omit<ScrollAnimationViewProps, 'children'> {
  section: number;
}

// ! 작업 중

const Section1Component = ({ progress }: ComponentProps) => {
  const sectionStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{ translateY: interpolate(progress.value, [0, 1], [80, 0]) }],
    };
  });

  return (
    <Animated.View
      style={[
        {
          height: 700,
          borderWidth: 1,
          borderColor: 'pink',
        },
        sectionStyle,
      ]}>
      <Txt>섹션 1</Txt>
    </Animated.View>
  );
};

const Section2Component = ({ progress }: ComponentProps) => {
  const sectionStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{ translateY: interpolate(progress.value, [0, 1], [80, 0]) }],
    };
  });

  return (
    <Animated.View
      style={[
        { height: 700, borderWidth: 1, borderColor: 'blue' },
        sectionStyle,
      ]}>
      <Txt>섹션 2</Txt>
    </Animated.View>
  );
};

const Section3Component = ({ progress }: ComponentProps) => {
  const sectionStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{ translateY: interpolate(progress.value, [0, 1], [80, 0]) }],
    };
  });

  return (
    <Animated.View
      style={[
        { height: 700, borderWidth: 1, borderColor: 'red' },
        sectionStyle,
      ]}>
      <Txt>섹션 3</Txt>
    </Animated.View>
  );
};

const Section = ({ section, ...props }: SectionProps) => {
  return (
    <ScrollAnimationView {...props}>
      {progress =>
        section === 1 ? (
          <Section1Component progress={progress} />
        ) : section === 2 ? (
          <Section2Component progress={progress} />
        ) : (
          <Section3Component progress={progress} />
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
      onLayout={e => setWindowLayout(e.nativeEvent.layout)}
      style={{
        flex: 1,
        width: windowLayout?.width,
        backgroundColor: 'white',
      }}>
      <Animated.ScrollView onScroll={scrollHandler}>
        <Section
          section={1}
          scroll={scroll}
          windowHeight={windowLayout?.height ?? Dimensions.get('window').height}
          offset={200}
        />
        <Section
          section={2}
          scroll={scroll}
          windowHeight={windowLayout?.height ?? Dimensions.get('window').height}
          offset={200}
        />
        <Section
          section={3}
          scroll={scroll}
          windowHeight={windowLayout?.height ?? Dimensions.get('window').height}
          offset={200}
        />
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default ScrollFadeInScreen;
