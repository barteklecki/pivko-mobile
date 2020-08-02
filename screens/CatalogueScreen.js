import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import axios from 'axios';

import { beersPerPage } from '../data/consts';
import BeerListItem from '../components/BeerListItem';

const CatalogueScreen = ({ navigation }) => {
    const [beerList, setBeerList] = useState([]);
    const [page, setPage] = useState(1);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        if (!beerList.length && page === 1) {
            getMeSomeBeers();
        }
    }, []);

    const getMeSomeBeers = async () => {
        setIsFetching(true);
        const URL = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${beersPerPage}`;
        const { data } = await axios(URL);

        if (data.length) {
            setBeerList([...beerList, ...data]);
            setPage(page + 1);
        }
        console.log(
            'page=',
            page,
            ' length=',
            beerList.length,
            '/',
            data.length
        );
        setIsFetching(false);
    };

    return (
        <View style={styles.root}>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={beerList}
                renderItem={({ item }) => (
                    <BeerListItem
                        name={item.name}
                        tagline={item.tagline}
                        date={item.first_brewed}
                        img={item.image_url}
                    />
                )}
                contentContainerStyle={styles.list}
                ListFooterComponentStyle={styles.moreButton}
                onEndReached={() => {
                    if (!isFetching) {
                        getMeSomeBeers();
                    }
                }}
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
