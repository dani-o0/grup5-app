import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import Menu from '../components/Menu';
import AddImage from '../components/AddImage';
import Rating from '../components/Rating';
import Input from '../components/CustomTextInput';
import Map from '../components/Map';
import GradientButton from '../components/GradientButton';
import DescriptionInput from '../components/DescriptionInput';
import { addDoc, collection } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { FIREBASE_AUTH, FIREBASE_STORAGE } from '../firebaseConfig';

export default function Add() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [location, setLocation] = useState(null);
  const [image, setImage] = useState(null);

  const auth = FIREBASE_AUTH;
  const firestore = FIREBASE_STORAGE;
  const storage = getStorage();

  const handleSubmit = async () => {
    const user = auth.currentUser;

    if (!image || !name || !description || !location) {
      Alert.alert("Error", "Debe completar todos los campos.");
      return;
    }

    try {
      // Subir imagen a Firebase Storage
      const imageRef = ref(storage, `images/${user.uid}-${Date.now()}.jpg`);
      const response = await fetch(image.uri);
      const blob = await response.blob();
      await uploadBytes(imageRef, blob);
      const imageUrl = await getDownloadURL(imageRef);

      // Crear y guardar el documento en Firestore
      const newPublication = {
        name,
        description,
        rating,
        location,
        imageUrl,
        userId: user.uid,
        timestamp: new Date().toISOString(),
      };

      await addDoc(collection(firestore, 'Lavabos'), newPublication);
      Alert.alert("Éxito", "Publicación subida correctamente.");
      setName('');
      setDescription('');
      setRating(0);
      setLocation(null);
      setImage(null);
    } catch (error) {
      console.error("Error al subir la publicación:", error);
      Alert.alert("Error", "No se pudo subir la publicación. Inténtelo de nuevo.");
    }
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.tabView}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <AddImage placeholder={require('../assets/addImage1.jpg')} onImageSelected={setImage} />
          <Input placeholder="Nombre..." secondary={true} value={name} onChangeText={setName} />
          <Rating onChange={setRating} />
          <View style={styles.mapContainer}>
            <Map isSelectable={true} onLocationSelect={setLocation} />
          </View>
          <DescriptionInput placeholder="Descripción..." secondary={true} value={description} onChangeText={setDescription} />
          <GradientButton title="Subir" onPress={handleSubmit} isPrimary={true} width="40%" />
        </ScrollView>
      </View>
      <Menu style={styles.menuView} currentSection={3} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#151723',
  },
  tabView: {
    flex: 7,
    width: '100%',
  },
  mapContainer: {
    width: '100%',
    height: 300,
    marginVertical: 20,
    paddingHorizontal: 0,
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  menuView: {
    flex: 1,
  },
});
