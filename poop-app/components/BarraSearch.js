import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchInput = ({ placeholder }) => {
  const [inputText, setInputText] = useState(''); 

  // Función para manejar el cambio de texto en el input
  const handleTextChange = (text) => {
    setInputText(text);  
  };

  // Función que se llama al presionar el botón de búsqueda
  const handleSearch = () => {
    const textoGuardado = inputText;  // Guarda el texto actual
    console.log("Texto buscado:", textoGuardado); // Esto es para provar, imprime el texto buscado
  };

  return (
    <View style={styles.container}>
      <Icon name="search" size={24} color="#FFFFFF" style={styles.icon} /> 
      <TextInput
        style={styles.input}
        placeholder={placeholder || "Search..."}
        value={inputText}
        onChangeText={handleTextChange}
        placeholderTextColor="#ccc"  
      />
      
      <TouchableOpacity onPress={handleSearch}>
        <Icon name="arrow-forward" size={24} color="#FFFFFF" style={styles.iconSearch} /> 
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#3A354A',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '90%',
    borderWidth: 1,
    borderColor: '#56516A',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  iconSearch: {
    marginLeft: 10, // Espacio entre el input y el botón de búsqueda
  },
});

export default SearchInput;
