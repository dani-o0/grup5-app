import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Menu from '../components/Menu'

export default function Add() {
    return (
        <View style={styles.mainView}>
            <View style={styles.tabView}>
                <Text>Bienvenido al Add</Text>
            </View>
            <Menu style={styles.menuView} currentSection={3}/>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView:
    {
        flex: 1,
        backgroundColor: '#151723',
    },
    tabView:
    {
        flex: 7,
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuView:
    {
        flex: 1,
    },
  });