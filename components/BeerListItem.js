import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const BeerListItem = ({ name, tagline, date, img }) => {
    return (
        <View style={styles.root}>
            <View style={styles.texts}>
                <Text style={styles.name}>{name}</Text>
                <Text>{tagline}</Text>
                <Text>{date}</Text>
            </View>
            <Image
                style={styles.img}
                source={
                    img ? { uri: img } : require('../assets/no-pic-beer.png')
                }
                resizeMode="contain"
            />
        </View>
    );
};

export default BeerListItem;

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    texts: {
        flex: 1,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    img: {
        width: 50,
        height: 90,
    },
});
