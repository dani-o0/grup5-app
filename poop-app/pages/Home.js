import React from 'react';
import { View, Text } from 'react-native';

import Menu from '../components/Menu'

export default function Home() {
    return (
        <View style={{ flex: 1 }}>
            <Text>Bienvenido al Home</Text>
            <Menu/>
        </View>
    );
}