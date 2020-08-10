import React, {useRef} from 'react';
import {TextInput as RNTextInput} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import IconFA from 'react-native-vector-icons/FontAwesome';
IconFA.loadFont();

import {
  Button,
  Container,
  Text,
  Box,
  Footer,
  Checkbox,
  AuthNavigationProps,
  TextInput,
} from '../../components';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long')
    .required('Required'),
});

const Login = ({navigation}: AuthNavigationProps<'Login'>) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {email: '', password: '', rememberMe: false},
    onSubmit: () => navigation.navigate('Home'),
    validationSchema: LoginSchema,
  });

  const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign up Here"
      onPress={() => true}
    />
  );

  const password = useRef<RNTextInput>(null);

  return (
    <Container {...{footer}} pattern={0}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="xl">
          Use your credentials below and login to your account
        </Text>

        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter your email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              touched={touched.email}
              error={errors.email}
              autoCapitalize="none"
              autoCompleteType="email"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => password.current?.focus()}
            />

            <TextInput
              ref={password}
              icon="lock"
              placeholder="Enter your password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              touched={touched.password}
              error={errors.password}
              autoCapitalize="none"
              autoCompleteType="password"
              returnKeyType="go"
              returnKeyLabel="go"
              onSubmitEditing={() => handleSubmit()}
              secureTextEntry
            />
          </Box>

          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            marginVertical="m">
            <Checkbox
              label="Remember Me"
              checked={values.rememberMe}
              onChange={() => setFieldValue('rememberMe', !values.rememberMe)}
            />
            <Button variant="transparent" onPress={() => true}>
              <Text variant="button" color="primary">
                {' '}
                Forgot Password
              </Text>
            </Button>
          </Box>
          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              onPress={handleSubmit}
              label="Login into your account"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default Login;
