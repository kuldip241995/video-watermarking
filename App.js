/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppNavigator from './src/navigations/AppNavigator';

const App = props => {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;
  TextInput.defaultProps = TextInput.defaultProps || {};
  TextInput.defaultProps.allowFontScaling = false;

  const renderUI = () => (
    <NavigationContainer onReady={() => {}} onStateChange={async () => {}}>
      <AppNavigator {...props} />
    </NavigationContainer>
  );

  return (
    <>
      {/* <SafeAreaView style={{flex: 0.02}} backgroundColor={'black'} /> */}
      <SafeAreaView style={{flex: 1}} forceInset={{top: 'never'}}>
        {renderUI()}
      </SafeAreaView>
    </>
  );
};

export default App;
