// components/Button.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientButton = ({ title, onPress, isPrimary, width }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { width }, !isPrimary && styles.borderButton,]}>
      <LinearGradient
        colors={isPrimary ? ['#43C4D2', '#0149FF'] : ['#151723', '#151723']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.gradient]}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    overflow: 'hidden',
    width: '100%',
    margin: 10,
  },
  borderButton: {
    borderWidth: 1,
    borderColor: '#56516A',
  },
  gradient: {
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default GradientButton;
