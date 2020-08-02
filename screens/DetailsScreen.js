import React from 'react';
import { StyleSheet, Text, View, Img, ScrollView } from 'react-native';

const DetailsScreen = ({ navigation }) => {
    const beer = navigation.getParam('beer');
    console.log(beer);

    return (
        <View style={styles.root}>
            <ScrollView>
                <Text>{beer.name}</Text>
            </ScrollView>
        </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
