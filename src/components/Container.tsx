import React, {ReactNode} from 'react';
import {Dimensions, Image, StatusBar, StyleSheet, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Box, useTheme} from './Theme';
import {Pattern1, Pattern2} from '../assets/img';

const {width, height: wHeight} = Dimensions.get('window');
const aspectRatio = 1500 / 1000;
const height = width * aspectRatio;

interface ContainerProps {
  children: ReactNode;
  footer?: ReactNode;
  pattern: 0 | 1 | 2;
}
const assets = [Pattern1, Pattern2];

const Container = ({children, footer, pattern}: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const asset = assets[pattern];
  return (
    <KeyboardAwareScrollView
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}>
      <Box
        height={
          wHeight +
          (Platform.OS === 'android' ? (StatusBar.currentHeight ? 1 : 0) : 0)
        }
        backgroundColor="secondary">
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.61}>
            <Image
              source={asset}
              style={{
                width,
                height,
                borderBottomLeftRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>
        <Box flex={1}>
          <Box
            overflow="hidden"
            flex={1}
            borderBottomLeftRadius="xl"
            height={height * 0.61}>
            <Image
              source={asset}
              style={{
                ...StyleSheet.absoluteFillObject,
                width,
                height,
                borderBottomLeftRadius: theme.borderRadii.xl,
                top: -height * 0.61,
              }}
            />
            <Box
              flex={1}
              borderRadius="xl"
              borderTopLeftRadius={0}
              backgroundColor="white"
              justifyContent="center"
              padding="l">
              {children}
            </Box>
          </Box>
          <Box backgroundColor="secondary" paddingTop="m">
            {footer}
            <Box height={insets.bottom} />
          </Box>
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Container;
