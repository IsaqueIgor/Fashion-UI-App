import React from 'react';
import { View, Text, Dimensions } from 'react-native';

import style from './styles';

const { width, height } = Dimensions.get('window');
export const SLIDER_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = 75;

interface SlideProps {
  label: string;
  right?: boolean;
}

const Slide = ({ label, right }: SlideProps) => {
  const transform = [
    { translateY: (SLIDER_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 + 50 : -width / 2 + 50 },
    { rotate: right ? '-90deg' : '90deg' },
  ];

  return (
    <View style={style.container}>
      <View style={[style.titleContainer, { transform }]}>
        <Text style={style.title}>{label}</Text>
      </View>
    </View>
  );
};

export default Slide;
