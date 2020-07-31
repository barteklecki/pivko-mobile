import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DetailsScreen = () => {
    return (
        <View style={styles.root}>
            <Text>[ Details ]</Text>
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
