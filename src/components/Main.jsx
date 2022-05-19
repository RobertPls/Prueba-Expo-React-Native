import React from 'react';
import {View, Text, Button} from 'react-native';
import RepositoryList from './RepositoryList.jsx'
import AppBar from './AppBar.jsx';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function DetailsScreen() {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

const Main = () => {
return (
    <View style={{ flex: 1}}>
        <AppBar />
        <Stack.Navigator screenOptions = {{headerShown:false}}>
            <Stack.Group>
                <Stack.Screen name = 'list' component={RepositoryList}></Stack.Screen>
                <Stack.Screen name = 'signin' component={DetailsScreen}></Stack.Screen>
            </Stack.Group>
        </Stack.Navigator>
    </View>
)
}
export default Main; 
