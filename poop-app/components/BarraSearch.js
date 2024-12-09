import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BarraSearch = ({ placeholder, onTextChange, handleSearch }) => {
  const [inputText, setInputText] = useState(''); // Estado interno para el texto de búsqueda

  // Función para manejar el cambio de texto en el input
  const handleTextChange = (text) => {
    setInputText(text); // Actualiza el estado interno
    if (onTextChange) {
      onTextChange(text); // Llama al callback proporcionado desde el componente padre
    }
  };

  return (
    <View style={styles.container}>
      {/* Ícono de lupa al inicio */}
      <Icon name="search" size={24} color="#FFFFFF" style={styles.icon} />
      
      {/* Caja de texto para la búsqueda */}
      <TextInput
        style={styles.input}
        placeholder={placeholder || "Buscar..."} // Placeholder personalizado
        value={inputText} // Conecta el valor al estado interno
        onChangeText={handleTextChange} // Llama a la función cuando el texto cambia
        placeholderTextColor="#ccc" // Color del texto del placeholder
      />
      
      {/* Botón de enviar búsqueda */}
      <TouchableOpacity onPress={handleSearch}>
        <Icon name="refresh" size={24} color="#FFFFFF" style={styles.iconSearch} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Disposición horizontal
    backgroundColor: '#3A354A', // Color de fondo oscuro
    borderRadius: 30, // Bordes redondeados
    paddingHorizontal: 15, // Padding interno horizontal
    paddingVertical: 10, // Padding interno vertical
    width: '90%', // Anchura del componente
    borderWidth: 1, // Borde visible
    borderColor: '#56516A', // Color del borde
    alignItems: 'center', // Alineación vertical de los elementos
  },
  icon: {
    marginRight: 10, // Espacio entre el ícono y la caja de texto
  },
  input: {
    flex: 1, // Ocupa el espacio restante en la fila
    color: '#fff', // Color del texto
    fontSize: 16, // Tamaño del texto
  },
  iconSearch: {
    marginLeft: 10, // Espacio entre el input y el ícono de búsqueda
  },
});

export default BarraSearch;
