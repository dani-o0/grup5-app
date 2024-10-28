import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Menu from '../components/Menu';
import AddImage from '../components/AddImage';
import Rating from '../components/Rating';
import Input from '../components/CustomTextInput';
import Map from '../components/Map';
import GradientButton from '../components/GradientButton';
import DescriptionInput from '../components/DescriptionInput';

export default function Add() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    return (
      <View style={styles.mainView}>
        <View style={styles.tabView}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <AddImage placeholder={require('../assets/addImage1.jpg')}/>
            <Input placeholder="Nombre..." secondary={true} value={name} onChangeText={setName}/>
            <Rating/>
            <View style={styles.mapContainer}>
              <Map/>
            </View>
            <DescriptionInput placeholder="Descripción..." secondary={true} value={description} onChangeText={setDescription}/>
            <GradientButton
              title="Subir"
              onPress={() => console.log("Subir presionado")}
              isPrimary={true}
              width="40%"
            />
          </ScrollView>
        </View>
        <Menu style={styles.menuView} currentSection={3} />
      </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#151723',
    },
    tabView: {
        flex: 7,
        width: '100%',
    },
    mapContainer: {
        width: '100%',
        height: 300,
        marginVertical: 20,
        paddingHorizontal: 0,
    },
    scrollViewContent: {
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10, // Pequeño padding para los bordes sin centrar todos los elementos
    },
    menuView: {
        flex: 1,
    },
});
