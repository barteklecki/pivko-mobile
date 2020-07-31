import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CreditsScreen = () => {
    return (
        <View style={styles.root}>
            <Text>[ Credits ]</Text>
        </View>
    );
};

export default CreditsScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
