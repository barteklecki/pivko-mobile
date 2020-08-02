import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const DetailsScreen = ({ navigation }) => {
    const beer = navigation.getParam('beer');

    return (
        <View style={styles.root}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <View style={styles.container}>
                    <Text style={styles.title}>{beer.name}</Text>
                    <Text style={styles.subTitle}>{beer.tagline}</Text>
                    <Text style={styles.text}>
                        First broewed: {beer.first_brewed}
                    </Text>
                    <Image
                        style={styles.img}
                        source={
                            beer.image_url
                                ? { uri: beer.image_url }
                                : require('../assets/no-pic-beer.png')
                        }
                        resizeMode="contain"
                    />
                    <Text style={styles.text}>
                        ABV: {beer.abv}, EBC: {beer.ebc}, IBU: {beer.ibu}, pH:
                        {beer.ph}
                    </Text>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.subTitle}>Description:</Text>
                        <Text style={styles.text}>{beer.description}</Text>
                    </View>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.subTitle}>Brewers tips:</Text>
                        <Text style={styles.text}>{beer.brewers_tips}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scroll: {
        flexGrow: 1,
        alignItems: 'flex-start',
    },
    container: {
        alignItems: 'center',
        padding: 30,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        margin: 5,
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        marginVertical: 10,
        textAlign: 'justify',
    },
    img: {
        width: 200,
        height: 200,
        margin: 20,
    },
    sectionContainer: {
        marginVertical: 20,
    },
});
