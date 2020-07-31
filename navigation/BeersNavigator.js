import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import CatalogueScreen from '../screens/CatalogueScreen';
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
        navigationOptions: {
            tabBarIcon: tab => <Ionicons name="ios-home" size={24} />,
        },
    },
    Catalogue: {
        screen: CatalogueNavigator,
        navigationOptions: {
            tabBarIcon: tab => <Ionicons name="ios-list" size={24} />,
        },
    },
    Favourites: {
        screen: FavsNavigator,
        navigationOptions: {
            tabBarIcon: tab => <Ionicons name="md-heart" size={24} />,
        },
    },
});

export default createAppContainer(MainNavigator);
