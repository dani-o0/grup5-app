import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button, ActivityIndicator } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import * as ActualLocation from 'expo-location';
import { collection, getDocs } from 'firebase/firestore'; // Importar Firestore y métodos
import { FIREBASE_STORAGE } from '../firebaseConfig'; // Importar la configuración de Firebase
import LocationPopUp from './LocationPopUp';

const Map = ({ isSelectable = false, onLocationSelect = () => {} }) => {
  const navigation = useNavigation();
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const fetchLocations = async () => {
    try {
      const querySnapshot = await getDocs(collection(FIREBASE_STORAGE, 'Lavabos'));
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setLocations(items);
      setLoading(false);
    } catch (error) {
      console.error('Error obteniendo los datos de Firebase:', error);
    }
  };

  const getActualLocation = async () => {
    let { status } = await ActualLocation.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permiso de ubicación denegado');
      return;
    }

    let location = await ActualLocation.getCurrentPositionAsync({});
    setRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  useEffect(() => {
    fetchLocations();
    getActualLocation();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const handleMapPress = (event) => {
    if (isSelectable) {
      const { latitude, longitude } = event.nativeEvent.coordinate;
      setSelectedLocation({ latitude, longitude });
      onLocationSelect({ latitude, longitude });
    }
  };

  return (
    <View style={{ flex: 1, width: '100%', height: '100%' }}>
      {region ? (
        <MapView
          style={styles.map}
          region={region}
          onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
          onPress={handleMapPress}
        >
          {locations.map((location) => (
            <Marker
              key={location.id}
              coordinate={{
                latitude: location.location.latitude,
                longitude: location.location.longitude,
              }}
            >
              <Callout
                tooltip
                onPress={() =>
                  navigation.navigate('Card', {
                    name: location.name,
                    imageURL: location.imageUrl,
                    rating: location.rating,
                    description: location.descripcion,
                    author: location.autor,
                    location: location.location,
                    creationDate: location.fechaCreacion,
                    comments: location.comentarios,
                  })
                }
              >
                <LocationPopUp
                  name={location.name}
                  image={location.imageUrl}
                  rating={location.rating}
                />
              </Callout>
            </Marker>
          ))}
          {isSelectable && selectedLocation && (
            <Marker
              coordinate={selectedLocation}
              pinColor="blue"
              title="Ubicación seleccionada"
            />
          )}
        </MapView>
      ) : (
        <Text>Obteniendo tu ubicación...</Text>
      )}
      <View style={styles.buttonContainer}>
        <Button title="Ir a mi ubicación" onPress={getActualLocation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    elevation: 3,
  },
});

export default Map;
