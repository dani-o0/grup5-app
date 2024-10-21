import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Usaremos Ionicons, pero puedes elegir cualquier set de iconos

const Rating = ({isView = false, initRating = 0}) => {
    const [rating, setRating] = useState(initRating); // Estado para manejar la calificación seleccionada
    const [halfStar, setHalfStar] = useState(false); // Para saber si la última estrella es media

    useEffect(() => {
        setRating(initRating);
    }, [initRating]);

    const handleStarPress = (value) => {
        if (value === rating) {
            if (halfStar) {
                // Si ya está media estrella, la llenamos completamente
                setHalfStar(false);
            } else {
                // Si no hay media estrella, la ponemos
                setHalfStar(true);
            }
            } else {
            // Si la estrella seleccionada es diferente a la actual, actualizamos la calificación y quitamos la media estrella
            setRating(value);
            setHalfStar(true);
        }
  };

  return (
    <View style={styles.container}>
      {/* Generamos 5 estrellas */}
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity key={star} onPress={() => handleStarPress(star)} disabled={isView}>
          <Icon
            name={
                star < rating || (star === rating && !halfStar)
                  ? "star" // Estrella llena
                  : star === rating && halfStar
                  ? "star-half" // Media estrella
                  : "star-outline" // Estrella vacía
              }
            size={40}
            color={star <= rating ? "#FFD700" : "#FFFFFF"} // Color dorado si está seleccionada, blanco si no
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