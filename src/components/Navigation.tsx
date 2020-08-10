import {ParamListBase, RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';

export interface StackNavigationProps<
  ParamList extends ParamListBase = ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type Routes = {
  OnBoarding: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};
