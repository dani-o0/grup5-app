import React from 'react';
import { View, Text } from 'react-native';

import Menu from '../components/Menu'
import Map from '../components/Map';

export default function Home() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Map/>
            <Menu Active="Home"/>
        </View>
    );
}