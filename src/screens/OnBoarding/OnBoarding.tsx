import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { interpolateColor, useScrollHandler } from 'react-native-redash';
import Animated, {
  divide,
  Extrapolate,
  interpolate,
  multiply,
} from 'react-native-reanimated';

import Slide, { SLIDER_HEIGHT } from '../../components/Slider';
import { useTheme, makeStyles } from '../../components';

import Dot from '../../components/Dot';
import { Theme } from '../../components/Theme';
import Subslide from './SubSlider';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: 1,
    title: 'Relaxed',
    color: '#BFEAF5',
    subTitle: 'Find Your OutFits',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem minusiure atque consectetur omnis  illo ',
    picture: require('../../assets/img/peoples/slide_1.png'),
  },
  {
    id: 2,
    title: 'Playful',
    color: '#BEECC4',
    subTitle: 'Hear it First, Wear it First',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem minusiure atque consectetur omnis  illo',
    picture: require('../../assets/img/peoples/slide_2.png'),
  },
  {
    id: 3,
    title: 'Excentric',
    color: '#ffe4d9',
    subTitle: 'Your style, Your Way',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem minusiure atque consectetur omnis  illo',
    picture: require('../../assets/img/peoples/slide_3.png'),
  },
  {
    id: 4,
    title: 'Funky',
    color: '#ffdddd',
    subTitle: 'Look Good, Feel Good',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem minusiure atque consectetur omnis  illo',
    picture: require('../../assets/img/peoples/slide_4.png'),
  },
];

const OnBoarding = () => {
  const scrollRef = useRef<Animated.ScrollView>(null);

  const theme = useTheme();
  const styles = useStyles();

  const scroll = useRef<Animated.ScrollView>(null);

  const { scrollHandler, x } = useScrollHandler();

  //const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          {...scrollHandler}
          snapToInterval={width}
          decelerationRate='fast'
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
        >
          {slides.map(({ title, id, picture }, i) => (
            <Slide title={title} right={!!(i % 2)} key={id} picture={picture} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={[styles.footer]}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor,
          }}
        />

        <View
          style={[
            {
              ...StyleSheet.absoluteFillObject,
            },
            styles.indicatorContainer,
          ]}
        >
          {slides.map(({ id }, i) => (
            <Dot key={id} index={i} currentIndex={divide(x, width)} />
          ))}
        </View>

        <View
          style={{
            flex: 1,
            width: width,
            flexDirection: 'row',
            borderTopLeftRadius: theme.borderRadii.xl,
            backgroundColor: 'white',
            overflow: 'hidden',
          }}
        >
          <Animated.View
            style={[
              styles.overlay,
              {
                width: width * slides.length,
                transform: [{ translateX: multiply(x, -1) }],
              },
            ]}
          >
            {slides.map(({ subTitle, description, id }, i) => {
              const last = i === slides.length - 1;
              return (
                <Subslide
                  key={id}
                  last={last}
                  {...{ subTitle, description }}
                  onPress={() => {}}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDER_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.xl,
    backgroundColor: 'cyan',
  },
  overlay: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  footer: {
    flex: 1,
  },
  indicatorContainer: {
    left: 50,
    height: 80,
    zIndex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default OnBoarding;
