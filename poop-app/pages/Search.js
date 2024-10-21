import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Menu from '../components/Menu';
import Publication from '../components/Publication';

export default function Search() {
    return (
        <View style={styles.mainView}>
            <View style={styles.tabView}>
                <Publication name="Manolo" rating={3}/>
            </View>
            <Menu style={styles.menuView} currentSection={2}/>
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