import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const DescriptionInput = ({ placeholder, secondary, value, onChangeText }) => {
  return (
    <View style={[styles.container, { backgroundColor: secondary ? '#2E2942' : '#151723' }]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#808080"
        multiline
        value={value}
        onChangeText={onChangeText} // Prop para enviar el texto actualizado
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#56516A',
    paddingHorizontal: 10,
    justifyContent: 'center',
    height: 150,
    margin: 10,
    width: '100%',
  },
  input: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlignVertical: 'top', // Alinea el texto al inicio del campo
  },
});

export default DescriptionInput;
