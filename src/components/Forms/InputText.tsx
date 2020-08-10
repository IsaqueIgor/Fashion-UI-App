import React, {forwardRef, Ref} from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import IconFE from 'react-native-vector-icons/Feather';

import {Box, useTheme, RoundedIcon} from '../../components';

IconFE.loadFont();

interface TextInputProps extends RNTextInputProps {
  icon: string;
  touched?: boolean;
  error?: string;
}

const TextInput = forwardRef(
  ({icon, touched, error, ...props}: TextInputProps, ref: Ref<RNTextInput>) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2.5;
    const reColor = !touched ? 'text' : error ? 'danger' : 'primary';
    const color = theme.colors[reColor];

    return (
      <Box
        flexDirection="row"
        height={48}
        borderWidth={1}
        borderRadius="s"
        borderColor={reColor}
        alignItems="center"
        padding="s">
        <Box padding="s">
          <IconFE name={icon} size={16} {...{color}} />
        </Box>
        <Box flex={1}>
          <RNTextInput
            underlineColorAndroid="transparent"
            placeholderTextColor={color}
            {...props}
            {...{ref}}
          />
        </Box>
        {touched && (
          <RoundedIcon
            name={!error ? 'check' : 'x'}
            backgroundColor={!error ? 'primary' : 'danger'}
            size={SIZE}
            color="white"
          />
        )}
      </Box>
    );
  },
);

export default TextInput;
