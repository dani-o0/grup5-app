import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Menu from '../components/Menu';
import Publication from '../components/Publication';
import cat from '../assets/cat.jpg';
import cat2 from '../assets/cat2.jpg';

export default function Search() {
    return (
        <View style={styles.mainView}>
            <View style={styles.tabView}>
                <View style={styles.publication}>
                    <Publication name="Manolo" rating={3} image={cat}/>
                </View>
                <View style={styles.publication}>
                    <Publication name="Josep" rating={5} image={cat2}/>
                </View>
            </View>
            <Menu style={styles.menuView} currentSection={2}/>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView:
    {
        alignItems: 'center',
        alignContent: 'center',
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
    publication:
    {
        paddingTop: 15,
        paddingBottom: 15,
    },
    menuView:
    {
        flex: 1,
    },
  });