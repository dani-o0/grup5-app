import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import StaticRating from './StaticRating'; // Asegúrate de importar tu componente de estrellas

const LocationPopUp = ({ name, image, rating, onpress}) => {
  return (
    <TouchableOpacity style={styles.calloutContainer} onPress={onpress}>
      <Image source={{ uri: image }} style={styles.image} />
    

      <Text style={styles.placeName}>{name}</Text>

      <StaticRating rating={rating} />
      
      <View style={styles.triangle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  calloutContainer: {
    width: 150,
    backgroundColor: '#2b2546',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  placeName: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#2b2546',
    alignSelf: 'center',
    marginTop: 5,
  },
});

export default LocationPopUp;
