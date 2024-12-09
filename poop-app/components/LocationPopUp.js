import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import StaticRating from './StaticRating';

const LocationPopUp = ({ name, image, rating}) => {
  return (
    <View style={styles.container}>
      <View style={styles.popUpContent}>
      <Text> <Image style={{ height: 150, width:150 }} source={{uri: image }} resizeMode="cover" />  </Text>
        <Text style={styles.name}>{name}</Text>
        <StaticRating rating={rating} />
      </View>
      <View style={styles.triangle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'transparent', // Fondo transparente para el triángulo
  },
  popUpContent: {
    alignItems: 'center',
    backgroundColor: '#2C2C54',
    borderRadius: 20,
    paddingBottom: 10,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 70,
    borderRightWidth: 70,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#2C2C54',
    transform: [{ rotate: '180deg' }],
    marginTop: -1, // Ajuste para conectar con el popup
  },
});

export default LocationPopUp;
