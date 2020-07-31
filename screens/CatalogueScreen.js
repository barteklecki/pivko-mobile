import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CatalogueScreen = () => {
    return (
        <View style={styles.root}>
            <Text>[ Catalogue ]</Text>
        </View>
    );
};

export default CatalogueScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
