import React from 'react';
import {View, StyleSheet, Button, ScrollView} from 'react-native'
import StyledText from './StyleText.jsx'
import Constants from 'expo-constants'
import theme from '../theme.js'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Link } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';


const styles = StyleSheet.create({
    container: {
        backgroundColor:'red',
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight + 10,
    },
    text:{
        color : theme.appBar.textSecondary,
        fontSize:20,
    },
    scroll:{
        paddingBottom:15,
        margin:10
    },
    active: {
        color : theme.appBar.textPrimary,
    }
})

const AppBarTab=({children, to})=>{
    const route = useRoute();
    const active = route.path == to

    const textSyles = [
        styles.text,
        active && styles.active
    ]
    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <View style={{margin: 20}}>
                <StyledText fontWeight='bold' style={textSyles}>
                    {children}
                </StyledText>
            </View>
        </Link>
    )
}


const AppBar = () =>{
    return(
        <View style = {styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab  to='/list'>Repositories</AppBarTab>
                <AppBarTab  to='/signin'>Sign in</AppBarTab>
            </ScrollView>
        </View>
    )
}
export default AppBar
