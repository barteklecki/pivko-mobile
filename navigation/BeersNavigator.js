import React from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
} from 'react-navigation';

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
        screen: CatalogueScreen,
    },
    Details: {
        screen: DetailsScreen,
    },
});

const MainNavigator = createBottomTabNavigator({
    Catalogue: {
        screen: CatalogueNavigator,
    },
    Favourites: {
        screen: FavsNavigator,
    },
});

export default createAppContainer(MainNavigator);
