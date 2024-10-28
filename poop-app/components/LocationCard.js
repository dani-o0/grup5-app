import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LocationCard = ({ locationName, imageUrl, latitude, longitude }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.locationName}>{locationName}</Text>
        <Text style={styles.coordinates}>
          Lat: {latitude} | Long: {longitude}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#2E2942',
    borderRadius: 10,
    borderColor: '#56516A',
    borderWidth: 1,
    margin: 10,
    overflow: 'hidden',
    height: 100, // Ajuste de altura para las tarjetas
  },
  imageContainer: {
    flex: 1, // 20% del ancho
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 4, // 80% del ancho
    padding: 10,
    justifyContent: 'center',
  },
  locationName: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  coordinates: {
    color: '#CCC',
    fontSize: 14,
    marginTop: 5,
  },
});

export default LocationCard;
