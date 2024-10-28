import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import GradientButton from './GradientButton';
import TabButton from './TabButton';

const PopUp = ({ text, dialogText, width, onAccept, tab }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleAccept = () => {
    closeModal();
    onAccept();
  };

  const buttonType = () => {
    if (tab)
      <TabButton title={text} onPress={openModal}/>
    else
      <GradientButton title={text} onPress={openModal} isPrimary={true} width={width} />
  }

  return (
    <View>
      {tab ? (<TabButton title={text} onPress={openModal}/>) : (<GradientButton title={text} onPress={openModal} isPrimary={true} width={width} />)}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{dialogText}</Text>
            
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
  modalText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
});

export default PopUp;
