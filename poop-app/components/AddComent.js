import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import GradientButton from './GradientButton';
import TabButton from './TabButton';
import DescriptionInput from '../components/DescriptionInput';

const AddComent = ({ text, dialogText, width, onAccept, tab }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState(''); // Estado para la descripción

  const openModal = () => {
    setModalVisible(true);
  };
  
  const closeModal = () => {
    setModalVisible(false);
  };

  const handleAccept = () => {
    closeModal();
    onAccept(description); // Pasa la descripción como argumento a onAccept
  };

  return (
    <View>
      {tab ? (
        <TabButton title={text} onPress={openModal} />
      ) : (
        <GradientButton title={text} onPress={openModal} isPrimary={true} width={width} />
      )}
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <DescriptionInput 
              placeholder={dialogText} 
              secondary={true} 
              value={description} // Pasa el valor de la descripción
              onChangeText={setDescription} // Actualiza el estado al escribir
            />
            <View style={styles.buttonContainer}>
              <GradientButton title="Aceptar" onPress={handleAccept} isPrimary={true} width="40%" />
              <GradientButton title="Cerrar" onPress={closeModal} isPrimary={false} width="40%" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    modalView: {
      width: 300,
      backgroundColor: '#151723',
      borderRadius: 20,
      padding: 35,
      alignItems: 'flex-start',  // Cambia para alinear los elementos al inicio
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      borderWidth: 1,
      borderColor: '#56516A',
    },
    modalText: {
      fontSize: 16,
      marginBottom: 15,
      textAlign: 'left',  // Cambia a 'left' para alinear el texto al inicio
      color: 'white',
      width: '100%',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      width: '100%',
    },
  });
  

export default AddComent;
