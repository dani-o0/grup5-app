import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const CommentDescriptionInput = ({ placeholder, color, initialHeight, onChangeText }) => {
  const [inputHeight, setInputHeight] = useState(initialHeight);

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <TextInput
        style={[styles.input, { height: inputHeight }]}
        placeholder={placeholder}
        placeholderTextColor="#FFFFFF"
        multiline={true}
        onChangeText={onChangeText}  // Prop para capturar el texto
        onContentSizeChange={(event) =>
          setInputHeight(Math.max(initialHeight, event.nativeEvent.contentSize.height))
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: '#56516A',
    width: '100%',
  },
  input: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlignVertical: 'top',
  },
});

export default CommentDescriptionInput;
