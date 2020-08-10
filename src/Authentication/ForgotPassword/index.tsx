import React from 'react';
import {Linking} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {
  Footer,
  Box,
  Text,
  Container,
  Button,
  TextInput,
} from '../../components';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});
const ForgotPassword = () => {
  const {handleChange, handleBlur, handleSubmit, touched, errors} = useFormik({
    initialValues: {email: ''},
    onSubmit: () => {},
    validationSchema: ForgotPasswordSchema,
  });

  const footer = (
    <Footer
      title="Don't work?"
      action="Try another way"
      onPress={() => Linking.openURL('mailto: help@support.com')}
    />
  );

  return (
    <Container {...{footer}} pattern={2}>
      <Text variant="title1" textAlign="center" marginBottom="l">
        Forgot Password?
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Enter the email associated with your account
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
          returnKeyType="go"
          returnKeyLabel="go"
          onSubmitEditing={() => handleSubmit()}
        />
      </Box>
      <Box alignItems="center" marginTop="m">
        <Button
          variant="primary"
          label="Reset password"
          onPress={handleSubmit}
        />
      </Box>
    </Container>
  );
};

export default ForgotPassword;
