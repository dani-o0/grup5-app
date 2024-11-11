import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageDisplay = ({ source, width, height }) => {
  return (
    <View style={styles.container}> 
      <Image 
        source={source} 
        style={{ width, height, borderRadius: 50, borderWidth: 1}}  
        resizeMode="cover"  
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#56516A'
  },
});


export default ImageDisplay;
