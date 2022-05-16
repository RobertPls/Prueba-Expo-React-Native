import React from 'react';
import {Text,StyleSheet} from 'react-native';
import theme from '../theme.js'

const styles = StyleSheet.create({
    text:{
        color: theme.colors.textPrimary,
        fontSize:theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    bold:{
        fontWeight: theme.fontWeights.bold
    },
    suheading:{
        fontSize:theme.fontSizes.subheading
    },
    colorPrimary:{
        color: theme.colors.primary
    },
    colorSecondary:{
        color:theme.colors.textSecondary
    },
    textAlignCenter:{
        textAlign:'center'
    }
})

export default function StyledText({align, children, color, fontSize, fontWeight, style, ...restOfProps }) {
    const textStyles = [
        styles.text,
        align == 'center' && styles.textAlignCenter,
        color == 'primary' && styles.colorPrimary,
        color == 'secondary' && styles.colorSecondary,
        fontSize == 'subheading' && styles.suheading,
        fontWeight == 'bold' && styles.bold
    ]
    return(
        <Text style = {textStyles}{...restOfProps}>
            {children}
        </Text>
    ) 
}