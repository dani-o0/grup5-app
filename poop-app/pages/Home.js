import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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