import React from 'react';
import {View, Text, Button, Platform} from 'react-native';
import RepositoryList from './RepositoryList.jsx'
import AppBar from './AppBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import LogInPage from '../login.jsx';


const Stack = createNativeStackNavigator();

const Main = () => {
return (
    <View style={{ flex: 1}}>
        {/* screenOptions = {{headerShown:false}} */}
        {/*options={{ header: () => <AppBar></AppBar> }} */}
        <Stack.Navigator screenOptions={{header: () => <AppBar></AppBar>,}}>
            <Stack.Group>
                <Stack.Screen name = 'list' component={RepositoryList} ></Stack.Screen>
                <Stack.Screen name = 'signin' component={LogInPage} ></Stack.Screen>
            </Stack.Group>
        </Stack.Navigator>
    </View>
)
}
export default Main; 
