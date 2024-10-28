import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Menu from '../components/Menu';
import LocationCard from '../components/LocationCard';

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
      <View style={[{flex: 1}]}>
          <Menu currentSection={2} />
      </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#151723',
  },
  contentContainer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
});
