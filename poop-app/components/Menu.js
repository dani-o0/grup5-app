import React, {useState} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // O usa otro set de íconos como FontAwesome
import LinearGradient from 'react-native-linear-gradient'; // Importa el componente de gradiente


const Menu = () => {
  // Estado para determinar cuál es la página activa
  const [activePage, setActivePage] = useState('home');

  // Función para determinar si el botón es activo
  const isActive = (page) => activePage === page;

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.button} onPress={() => setActivePage('home')}>
        {isActive('home') ? (
          <LinearGradient
            colors={['#00F0FF', '#008FFF']}
            style={styles.gradientButton}
          >
            <Icon name="home" size={24} color="#FFFFFF" />
          </LinearGradient>
        ) : (
          <Icon name="home" size={24} color="#FFFFFF" />
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setActivePage('search')}>
        {isActive('search') ? (
          <LinearGradient
            colors={['#00F0FF', '#008FFF']}
            style={styles.gradientButton}
          >
            <Icon name="search" size={24} color="#FFFFFF" />
          </LinearGradient>
        ) : (
          <Icon name="search" size={24} color="#FFFFFF" />
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setActivePage('add')}>
        {isActive('add') ? (
          <LinearGradient
            colors={['#00F0FF', '#008FFF']}
            style={styles.gradientButton}
          >
            <Icon name="add" size={24} color="#FFFFFF" />
          </LinearGradient>
        ) : (
          <Icon name="add" size={24} color="#FFFFFF" />
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setActivePage('person')}>
        {isActive('person') ? (
          <LinearGradient
            colors={['#00F0FF', '#008FFF']}
            style={styles.gradientButton}
          >
            <Icon name="person" size={24} color="#FFFFFF" />
          </LinearGradient>
        ) : (
          <Icon name="person" size={24} color="#FFFFFF" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#151723',
    borderRadius: 30,
    padding: 10,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  button: {
    backgroundColor: '#2E2942',
    padding: 10,
    borderRadius: 20,
  },
  gradientButton: {
    padding: 10,
    borderRadius: 20, // Asegura que los bordes del gradiente sean redondeados
  },
});

export default Menu;