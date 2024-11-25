import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Para el icono "+"
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

const { width } = Dimensions.get('window');

const AddImage = ({ placeholder, onImageSelected }) => {
  const [selectedImage, setSelectedImage] = useState(placeholder);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = { uri: result.assets[0].uri };
      setSelectedImage(imageUri);
      onImageSelected(imageUri); // Notificar la imagen seleccionada
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={selectedImage}
        style={styles.image}
        imageStyle={{ borderRadius: 10 }}
      >
        <TouchableOpacity style={styles.plusButton} onPress={pickImageAsync}>
          <Icon name="add" size={width * 0.1} color="white" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.7, // 70% del ancho de la pantalla
    height: width * 0.5, // 50% del ancho de la pantalla
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
  },
  plusButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: width * 0.15, // 15% del ancho de la pantalla para el botón
    height: width * 0.15,
    borderRadius: (width * 0.15) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddImage;
