import React, {useRef} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {TextInput as RNTextInput} from 'react-native';

import {
  Box,
  Footer,
  Text,
  Container,
  Button,
  TextInput,
} from '../../components';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref('password')], 'Password not matched')
    .required('Required'),
});
const SignUp = () => {
  const {handleChange, handleBlur, handleSubmit, touched, errors} = useFormik({
    initialValues: {email: '', password: '', passwordConfirmation: ''},
    onSubmit: (values) => console.log(values),
    validationSchema: SignUpSchema,
  });
  const password = useRef<RNTextInput>(null);
  const passwordConfirmation = useRef<RNTextInput>(null);
  const footer = (
    <Footer
      title="Already have an account?"
      action="Login here"
      onPress={() => {}}
    />
  );

  return (
    <Container {...{footer}} pattern={1}>
      <Text variant="title1" textAlign="center" marginBottom="l">
        Create account
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Let's us know what your name, email, and your password
      </Text>
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
      </Box>
      <Box marginBottom="m">
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
          returnKeyType="next"
          returnKeyLabel="next"
          onSubmitEditing={() => passwordConfirmation.current?.focus()}
          secureTextEntry
        />
      </Box>
      <TextInput
        ref={passwordConfirmation}
        icon="lock"
        placeholder="Confirm your password"
        onChangeText={handleChange('passwordConfirmation')}
        onBlur={handleBlur('passwordConfirmation')}
        touched={touched.passwordConfirmation}
        error={errors.passwordConfirmation}
        autoCapitalize="none"
        autoCompleteType="password"
        returnKeyType="go"
        returnKeyLabel="go"
        onSubmitEditing={() => handleSubmit()}
        secureTextEntry
      />
      <Box alignItems="center" marginTop="m">
        <Button
          variant="primary"
          label="Create your account"
          onPress={handleSubmit}
        />
      </Box>
    </Container>
  );
};

export default SignUp;
