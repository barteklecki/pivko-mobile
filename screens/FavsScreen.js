import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const FavsScreen = props => {
    console.log(props);
    return (
        <View style={styles.root}>
            <Text>[ Favs ]</Text>
            <Button
                title="Details"
                onPress={() => {
                    props.navigation.navigate('Details');
                }}
            />
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
