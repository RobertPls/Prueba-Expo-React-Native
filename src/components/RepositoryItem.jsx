import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import StyledText from './StyleText';

const RepositoryStats = props => {
    return (
        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
            <View>
            <StyledText align='center' fontWeight='bold'>Star:</StyledText>
            <StyledText align='center'>{props.stargazersCount}</StyledText>
            </View>
            <View>
            <StyledText align='center' fontWeight='bold'>Fork:</StyledText>
            <StyledText align='center'>{props.forksCount}</StyledText>
            </View>
            <View>
            <StyledText align='center' fontWeight='bold'>Count:</StyledText>
            <StyledText align='center'>{props.reviewCount}</StyledText>
            </View>
            <View>
            <StyledText align='center' fontWeight='bold'>Average:</StyledText>
            <StyledText align='center'>{props.ratingAverage}</StyledText>
            </View>        
        </View>
    )
}
const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <StyledText fontSize='subheading' fontWeight='bold' blue>Name: {props.fullNane}</StyledText>
        <StyledText bold>Description: {props.description}</StyledText>
        <StyledText blue>Languaje: {props.Language}</StyledText>
        <RepositoryStats {...props}></RepositoryStats>
    </View>
)


const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    }
})


export default RepositoryItem