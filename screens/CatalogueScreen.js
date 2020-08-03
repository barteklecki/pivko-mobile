import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { observer, inject } from 'mobx-react';
import axios from 'axios';

import { beersPerPage } from '../data/consts';
import BeerListItem from '../components/BeerListItem';

const CatalogueScreen = ({ navigation, store }) => {
    useEffect(() => {
        if (!store.beerList.length && store.page === 1) {
            getMeSomeBeers();
        }
    }, []);

    const getMeSomeBeers = async () => {
        store.isFetching = true;
        const URL = `https://api.punkapi.com/v2/beers?page=${store.page}&per_page=${beersPerPage}`;
        const { data } = await axios(URL);

        if (data.length) {
            store.beerList = [...store.beerList, ...data];
            store.page += 1;
        }
        store.isFetching = false;
    };

    return (
        <View style={styles.root}>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={store.beerList}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate({
                                routeName: 'Details',
                                params: { beer: item },
                            });
                        }}
                    >
                        <BeerListItem
                            name={item.name}
                            tagline={item.tagline}
                            date={item.first_brewed}
                            img={item.image_url}
                        />
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.list}
                ListFooterComponentStyle={styles.moreButton}
                onEndReached={() => {
                    if (!store.isFetching) {
                        getMeSomeBeers();
                    }
                }}
            />
        </View>
    );
};

export default inject('store')(observer(CatalogueScreen));

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
