import React from 'react';

import {
  Container,
  Box,
  Text,
  Button,
  RoundedIcon,
  RoundedIconButton,
  AuthNavigationProps,
} from '../../components';

const PasswordChanged = ({
  navigation,
}: AuthNavigationProps<'PasswordChanged'>) => {
  const footer = (
    <Box flexDirection="row" justifyContent="center" marginTop="l">
      <RoundedIconButton
        name="x"
        size={60}
        backgroundColor="white"
        color="secondary"
        iconRatio={0.7}
        onPress={() => navigation.pop()}
      />
    </Box>
  );
  const SIZE = 80;
  return (
    <Container {...{footer}} pattern={2}>
      <Box alignSelf="center">
        <RoundedIcon
          name="check"
          size={SIZE}
          backgroundColor="primaryLight"
          color="primary"
        />
      </Box>
      <Text variant="title1" textAlign="center" marginVertical="l">
        Your password was successfully changed
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Close this window and login again
      </Text>
      <Box alignItems="center" marginTop="m">
        <Button
          variant="primary"
          label="Login again"
          onPress={() => navigation.navigate('Login')}
        />
      </Box>
    </Container>
  );
};

export default PasswordChanged;
