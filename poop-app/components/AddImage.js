import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Para el icono "+"
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

const AddImage = ({placeholder}) => {
  const [selectedImage, setSelectedImage] = useState(placeholder);
  const [status, requestPermission] = MediaLibrary.usePermissions();

  if (status === null) {
    requestPermission();
  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage({uri: result.assets[0].uri});
    } else {
      alert('You did not select any image.');
    }
  };


    return (
        <View style={styles.container}>
          <ImageBackground
            source={selectedImage} // Aquí puedes colocar tu imagen o usar require() si está local.
            style={styles.image}
            imageStyle={{ borderRadius: 10 }} // Bordes redondeados
          >
            <TouchableOpacity style={styles.plusButton}
            onPress={pickImageAsync}>
              <Icon name="add" size={40} color="white" />
            </TouchableOpacity>
          </ImageBackground>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        justifyContent: 'center',
        alignItems: 'center', // Color de fondo oscuro
      },
      image: {
        width: 250, // Ajusta el tamaño de la imagen
        height: 200, // Ajusta el tamaño de la imagen
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.7,
      },
      plusButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente para el botón
        width: 60,
        height: 60,
        borderRadius: 30, // Hace el botón circular
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default AddImage;