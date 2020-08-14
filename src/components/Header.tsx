import React from 'react';
import {Box, Text} from './Theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import RoundedIconButton from './RoundedIconButton';

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  right: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  dark: boolean;
}
const Header = ({left, right, title, dark}: HeaderProps) => {
  const insects = useSafeAreaInsets();
  const color = dark ? 'white' : 'secondary';
  const backgroundColor = dark ? 'secondary' : 'lighGrey';
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      style={{padding: insects.top}}>
      <RoundedIconButton
        name={left.icon}
        size={44}
        onPress={left.onPress}
        iconRatio={0.4}
        {...{color, backgroundColor}}
      />
      <Text variant="header" {...{color}}>
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        name={right.icon}
        size={44}
        onPress={right.onPress}
        iconRatio={0.4}
        {...{color, backgroundColor}}
      />
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};

export default Header;
