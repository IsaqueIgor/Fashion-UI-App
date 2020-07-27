import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';

import style from './styles';
import { Text } from '../Theme';

const { width, height } = Dimensions.get('window');
export const SLIDER_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = 75;

interface SlideProps {
  title: string;
  picture: number;
  right?: boolean;
}

const Slide = ({ title, right, picture }: SlideProps) => {
  const transform = [
    { translateY: (SLIDER_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 + 50 : -width / 2 + 50 },
    { rotate: right ? '-90deg' : '90deg' },
  ];

  return (
    <View style={[style.container, { width }]}>
      <View style={[{ ...StyleSheet.absoluteFillObject }, style.underLay]}>
        <Image source={picture} style={style.picture} />
      </View>
      <View style={[style.titleContainer, { transform }]}>
        <Text variant='hero'>{title}</Text>
      </View>
    </View>
  );
};

export default Slide;
