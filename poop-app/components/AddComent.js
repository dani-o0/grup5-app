import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import GradientButton from './GradientButton';
import CustomDescriptionInput from './CustomDescriptionInput';



const AddComent = ({ text, dialogText, width, textImputColor, textImputMinimunHeight}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [commentText, setCommentText] = useState(''); // Estado para el texto del comentario

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleAccept = () => {
    // Guarda la fecha y el usuario que creó el comentario
    const date = new Date().toLocaleDateString(); 
    const user = "UsuarioEjemplo"; // Aquí iría el usuario actual, en este caso es un texto simulado
    closeModal();
    
    // Almacenar las variables para usarlas después
    const commentData = {
      text: commentText,
      date,
      user,
    };
    
    console.log("Comentario guardado:", commentData); // Imprime para verificar que se guardó

    // Llama a la función de aceptación y cierra el modal
    closeModal();

  };

  return (
    <View>
      <GradientButton title={text} onPress={openModal} isPrimary={true} width={width} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <CustomDescriptionInput placeholder= {dialogText} color= {textImputColor} initialHeight= {textImputMinimunHeight} onChangeText={setCommentText}/>

            
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
    alignItems: 'center',
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
});

export default AddComent;