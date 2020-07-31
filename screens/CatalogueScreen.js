import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CatalogueScreen = ({ navigation }) => {
    return (
        <View style={styles.root}>
            <Text>[ Catalogue ]</Text>
            <Button
                title="Details"
                onPress={() => {
                    navigation.navigate('Details');
                }}
            />
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
