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
        {/* screenOptions = {{headerShown:false}} */}
        <Stack.Navigator >
            <Stack.Group>
                <Stack.Screen name = 'list' component={RepositoryList} options={{ header: () => <AppBar></AppBar> }}></Stack.Screen>
                <Stack.Screen name = 'signin' component={DetailsScreen} options={{ header: () => <AppBar></AppBar> }}></Stack.Screen>
            </Stack.Group>
        </Stack.Navigator>
    </View>
)
}
export default Main; 
