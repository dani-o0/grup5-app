import React from 'react';
import { View, Text } from 'react-native';

import Menu from '../components/Menu';
import TabButton from '../components/TabButton';

export default function User() {
    return (
        <View style={{ flex: 1 }}>
            <TabButton title='Mis publicaciones'  />
            <TabButton title='Log out'  />
            <Menu Active="User"/>
        </View>
    );
}