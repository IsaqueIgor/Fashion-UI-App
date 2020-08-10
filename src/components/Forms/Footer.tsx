import React from 'react';

import SocialLogin from '../SocialLogin';
import {Box, Text} from '..';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer = ({onPress, title, action}: FooterProps) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <TouchableWithoutFeedback onPress={onPress}>
          <Text variant="button" color="white">
            {`${title} `}
          </Text>
          <Text variant="button" color="primary" marginLeft="s">
            {action}
          </Text>
        </TouchableWithoutFeedback>
      </Box>
    </>
  );
};

export default Footer;
