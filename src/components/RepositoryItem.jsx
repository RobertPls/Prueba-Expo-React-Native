import React from 'react';
import { Image,Text, View, StyleSheet } from 'react-native';
import RepositoryStats from './RepositoryStats.jsx';
import StyledText from './StyleText';
import theme from '../theme.js'

const RepositoryItemHeader = (props) =>(
    <View>
        <Image style={styles.image} source={{uri: props.ownerAvatarurl}}></Image>
        <StyledText fontSize='subheading' fontWeight='bold' blue>{props.fullNane}</StyledText>
        <StyledText >{props.description}</StyledText>
        <StyledText style={styles.languaje}>{props.Language}</StyledText>
    </View>
)

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <RepositoryItemHeader {...props}></RepositoryItemHeader>
        <RepositoryStats {...props}></RepositoryStats>
    </View>
)


const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    languaje :{
        padding:4,
        color: theme.colors.white,
        alignSelf:'flex-start',
        backgroundColor: theme.colors.primary,
        borderRadius: 5 
    },
    image: {
        height:55,
        width:55,
        borderRadius: 5
    }
})


export default RepositoryItem