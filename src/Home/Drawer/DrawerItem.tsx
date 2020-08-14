/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Box, Text, Theme, RoundedIcon, useTheme} from '../../components';
import {RectButton} from 'react-native-gesture-handler';

export interface DrawerProps {
  icon: string;
  label: string;
  screen: string;
  color: keyof Theme['colors'];
}

const DrawerItem = ({icon, label, screen, color}: DrawerProps) => {
  const theme = useTheme();
  return (
    <RectButton style={{borderRadius: theme.borderRadii.xl}}>
      <Box flexDirection="row" alignItems="center" padding="s">
        <RoundedIcon
          backgroundColor={color}
          name={icon}
          color="white"
          size={36}
        />
        <Text variant="button" color="text" marginLeft="m">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
