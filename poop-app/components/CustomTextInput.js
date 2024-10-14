import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const CustomTextInput = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#808080"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151723',
    borderRadius: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
    height: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: '#56516A',
    width: '100%',
  },
  input: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default CustomTextInput;