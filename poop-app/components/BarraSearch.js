import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const SearchInput = ({ placeholder }) => {
  const [inputText, setInputText] = useState(''); 

  const handleTextChange = (text) => {
    setInputText(text);  
    const textoGuardado = text;  // Aquí se guarda el texto ingresado
  };

  return (
    <View style={styles.container}>
      <Icon name="search" size={24} color="#FFFFFF" style={styles.icon} /> 
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
    alignItems: 'center',        // Alinea el icono verticalmente en el centro
  },
  icon: {
    marginRight: 10,    // Espacio entre el ícono y el TextInput
  },
  input: {
    flex: 1,              // El input toma el espacio restante
    color: '#fff',        // Color del texto
    fontSize: 16,         // Tamaño de la fuente
  }
});

export default SearchInput;
