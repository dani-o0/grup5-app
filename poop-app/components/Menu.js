import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // O usa otro set de íconos como FontAwesome
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation


const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Icon name="home" size={24} color="#FFFFFF" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Search')}>
        <Icon name="search" size={24} color="#FFFFFF" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Add')}>
        <Icon name="add" size={24} color="#FFFFFF" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('User')}>
        <Icon name="person" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row', // Pone los botones en fila
    justifyContent: 'space-evenly', // Distribuye los botones uniformemente
    alignItems: 'center',
    backgroundColor: '#2E2942', // Color de fondo del menú
    borderRadius: 30, // Bordes redondeados
    padding: 10,
    position: 'absolute',
    bottom: 20, // Ubicación en el footer
    left: 20,
    right: 20,
    borderColor: '#56516A',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#151723', // Fondo de los botones
    padding: 10, // Espacio interno del botón
    borderRadius: 20, // Bordes redondeados de los botones
    borderColor: '#56516A',
    borderWidth: 1,
  },
});

export default Menu;