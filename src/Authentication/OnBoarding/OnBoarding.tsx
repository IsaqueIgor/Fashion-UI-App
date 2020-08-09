import React, {useRef} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';

import {interpolateColor, useScrollHandler} from 'react-native-redash';
import Animated, {
  divide,
  Extrapolate,
  interpolate,
  multiply,
} from 'react-native-reanimated';

import Slide, {SLIDE_HEIGHT} from './Slide';
import SubSlide from './SubSlide';
import Dot from './Dot';

import {useTheme, makeStyles} from '../../components';
import {Routes, StackNavigationProps} from '../../components/Navigation';
import {Theme} from '../../components/Theme';

const {width} = Dimensions.get('window');

const slides = [
  {
    title: 'Relaxed',
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
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explorer hundreds of outfit ideas!',
    color: '#BEECC4',
    picture: {
      src: require('../../assets/img/peoples/slide_2.png'),
      width: 653,
      height: 772,
    },
  },
  {
    title: 'Excentric',
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
    title: 'Funky',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discover the latest trends in fashion and explore your personality.',
    color: '#FFDDDD',
    picture: {
      src: require('../../assets/img/peoples/slide_4.png'),
      width: 653,
      height: 772,
    },
  },
];

const OnBoarding = ({
  navigation,
}: StackNavigationProps<Routes, 'OnBoarding'>) => {
  const theme = useTheme();
  const styles = useStyles();

  const scroll = useRef<Animated.ScrollView>(null);

  //const x = useValue(0);
  //const onScroll = onScrollEvent({ x });

  const {scrollHandler, x} = useScrollHandler();

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });

  return (
    <>
      <View style={styles.container}>
        <Animated.View style={[styles.slider, {backgroundColor}]}>
          {slides.map(({picture}, index) => {
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
              <Animated.View style={[styles.underlay, {opacity}]} key={index}>
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
            {...scrollHandler}>
            {slides.map(({title, picture}, index) => (
              <Slide key={index} right={!!(index % 2)} {...{title, picture}} />
            ))}
          </Animated.ScrollView>
        </Animated.View>
        <View style={styles.footer}>
          <Animated.View
            style={{...StyleSheet.absoluteFillObject, backgroundColor}}
          />
          <Animated.View style={[styles.footerContent]}>
            <View style={styles.pagination}>
              {slides.map((_, index) => (
                <Dot key={index} currentIndex={divide(x, width)} {...{index}} />
              ))}
            </View>
            <Animated.View
              style={{
                flexDirection: 'row',
                flex: 1,
                width: width * slides.length,
                transform: [{translateX: multiply(x, -1)}],
              }}>
              {slides.map(({subtitle, description}, index) => {
                const last = index === slides.length - 1;

                return (
                  <SubSlide
                    onPress={() => {
                      if (last) {
                        navigation.navigate('Welcome');
                      } else {
                        scroll.current
                          ?.getNode()
                          .scrollTo({x: width * (index + 1), animated: true});
                      }
                    }}
                    key={index}
                    {...{subtitle, description, x, last}}
                  />
                );
              })}
            </Animated.View>
          </Animated.View>
        </View>
      </View>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
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
