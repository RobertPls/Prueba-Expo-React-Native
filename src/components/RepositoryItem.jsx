import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import StyledText from './StyleText';

const RepositoryStats = props => {
    return (
        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
            <View>
            <StyledText fontWeight='bold'>Star:</StyledText>
            <StyledText >{props.stargazersCount}</StyledText>
            </View>

            <View>
            <StyledText fontWeight='bold'>Fork:</StyledText>
            <StyledText >{props.forksCount}</StyledText>
            </View>

            <View>
            <StyledText fontWeight='bold'>Count:</StyledText>
            <StyledText >{props.reviewCount}</StyledText>
            </View>

            <View>
            <StyledText fontWeight='bold'>Average:</StyledText>
            <StyledText >{props.ratingAverage}</StyledText>
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