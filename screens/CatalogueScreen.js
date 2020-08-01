import React from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import ApiData from '../models/beers';
import BeerListItem from '../components/BeerListItem';

const CatalogueScreen = ({ navigation }) => {
    return (
        <View style={styles.root}>
            <FlatList
                data={ApiData}
                renderItem={({ item }) => (
                    <BeerListItem
                        name={item.name}
                        tagline={item.tagline}
                        date={item.first_brewed}
                        img={item.image_url}
                    />
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
    moreButton: {
        margin: 20,
    },
});
