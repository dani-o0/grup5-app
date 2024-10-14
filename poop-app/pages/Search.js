import React from 'react';
import { View, Text } from 'react-native';

import Menu from '../components/Menu'

export default function Search() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Bienvenido al Search</Text>
            <Menu Active="Search"/>
        </View>
    );
}