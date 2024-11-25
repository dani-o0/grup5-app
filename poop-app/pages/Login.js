import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import GradientButton from '../components/GradientButton';
import Input from '../components/CustomTextInput';
import logo from '../assets/LogoLetrasB.png';
import { FIREBASE_AUTH, FIREBASE_STORAGE } from '../firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export default function Login({ navigation }) {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Estado de carga
    const auth = FIREBASE_AUTH;
    const firestore = FIREBASE_STORAGE;

    const createUserInFirestore = async (user, displayName) => {
        try {
            const userRef = doc(firestore, 'Users', user.uid);
            const docSnapShot = await getDoc(userRef);
            if (!docSnapShot.exists()) {
                await setDoc(userRef, {
                    username: displayName,
                    email: user.email,
                    profilePicture: '',
                });
                console.log('Usuario creado en Firestore:', user.uid);
            }
        } catch (error) {
            console.error('Error al crear el usuario en Firestore:', error.message);
        }
    };

    const signIn = async () => {
        const cleanEmail = email.trim();
        const cleanPassword = password.trim();
        setIsLoading(true); // Activar carga
        try {
            const response = await signInWithEmailAndPassword(auth, cleanEmail, cleanPassword);
            console.log(response);
            setTimeout(() => { // Simular un tiempo de carga
                setIsLoading(false); 
                navigation.replace('Home'); // Navegar al inicio (Home) después de iniciar sesión
            }, 2000);
        } catch (error) {
            setIsLoading(false); // Desactivar carga en caso de error
            console.error('Error durante el inicio de sesión:', error.message);
        }
    };

    const signUp = async () => {
        const cleanEmail = email.trim();
        const cleanPassword = password.trim();
        setIsLoading(true); // Activar carga
        try {
            const response = await createUserWithEmailAndPassword(auth, cleanEmail, cleanPassword);
            createUserInFirestore(response.user, username);
            console.log(response);
            setTimeout(() => { // Simular un tiempo de carga
                setIsLoading(false);
                navigation.replace('Home'); // Navegar al inicio (Home) después del registro
            }, 2000);
        } catch (error) {
            setIsLoading(false); // Desactivar carga en caso de error
            console.error('Error durante el registro:', error.message);
        }
    };

    // Mostrar SplashScreen si está cargando
    if (isLoading) {
        navigation.replace('SplashScreen');
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image source={logo} style={styles.image} resizeMode="contain" />
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
                        <Input placeholder="Correo electrónico..." value={email} onChangeText={setEmail} />
                        <Input placeholder="Contraseña..." secureTextEntry={true} value={password} onChangeText={setPassword} />
                        <GradientButton title={"Login"} onPress={signIn} isPrimary={true} width="100%" />
                    </>
                ) : (
                    <>
                        <Input placeholder="Nombre de usuario..." value={username} onChangeText={setUsername} />
                        <Input placeholder="Correo..." value={email} onChangeText={setEmail} />
                        <Input placeholder="Contraseña..." secureTextEntry={true} value={password} onChangeText={setPassword} />
                        <Input placeholder="Confirmar contraseña..." secureTextEntry={true} />
                        <GradientButton title={"Sign Up"} onPress={signUp} isPrimary={true} width="100%" />
                    </>
                )}
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
