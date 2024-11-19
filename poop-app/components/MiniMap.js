import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Este es el componente MiniMap simplificado
const MiniMap = ({
  size = { width: 150, height: 150 },  // Tamaño por defecto
  latitude = 37.78825,  // Latitud por defecto
  longitude = -122.4324,  // Longitud por defecto
  marker = true,  // Si queremos mostrar un marcador
}) => {
  // Estilos dinámicos para el mapa
  const mapStyle = {
    width: size.width,
    height: size.height,
  };

  // Renderizar marcador personalizado si existe
  const renderMarker = () => {
    if (!marker) return null;

      // Si se pasa un componente como marcador
      return (
        <Marker
          key={0}
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
        >
        </Marker>
      )
  };

  return (
    <View style={{ margin: 10 }}>
      <MapView
        style={mapStyle}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {renderMarker()}
      </MapView>
    </View>
  );
};

export default MiniMap;
