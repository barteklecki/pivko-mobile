import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavsScreen = () => {
    return (
        <View style={styles.root}>
            <Text>[ Favs ]</Text>
        </View>
    );
};

export default FavsScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
