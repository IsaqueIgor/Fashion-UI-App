import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthenticationRoutes} from '../components/Navigation';

import Onboarding from './OnBoarding';
import Welcome from './Welcome';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();
export const AuthenticationNavigator = () => {
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    <AuthenticationStack.Screen name="Login" component={Login} />
    <AuthenticationStack.Screen name="SignUp" component={SignUp} />
    <AuthenticationStack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
    />
  </AuthenticationStack.Navigator>;
};
