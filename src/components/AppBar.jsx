import React from 'react';
import {View, StyleSheet, Button} from 'react-native'
import StyledText from './StyleText.jsx'
import Constants from 'expo-constants'
import theme from '../theme.js'
import { useNavigation } from '@react-navigation/native';
import { Link } from '@react-navigation/native';


const styles = StyleSheet.create({
    container: {
        backgroundColor:theme.appBar.primary,
        paddingTop: Constants.statusBarHeight +10,
        paddingBottom:10,
        paddingLeft:10
    },
    text:{
        color : theme.appBar.textPrimary
    }
})

const AppBarTab=({active, children, to})=>{
    return (
        <Link to={to}>
            <StyledText fontWeight='bold' style={styles.text}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () =>{
    const navigation = useNavigation()
    return(
        <View style = {styles.container}>
            <AppBarTab active={true} to='/'>Repositories</AppBarTab>
            <AppBarTab active={true} to='/signin'>Sign in</AppBarTab>
        </View>
    )
}
export default AppBar
