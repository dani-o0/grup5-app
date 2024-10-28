import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const TabButton = ({ title, onPress, width }) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.button, { width }]}
    >
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2E2942',
    borderRadius: 15,
    width: '100%',
    margin: 10,
    borderWidth: 1,
    borderColor: '#56516A',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default TabButton;
