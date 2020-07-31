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

const MainNavigator = createBottomTabNavigator({
    Catalogue: {
        screen: CatalogueScreen,
    },
    Favourites: {
        screen: DetailsScreen,
    },
});

export default createAppContainer(MainNavigator);
