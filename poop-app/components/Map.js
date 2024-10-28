import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';

const locations = [
    {
      title: "Madrid",
      description: "Capital de España",
      coordinate: {
        latitude: 40.4168, 
        longitude: -3.7038,
      },
    },
    {
      title: "Barcelona",
      description: "Ciudad conocida por su arquitectura",
      coordinate: {
        latitude: 41.3851, 
        longitude: 2.1734,
      },
    },
    {
      title: "Valencia",
      description: "Famosa por la paella",
      coordinate: {
        latitude: 39.4699, 
        longitude: -0.3763,
      },
    },
    {
      title: "Sevilla",
      description: "Conocida por su cultura flamenca",
      coordinate: {
        latitude: 37.3886,
        longitude: -5.9823,
      },
    },
    {
      title: "Bilbao",
      description: "Famosa por el Museo Guggenheim",
      coordinate: {
        latitude: 43.2630,
        longitude: -2.9340,
      },
    },
    {
      title: "Santiago de Compostela",
      description: "Destino de peregrinación",
      coordinate: {
        latitude: 42.8782,
        longitude: -8.5446,
      },
    },
  ];

const Map = () => {
  const [region, setRegion] = useState(null);

  const getLocation = async () => {
    // Solicita permisos
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        console.log('Permiso de ubicación denegado');
        return;
    }

    // Obtiene la ubicación actual
    let location = await Location.getCurrentPositionAsync({});
    setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });
};

  useEffect(() => {
    getLocation();
}, []);

    return (
        <View style={{ flex: 1, width: '100%', height: '100%' }}>
          <MapView
            style={styles.map}
            initialRegion={region}
            provider={MapView.PROVIDER_GOOGLE}
          >
            {locations.map((location, index) => (
              <Marker
                key={index} // Asignar una key única para cada marcador
                coordinate={location.coordinate}
                anchor={{ x: 0.5, y: 1 }} // Ajusta el ancla para centrar el marcador
                >
                <Image
                        source={{ uri: 'https://play-lh.googleusercontent.com/5WifOWRs00-sCNxCvFNJ22d4xg_NQkAODjmOKuCQqe57SjmDw8S6VOSLkqo6fs4zqis' }}
                        style={styles.markerImage}
                    />
              
                <Callout>
                  <View>
                    <Text>{location.title}</Text>
                    <Text>{location.description}</Text>
                  </View>
                </Callout>
              </Marker>
            ))}
          </MapView>
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
});

export default Map;
