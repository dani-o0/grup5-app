import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

const SearchInput = ({ placeholder }) => {
  const [inputText, setInputText] = useState(''); 

  // Maneja el cambio de texto y actualiza el estado
  const handleTextChange = (text) => {
    setInputText(text);  

    const textoGuardado = text;  // Aquí se guarda el texto ingresado
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/lupa.png')} 
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder || "Search..."}  // Placeholder personalizado
        value={inputText}          // Usa el valor del estado como valor del input
        onChangeText={handleTextChange}  // Actualiza el estado cuando cambia el texto
        placeholderTextColor="#ccc"  
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#3A354A',  // Color de fondo oscuro
    borderRadius: 30,            // Bordes redondeados
    paddingHorizontal: 15,       // Espacio a los lados
    paddingVertical: 10,         // Espacio arriba y abajo
    width: '90%',                // Ancho del componente (ajústalo según sea necesario)
    borderWidth: 1,
    borderColor: '#56516A',      // Color del borde
  },
  icon: {
    width: 20,   // Tamaño del ícono
    height: 20,
    tintColor: '#fff',  // Color del ícono
    marginRight: 10,    // Espacio entre el ícono y el TextInput
  },
  input: {
    flex: 1,              // El input toma el espacio restante
    color: '#fff',        // Color del texto
    fontSize: 16,         // Tamaño de la fuente
  }
});

export default SearchInput;
