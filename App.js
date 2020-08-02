import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens';

import { Provider } from 'mobx-react';
import AppStore from './store/store';
const store = (window.store = new AppStore());

import BeersNavigator from './navigation/BeersNavigator';

enableScreens();

export default function App() {
    return (
        <Provider store={store}>
            <BeersNavigator />
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        //
    },
});
