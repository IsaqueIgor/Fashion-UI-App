import React, {ReactNode} from 'react';
import {Image} from 'react-native';
import {Box, useTheme, makeStyles, Theme} from './Theme';

import {GoogleIcon, FacebookIcon, AppleIcon} from '../assets/img';

interface SocialIconProps {
  children: ReactNode;
}

const SocialIcon = ({children}: SocialIconProps) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.l * 2;

  return (
    <Box
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      marginHorizontal="s"
      justifyContent="center"
      alignItems="center">
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  const styles = useStyles();

  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <Image source={GoogleIcon} style={styles.image} />
      </SocialIcon>
      <SocialIcon>
        <Image source={FacebookIcon} style={styles.image} />
      </SocialIcon>
      <SocialIcon>
        <Image source={AppleIcon} style={styles.image} />
      </SocialIcon>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  image: {
    flex: 1,
    width: theme.borderRadii.l / 2,
    height: theme.borderRadii.l / 2,
    resizeMode: 'contain',
  },
}));

export default SocialLogin;
