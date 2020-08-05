import React from 'react';
import { Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import IconFA from 'react-native-vector-icons/FontAwesome';
IconFA.loadFont();

//import { Routes, StackNavigationProps } from '../../components/Navigation';
import { Button, Container, Text, Box } from '../../components';
import SocialLogin from '../../components/SocialLogin';
import InputText from '../../components/Forms/InputText';
import Checkbox from '../../components/Forms/Checkbox';


const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long')
        .required('Required')
})

const footer = (
    <>
        <SocialLogin />
        <Box alignItems='center' >
            <Button
                variant='transparent'
                onPress={() => Alert.alert('SignUp')}
            >
                <Box
                    flexDirection='row'
                    width='100%'
                >
                    <Text variant='button' color='white'>Don't have an account?</Text>
                    <Text variant='button' color='primary' marginLeft='s'>Sign up Here</Text>

                </Box>
            </Button>
        </Box>
    </>
);


const Login = (/*{ navigation }: StackNavigationProps<Routes, 'Login'>*/) => {
    return (
        <Container footer={footer}>
            <Box padding='xl'>
                <Text variant='title1'
                    textAlign='center'
                    marginBottom='l'>
                    Welcome back
                        </Text>
                <Text variant='body' textAlign='center'>
                    Use your credentials below and login to your account
                    </Text>
                <Formik
                    initialValues={{ email: '', password: '', rememberMe: false }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={LoginSchema}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        setFieldValue,
                        values,
                        errors,
                        touched }) => (
                            <Box>
                                <Box marginBottom='m'>
                                    <InputText
                                        icon='mail'
                                        placeholder='Enter your Email'
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        error={errors.email}
                                        touched={touched.email}

                                    />
                                </Box>
                                <InputText
                                    icon='lock'
                                    placeholder='Enter your Password'
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    error={errors.password}
                                    touched={touched.password}
                                />
                                <Box flexDirection='row' justifyContent='center'>
                                    <Checkbox
                                        label='Remember Me'
                                        checked={values.rememberMe}
                                        onChange={() => setFieldValue('rememberMe', !values.rememberMe)}
                                    />
                                    <Button variant='transparent' onPress={() => true} >
                                        <Text color='primary'> Forgot Password</Text>
                                    </Button>
                                </Box>
                                <Box alignItems='center' marginTop='m'>
                                    <Button
                                        variant='primary'
                                        onPress={handleSubmit}
                                        label='Login into your account' />
                                </Box>
                            </Box>
                        )}
                </Formik>
            </Box>
        </Container>
    );
}
export default Login;

