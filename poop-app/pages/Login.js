import React, { useState } from 'react';
import { View, StyleSheet, Image  } from 'react-native';
import GradientButton from '../components/GradientButton';
import Input from '../components/CustomTextInput';
import logo from '../assets/LogoLetrasB.png';

export default function Login({ navigation }) {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
    <View style={styles.container}>
        <View style={styles.imageView}>
            <Image
                source={logo}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
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
                    <Input placeholder="Nombre de usuario/correo..." value={username} onChangeText={setUsername}/>
                    <Input placeholder="Contraseña..." secureTextEntry={true} value={password} onChangeText={setPassword}/>
                </>
            ) : (
                <>
                    <Input placeholder="Nombre de usuario..." value={username} onChangeText={setUsername}/>
                    <Input placeholder="Correo..." value={email} onChangeText={setEmail}/>
                    <Input placeholder="Contraseña..." secureTextEntry={true} value={password} onChangeText={setPassword}/>
                    <Input placeholder="Confirmar contraseña..." secureTextEntry={true} />
                </>
            )}
            <GradientButton
                title={isLogin ? "Login" : "Sign Up"}
                onPress={() => navigation.navigate('Home')}
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
    imageView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
    },
    image: {
        width: '50%',
        height: undefined,
        aspectRatio: 1,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
});
