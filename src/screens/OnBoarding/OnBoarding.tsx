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

const { width } = Dimensions.get('window');

const slides = [
  {
    label: 'Relaxed',
    subtitle: 'Find Your Outfits',
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: '#BFEAF5',
    picture: {
      src: require('../../assets/img/peoples/slide_1.png'),
      width: 653,
      height: 772,
    },
  },
  {
    label: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explorer hundreds of outfit ideas!',
    color: '#beecc4',
    picture: {
      src: require('../../assets/img/peoples/slide_2.png'),
      width: 653,
      height: 772,
    },
  },
  {
    label: 'Excentric',
    subtitle: 'Your Style, Your Way',
    description:
      'Create your individual & unique style and look amazing everyday',
    color: '#FFE4D9',
    picture: {
      src: require('../../assets/img/peoples/slide_3.png'),
      width: 653,
      height: 772,
    },
  },
  {
    label: 'Funky',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discover the latest trends in fashion and explore your personality.',
    color: '#ffdddd',
    picture: {
      src: require('../../assets/img/peoples/slide_4.png'),
      width: 653,
      height: 772,
    },
  },
];

const OnBoarding = () => {
  //const x = useValue(0);

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
      <Animated.View style={(styles.slider, { backgroundColor })}>
        {slides.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.5) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View style={[styles.underlay, { opacity }]} key={index}>
              <Image
                source={picture.src}
                style={{
                  width: width - theme.borderRadii.xl,
                  height:
                    ((width - theme.borderRadii.xl) * picture.height) /
                    picture.width,
                }}
              />
            </Animated.View>
          );
        })}
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ label, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ label, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Animated.View style={[styles.footerContent]}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={{
              flexDirection: 'row',
              flex: 1,
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                borderTopLeftRadius: 75,
              }}
            />
          </Animated.View>
        </Animated.View>
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
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii.xl,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderTopLeftRadius: theme.borderRadii.xl,
    overflow: 'hidden',
  },
}));

export default OnBoarding;
