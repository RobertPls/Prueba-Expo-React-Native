import React from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-web';
import repositories from '../data/repositories.js';

const RepositoryList = () => {
    return (
        <FlatList 
            data={repositories}
            renderItem={({ item: repo}) => (
                <View key={repo.id}>
                    <Text>Id: {repo.id}</Text>
                    <Text>Name: {repo.fullNane}</Text>
                    <Text>Description: {repo.description}</Text>
                    <Text>Languaje: {repo.Language}</Text>
                    <Text>Star: {repo.stargazersCount}</Text>
                    <Text>Fork: {repo.forksCount}</Text>
                    <Text>Count: {repo.reviewCount}</Text>
                    <Text>Average: {repo.ratingAverage}</Text>
                </View>                   
            )}
        >
        </FlatList>
    )
}

export default RepositoryList