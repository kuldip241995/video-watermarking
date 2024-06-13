import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/home/HomeScreen';
import VideoWaterMarkingScreen from '../screens/videoWaterMarking/VideoWaterMarkingScreen';

const Stack = createStackNavigator();
const AppNavigator = props => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="VideoWaterMarkingScreen"
        component={VideoWaterMarkingScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
