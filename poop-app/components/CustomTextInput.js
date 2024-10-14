import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const CustomTextInput = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#808080" // Color gris para el placeholder
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151723', // Color de fondo del rectángulo
    borderRadius: 25, // Bordes redondeados
    paddingHorizontal: 20, // Espacio interno
    justifyContent: 'center',
    height: 50, // Altura del campo de texto
    margin: 5,
    borderWidth: 2, // Grosor del borde
    borderColor: '#2E2942', // Color del borde
  },
  input: {
    fontSize: 16, // Tamaño del texto
    color: '#FFFFFF', // Color del texto
  },
});

export default CustomTextInput;