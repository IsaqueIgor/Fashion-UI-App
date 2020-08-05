import React from 'react';
import {
    Image,
    Dimensions
} from 'react-native';
import { Routes, StackNavigationProps } from '../../components/Navigation';
import { Button } from '../../components';
import { Box, Text, useTheme } from '../../components/Theme';

const picture = {
    src: require('../../assets/img/peoples/slide_4.png'),
    width: 653,
    height: 772
}

const { width } = Dimensions.get('window');

const Welcome = ({ navigation }: StackNavigationProps<Routes, 'Welcome'>) => {
    const theme = useTheme();
    return (
        <Box
            flex={1}
            backgroundColor='white' >
            <Box
                flex={1}
                borderBottomRightRadius='xl'
                backgroundColor='gray'
                alignItems='center'
                justifyContent='flex-end' >
                <Image source={picture.src}
                    style={{
                        width: width - theme.borderRadii.xl,
                        height: ((width - theme.borderRadii.xl)
                            * picture.height) / picture.width
                    }} />
            </Box>
            <Box flex={1} borderTopLeftRadius='xl'>
                <Box
                    backgroundColor='gray'
                    position='absolute'
                    top={0}
                    bottom={0}
                    right={0}
                    left={0} >
                </Box>
                <Box
                    flex={1}
                    backgroundColor='white'
                    borderTopLeftRadius='xl'
                    justifyContent='space-evenly'
                    alignItems='center'
                    padding='xl' >
                    <Text variant='title2'>Let's get started!</Text>
                    <Text variant='body' textAlign='center'>Login to your account below or sign up for amazing experience</Text>
                    <Button
                        variant='primary'
                        label='Have an account? Login'
                        onPress={() => navigation.navigate('Login')}
                    />
                    <Button
                        label={'Join us, it\'s free'}
                        onPress={() => true} />
                    <Button
                        variant='transparent'
                        label='Forgot Password?'
                        onPress={() => true} />
                </Box>
            </Box>

        </Box>

    );
}
export default Welcome;