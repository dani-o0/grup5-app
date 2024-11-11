import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import StaticRating from './StaticRating';

const LocationPopUp = ({ name, image, rating}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.popUpContent}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <StaticRating style={styles.rating} rating={rating} />
      </View>
      <View style={styles.triangle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent', // Fondo transparente para el triángulo
  },
  popUpContent: {
    alignItems: 'center',
    backgroundColor: '#2C2C54',
    borderRadius: 10,
    paddingBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rating: {
    marginHorizontal: 10,
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
