import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';

const StartScreen = () => {
    return (
        <View style={styles.root}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>PIVKO</Text>
                        <Text>MOBILE</Text>
                    </View>
                    <Image
                        style={styles.logo}
                        resizeMode="cover"
                        source={require('../assets/logo512.png')}
                    />
                    <Text>Click tab to start!</Text>
                    <View style={styles.footer}>
                        <Text>2020 &copy; BarLec</Text>
                        <Text>based on PunkAPI</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default StartScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scroll: {
        flexGrow: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    container: {
        alignItems: 'center',
    },
    titleContainer: {
        margin: 10,
        marginTop: 50,
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    logo: {
        width: 200,
        height: 200,
        margin: 10,
    },
    footer: {
        alignItems: 'center',
        opacity: 0.3,
        margin: 20,
    },
});
