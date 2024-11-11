import React from 'react';
import { View, Text } from 'react-native';

import Menu from '../components/Menu';
import TabButton from '../components/TabButton';
import AddComent from '../components/AddComent';


export default function User(navigation) {
    return (
        <View style={{ flex: 1 }}>
            <TabButton title='Mis publicaciones'  />
            <AddComent text="Añadir comentario" dialogText="Añade tu comentario..." tab={true} textImputColor={'#2E2942'} textImputMinimunHeight={50}/>
            <Menu Active="User"/>
        </View>
    );
}