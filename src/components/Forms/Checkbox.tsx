import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import IconFA from 'react-native-vector-icons/FontAwesome';

import { Box, Text } from '../Theme';

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: () => void;
}

const Checkbox = ({ label, onChange, checked }: CheckboxProps) => {

    return (
        <RectButton
            style={{ justifyContent: 'center' }}
            onPress={() => onChange()}>
            <Box
                flexDirection='row'
                alignItems='center'>
                <Box
                    marginRight='m'
                    height={20}
                    width={20}
                    alignItems='center'
                    justifyContent='center'
                    borderRadius='s'
                    borderWidth={StyleSheet.hairlineWidth}
                    borderColor={'primary'}
                    backgroundColor={checked ? 'primary' : 'white'}>
                    <IconFA name='check' color='white' />
                </Box>
                <Text variant='button'>{label}</Text>
            </Box>
        </RectButton>
    );
}


export default Checkbox;