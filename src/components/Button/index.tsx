import React, { ReactNode, Children } from 'react';
import { Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import useTheme from '@shopify/restyle/dist/hooks/useTheme';

interface ButtonProps {
  label?: string;
  variant?: 'default' | 'primary' | 'transparent';
  children?: ReactNode;
  onPress: () => void;
}

const Button = ({ variant, label, onPress, children }: ButtonProps) => {
  const { colors } = useTheme();
  const backgroundColor =
    variant === 'primary'
      ? colors.primary
      : variant === 'transparent'
      ? 'transparent'
      : colors.default;
  const color = variant === 'primary' ? colors.white : colors.button;

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      {children ? (
        children
      ) : (
        <Text style={[styles.label, { color }]}>{label}</Text>
      )}
    </RectButton>
  );
};

Button.defaultProps = { variant: 'default' };

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'SFProText-Regular',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default Button;
