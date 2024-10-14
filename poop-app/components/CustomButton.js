import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const CustomButton = (title, onPress) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title={title} onPress={onPress} color='transparent'/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 168,
    height: 60,
  },
  button: {
    width: 168,
    height: 60,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 15,
    paddingBottom: 16,
    backgroundColor: 'linear-gradient(90deg, rgba(67, 196, 210, 1), rgba(1, 73, 255, 1))',
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    lineHeight: 24,
    color: 'white',
  },
});

export default Button;