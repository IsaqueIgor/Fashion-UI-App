import React from 'react';
import {StyleSheet, Dimensions, ImageRequireSource} from 'react-native';
import Animated, {add, interpolate, Extrapolate} from 'react-native-reanimated';
import {mixColor, mix, usePanGestureHandler} from 'react-native-redash';
import {Box} from '../../components';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {useSpring} from './Animations';

const {width: wWidth} = Dimensions.get('window');
const width = wWidth * 0.7;
const height = width * (425 / 294);
const borderRadius = 24;

interface CardProps {
  position: Animated.Node<number>;
  onSwipe: () => void;
  source: ImageRequireSource;
  step: number;
}

const Card = ({position, onSwipe, source, step}: CardProps) => {
  const {gestureHandler, translation, state, velocity} = usePanGestureHandler();
  const backgroundColor = mixColor(position, '#C9E9E7', '#74BCB8');
  const scale = mix(position, 1, 0.9);
  const scaleImage = interpolate(position, {
    inputRange: [0, step],
    outputRange: [1.2, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const translateYOffset = mix(position, 0, -50);
  const translateX = useSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-wWidth, 0, wWidth],
    onSnap: ([x]) => x !== 0 && onSwipe(),
  });
  const translateY = add(
    translateYOffset,
    useSpring({
      value: translation.y,
      velocity: translation.y,
      state,
      snapPoints: [0],
      onSnap: () => true,
    }),
  );
  return (
    <Box
      style={StyleSheet.absoluteFill}
      justifyContent="center"
      alignItems="center">
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            backgroundColor,
            width,
            height,
            borderRadius,
            transform: [{translateY}, {translateX}, {scale}],
            overflow: 'hidden',
          }}>
          <Animated.Image
            {...{source}}
            style={{
              ...StyleSheet.absoluteFillObject,
              height: undefined,
              width: undefined,
              transform: [{scale: scaleImage}],
            }}
          />
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

export default Card;
