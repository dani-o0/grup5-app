import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


import Menu from '../components/Menu'
import AddImage from '../components/AddImage';
import Rating from '../components/Rating';

export default function Add() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#151723' }}>
          <Text>Bienvenido al Add</Text>
          <AddImage placeholder={require('../assets/addImage1.jpg')}/>
          <Rating/>
          <Menu Active="Add"/>
      </View>
    );
}

const styles = StyleSheet.create({
    mainView:
    {
        flex: 1,
        backgroundColor: '#151723',
    },
    tabView:
    {
        flex: 7,
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuView:
    {
        flex: 1,
    },
  });