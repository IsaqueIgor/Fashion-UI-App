import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';

import {AppRoutes} from './src/components/Navigation';

import {theme} from './src/components/Theme';
import {AuthenticationNavigator} from './src/Authentication';

const Stack = createStackNavigator<AppRoutes>();

const App = () => {
  return (
    <ThemeProvider {...{theme}}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator headerMode="none">
            <Stack.Screen
              name="Authentication"
              component={AuthenticationNavigator}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
