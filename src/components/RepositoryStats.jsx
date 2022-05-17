import React from 'react';
import {View, Text} from 'react-native'
import StyledText from './StyleText.jsx';

const RepositoryStats = props => {
    return (
        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
            <View>
            <StyledText align='center' fontWeight='bold'>{props.stargazersCount}</StyledText>
            <StyledText align='center' >Star:</StyledText>
            </View>
            <View>
            <StyledText align='center' fontWeight='bold'>{props.forksCount}</StyledText>
            <StyledText align='center' >Fork:</StyledText>
            </View>
            <View>
            <StyledText align='center' fontWeight='bold'>{props.reviewCount}</StyledText>
            <StyledText align='center' >Count:</StyledText>
            </View>
            <View>
            <StyledText align='center' fontWeight='bold'>{props.ratingAverage}</StyledText>
            <StyledText align='center' >Average:</StyledText>
            </View>        
        </View>
    )
}
export default RepositoryStats