import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Button, ActivityIndicator } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import * as ActualLocation from 'expo-location';
import { collection, getDocs } from 'firebase/firestore'; // Importar Firestore y métodos
import { FIREBASE_STORAGE } from '../firebaseConfig'; // Importar la configuración de Firebase
import LocationPopUp from './LocationPopUp';


const Map = () => {
  const navigation = useNavigation();
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState(null);

  const fetchLocations = async () => {
    try {
        const querySnapshot = await getDocs(collection(FIREBASE_STORAGE, 'Lavabos')); // Asumiendo que tienes una colección 'questions'
        const items = [];
        querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() }); // Extrae los datos y agrega el id
        });
        setLocations(items); // Almacena los datos en el estado
        setLoading(false); // Detener el indicador de carga
    } catch (error) {
        console.error('Error obteniendo los datos de Firebase:', error);
    }
};

  const getActualLocation = async () => {
    // Solicita permisos
    let { status } = await ActualLocation.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        console.log('Permiso de ubicación denegado');
        return;
    }

    // Obtiene la ubicación actual
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

    return (
        <View style={{ flex: 1, width: '100%', height: '100%' }}>
          {region ? (
                <MapView
                  style={styles.map}
                  region={region}
                  onRegionChangeComplete={(newRegion) => setRegion(newRegion)} // Actualiza la región en cambios
                >
                  {locations.map((location) => (
                      <Marker
                        key={location.id}
                        coordinate={{
                          latitude: location.location.latitude,
                          longitude: location.location.longitude,
                        }}
                      >
                        <Callout tooltip onPress={() =>
                          navigation.navigate('Card', {
                            name: location.name,
                            imageURL: location.imageUrl,
                            rating: location.rating,
                            description: location.descripcion,
                            author: location.autor,
                            location: location.location,
                            creationDate: location.fechaCreacion,
                            comments: location.comentarios
                          })
                        }>
                          <LocationPopUp
                            name={location.name}
                            image={location.imageUrl}
                            rating={location.rating}
                          />
                        </Callout>
                      </Marker>
                  ))}
                  </MapView>
          ) : (
            <Text>Obteniendo tu ubicación...</Text>
        )}
            <View style={styles.buttonContainer}>
                <Button title="Ir a mi ubicación" onPress={getActualLocation} />
            </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      map: {
        width: '100%',
        height: '100%', // El mapa ocupará toda la pantalla
      },
      title: {
        fontSize: 24, // Tamaño de fuente del título
        fontWeight: 'bold', // Negrita
        textAlign: 'center', // Centrado
        marginVertical: 20, // Margen vertical para separar del mapa
      },
      markerImage: {
        width: 30, // Ajusta el ancho
        height: 50, // Ajusta la altura
    },
    buttonContainer: {
      position: 'absolute',
      top: 20, // Espacio desde la parte superior
      right: 20, // Espacio desde la derecha
      zIndex: 1, // Asegúrate de que el botón esté encima del mapa
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 10,
      elevation: 3, // Añade sombra en Android
  },
  PopUp: {
    flex: 1,
    width: '100%'
},
});

export default Map;
