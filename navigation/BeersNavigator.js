import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import CatalogueScreen from '../screens/CatalogueScreen';
import CreditsScreen from '../screens/CreditsScreen';
import DetailsScreen from '../screens/DetailsScreen';
import FavsScreen from '../screens/FavsScreen';
import StartScreen from '../screens/StartScreen';

const CatalogueNavigator = createStackNavigator({
    Catalogue: {
        screen: CatalogueScreen,
    },
    Details: {
        screen: DetailsScreen,
    },
});

const FavsNavigator = createStackNavigator({
    Favourites: {
        screen: FavsScreen,
    },
    Details: {
        screen: DetailsScreen,
    },
});

const MainNavigator = createBottomTabNavigator({
    Start: {
        screen: StartScreen,
    },
    Catalogue: {
        screen: CatalogueNavigator,
    },
    Favourites: {
        screen: FavsNavigator,
    },
});

export default createAppContainer(MainNavigator);
