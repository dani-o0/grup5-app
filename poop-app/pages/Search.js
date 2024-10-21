import React from 'react';
import { View, Text } from 'react-native';

import Menu from '../components/Menu'
import ImageDisplay  from '../components/Image'
import aImage from '../assets/a.jpg'; 



export default function Search() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Bienvenido al Search</Text>
            <Menu Active="Search"/>
            <ImageDisplay source={aImage} width={500} height={500} /> 
        </View>
    );
}