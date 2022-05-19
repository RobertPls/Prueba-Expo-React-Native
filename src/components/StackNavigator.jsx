import { View, Text, Button } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Main';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();


function DetailsScreen() {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button title="main" onPress={() => navigation.navigate('main')} />
        </View>
    );
}

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions = {{headerShown:false}}>
            <Stack.Group>
                <Stack.Screen name = 'main' component={Main}></Stack.Screen>
                <Stack.Screen name = 'signin' component={DetailsScreen}></Stack.Screen>
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default StackNavigator