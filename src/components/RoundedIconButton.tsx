import React from 'react';
import RoundedIcon, {RoundedIconProps} from './RoundedIcon';
import {RectButton} from 'react-native-gesture-handler';

interface RoundedIconButtonProps extends RoundedIconProps {
  onPress: () => void;
}

const RoundedIconButton = ({onPress, ...props}: RoundedIconButtonProps) => {
  return (
    <RectButton {...{onPress}}>
      <RoundedIcon {...props} />
    </RectButton>
  );
};

RoundedIconButton.defaultProps = {
  iconRatio: 0.7,
};
export default RoundedIconButton;
