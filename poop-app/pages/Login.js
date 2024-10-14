import React, { useState } from 'react';
import { View, StyleSheet  } from 'react-native';
import GradientButton from '../components/GradientButton';
import Input from '../components/CustomTextInput';

export default function Login({ navigation }) {
    const [isLogin, setIsLogin] = useState(true); // Estado para controlar la vista

    return (
    <View style={styles.container}>
        <View style={styles.loginContainer}>
            <View style={styles.switchContainer}>
                <GradientButton
                    title="Login"
                    onPress={() => setIsLogin(true)}
                    isPrimary={isLogin}
                    width="40%"
                />
                <GradientButton
                    title="Sign Up"
                    onPress={() => setIsLogin(false)}
                    isPrimary={!isLogin}
                    width="40%"
                />
            </View>
            {isLogin ? (
                <>
                    <Input placeholder="Nombre de usuario/correo..." />
                    <Input placeholder="Contraseña..." secureTextEntry={true} />
                </>
            ) : (
                <>
                    <Input placeholder="Nombre de usuario..." />
                    <Input placeholder="Correo..." />
                    <Input placeholder="Contraseña..." secureTextEntry={true} />
                    <Input placeholder="Confirmar contraseña..." secureTextEntry={true} />
                </>
            )}
            <GradientButton
                title={isLogin ? "Login" : "Sign Up"}
                onPress={() => alert(isLogin ? 'Login pressed' : 'Sign Up pressed')}
                isPrimary={true}
                width="100%"
            />
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
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
});
