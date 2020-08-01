import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';

const StartScreen = () => {
    return (
        <View style={styles.root}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <View style={styles.container}>
                    <Text style={styles.title}>PIVKO</Text>
                    <Image
                        style={styles.logo}
                        resizeMode="cover"
                        source={require('../assets/logo512.png')}
                    />
                    <Text>Click tab to start!</Text>
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
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    },
    logo: {
        width: 200,
        height: 200,
        margin: 10,
    },
});
