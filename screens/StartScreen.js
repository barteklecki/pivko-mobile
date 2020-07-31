import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StartScreen = () => {
    return (
        <View style={styles.root}>
            <Text>[ Start ]</Text>
        </View>
    );
};

export default StartScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
