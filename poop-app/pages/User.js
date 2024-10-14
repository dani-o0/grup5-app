import React from 'react';
import { View, StyleSheet } from 'react-native';

import Menu from '../components/Menu';
import TabButton from '../components/TabButton';

export default function User() {
    return (
        <View style={{ flex: 1 }}>
            <TabButton title='Mis publicaciones'  />
            <TabButton title='Log out'  />
            <Menu/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151723',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer: {
        width: '80%',
        backgroundColor: '#2E2942',
        borderRadius: 30,
        borderColor: '#56516A',
        borderWidth: 1,
        padding: 20,
        alignItems: 'center',
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
});