import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useValue, onScrollEvent, interpolateColor } from 'react-native-redash';

import Slide, { SLIDER_HEIGHT } from '../../components/Slider';
import Animated from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDER_HEIGHT,
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
});

const slides = [
  { label: 'Relaxed', color: '#BFEAF5' },
  { label: 'Playful', color: '#beecc4' },
  { label: 'Excentric', color: '#FFE4D9' },
  { label: 'Funky', color: '#ffdddd' },
];

const OnBoarding = () => {
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={(styles.slider, { backgroundColor })}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate='fast'
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map(({ label }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ label }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <View
          style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 75 }}
        />
      </View>
    </View>
  );
};

export default OnBoarding;
