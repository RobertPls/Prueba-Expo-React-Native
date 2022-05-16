import React from 'react';
import {View, Text} from 'react-native';
import Constants from 'expo-constants';
import RepositoryList from './RepositoryList.jsx'

const Main = () => {
return (
    <View style={{mariginTop: Constants.statusBarHeight, flexgrow: 1}}>
        <Text>Rate Repository Application</Text>
        <RepositoryList />
    </View>
)
}
export default Main; 
