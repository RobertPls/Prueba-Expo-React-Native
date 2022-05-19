import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native-web';
import Main from './src/components/Main'
import {NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer >
      <Main></Main>
    </NavigationContainer >
  );
}