import React from 'react';
import { View, StyleSheet  } from 'react-native';
import GradientButton from '../components/GradientButton';
import Input from '../components/CustomTextInput';

export default function Login({ navigation }) {
    return (
    <View style={styles.container}>
        <View style={styles.loginContainer}>
            <Input placeholder='Nombre de usuario/correo...'/>
            <Input placeholder='Contraseña...'/>
            <GradientButton title="Login" onPress={() => alert('Login pressed')} width='50%'/>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151723',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer: {
        width: '80%',
        backgroundColor: '#2E2942',
        borderRadius: 30,
        borderColor: '#56516A',
        borderWidth: 1,
        padding: 20,
        alignItems: 'center',
    },
});
