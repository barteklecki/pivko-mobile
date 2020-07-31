import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens';

import BeersNavigator from './navigation/BeersNavigator';

enableScreens();

export default function App() {
    return <BeersNavigator />;
}

const styles = StyleSheet.create({
    container: {
        //
    },
});
