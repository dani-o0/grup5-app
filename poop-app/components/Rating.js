import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Usaremos Ionicons, pero puedes elegir cualquier set de iconos

const Rating = ({ onChange }) => {
  const [rating, setRating] = useState(0);
  const [halfStar, setHalfStar] = useState(false);

  const handleStarPress = (value) => {
    if (value === rating && halfStar) {
      setHalfStar(false);
    } else if (value === rating && !halfStar) {
      setHalfStar(true);
    } else {
      setRating(value);
      setHalfStar(true);
    }
    onChange(halfStar ? value - 0.5 : value); // Enviar el valor actualizado
  };

  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
          <Icon
            name={star < rating || (star === rating && !halfStar) ? "star" : star === rating && halfStar ? "star-half" : "star-outline"}
            size={40}
            color="#FFD700"
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Poner las estrellas en una fila
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Rating;