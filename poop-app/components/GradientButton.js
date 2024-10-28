import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const GradientButton = ({ title, onPress, isPrimary, width, isIcon, icon }) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.button, { width }, !isPrimary && styles.borderButton]}
    >
      <LinearGradient
        colors={isPrimary ? ['#43C4D2', '#0149FF'] : ['#151723', '#151723']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.gradient]}
      >
        {isIcon ? <Icon name={icon} size={24} color="#FFFFFF"/> : <Text style={styles.buttonText}>{title}</Text>}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    overflow: 'hidden',
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
