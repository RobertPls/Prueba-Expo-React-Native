import React from 'react';
import {View, Text} from 'react-native';
import Constants from 'expo-constants';
import RepositoryList from './RepositoryList.jsx'
import AppBar from './AppBar.jsx';

const Main = () => {
return (
    <View style={{ flex: 1}}>
        <AppBar />
        <RepositoryList />
    </View>
)
}
export default Main; 
