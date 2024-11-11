import React from 'react';
import { View, Text } from 'react-native';

import Menu from '../components/Menu'

export default function Home() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Bienvenido al Home</Text>
            <Menu Active="Home"/>
        </View>
    );
}