import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {theme} from './src/components/Theme';
import {AuthenticationNavigator} from './src/Authentication';

const App = () => {
  return (
    <ThemeProvider {...{theme}}>
      <NavigationContainer>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
