import { StatusBar } from 'expo-status-bar';

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SpalshScreen from './SpalshScreen';
import HomeScreen from './HomeScreen';
import ProcessScreen from './ProcessScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Spalsh" component={SpalshScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Result" component={ProcessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;