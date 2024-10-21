import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageDisplay = ({ source, width, height }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={source} 
        style={{ width, height }}  // Aplica el ancho y altura como estilo
        resizeMode="contain" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImageDisplay;
