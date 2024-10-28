import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const StaticRating = ({ rating }) => {
  const fullStars = Math.floor(rating); // Cantidad de estrellas llenas
  const halfStar = rating - fullStars >= 0.5; // Si hay media estrella
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Estrellas vacías

  return (
    <View style={styles.container}>
      {/* Mostrar estrellas llenas */}
      {Array(fullStars).fill().map((_, index) => (
        <Icon key={`full-${index}`} name="star" size={30} color="#FFD700" />
      ))}

      {/* Mostrar media estrella si es necesario */}
      {halfStar && <Icon name="star-half" size={30} color="#FFD700" />}

      {/* Mostrar estrellas vacías */}
      {Array(emptyStars).fill().map((_, index) => (
        <Icon key={`empty-${index}`} name="star-outline" size={30} color="#FFD700" />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Colocamos las estrellas en una fila
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StaticRating;
