import React from 'react';
import { View, Text } from 'react-native';
import Menu from '../components/Menu'
import ImageDisplay from '../components/Image'


export default function Add() {
    const pepe = require("../assets/a.jpg");
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Bienvenido al Add</Text>
            <Menu Active="Add"/>


            <ImageDisplay source= {pepe} width = {400} height = {400}
            
            />
        </View>
    );
}