import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import ApiData from '../models/beers';

const CatalogueScreen = ({ navigation }) => {
    return (
        <View style={styles.root}>
            <FlatList
                data={ApiData}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>
                            {item.id}: {item.name}
                        </Text>
                    </View>
                )}
                contentContainerStyle={styles.list}
                ListFooterComponent={() => <Button title="Load more..." />}
                ListFooterComponentStyle={styles.moreButton}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default CatalogueScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    list: {
        flexGrow: 1,
        width: '100%',
    },
    item: {
        width: '100%',
        borderWidth: 2,
        borderColor: 'black',
        marginVertical: 10,
        padding: 10,
    },
    moreButton: {
        margin: 20,
    },
});
