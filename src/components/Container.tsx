
import React, { ReactNode } from 'react';
import {
    Dimensions, Image, StatusBar, StyleSheet
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Box, useTheme } from './Theme';


export const assets = [require('../assets/img/patterns/bg_pattern_1.png')];

const { width } = Dimensions.get('window');
const aspectRatio = 1500 / 1000;
const height = width / aspectRatio;

interface ContainerProps {
    children: ReactNode;
    footer: ReactNode;
}

const Container = ({ children, footer }: ContainerProps) => {
    const insets = useSafeAreaInsets();
    const theme = useTheme();
    return (
        <Box
            flex={1}
            backgroundColor='secondary' >
            <StatusBar barStyle='light-content' />
            <Box backgroundColor='white'>
                <Box
                    borderBottomLeftRadius='xl'
                    overflow='hidden'
                    height={height * 0.61}>
                    <Image source={assets[0]} style={{
                        width,
                        height,
                        borderBottomLeftRadius: theme.borderRadii.xl
                    }} />
                </Box>
            </Box>
            <Box flex={1} >
                <Box
                    overflow='hidden'
                    flex={1}
                    borderBottomLeftRadius='xl'
                    height={height * 0.61}>
                    <Image source={assets[0]} style={{
                        ...StyleSheet.absoluteFillObject,
                        width,
                        height,
                        top: -height * 0.61
                    }} />
                    <Box
                        flex={1}
                        borderRadius='xl'
                        borderTopLeftRadius={0}
                        backgroundColor='white'
                    >
                        {children}
                    </Box>
                </Box>
                <Box
                    backgroundColor='secondary'
                    paddingTop='m'
                >
                    {footer}
                    <Box height={insets.bottom} />
                </Box>
            </Box>
        </Box >
    );
}


export default Container;
