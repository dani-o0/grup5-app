import React, { useState } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
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
    const [isLoading, setIsLoading] = useState(false);
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
            Alert.alert('Error', 'Hubo un problema al crear el usuario en Firestore');
        }
    };

    const signIn = async () => {
        const cleanEmail = email.trim();
        const cleanPassword = password.trim();
        setIsLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, cleanEmail, cleanPassword);
            console.log(response);
            setTimeout(() => {
                setIsLoading(false);
                navigation.replace('Home');
            }, 2000);
        } catch (error) {
            setIsLoading(false);
            console.error('Error durante el inicio de sesión:', error.message);
            if (error.code === 'auth/invalid-email') {
                Alert.alert('Error', 'El correo electrónico ingresado no es válido.');
            } else if (error.code === 'auth/invalid-credential') {
                Alert.alert('Error', 'La contraseña es incorrecta.');
            } else if (error.code === 'auth/wrong-password') {
                Alert.alert('Error', 'La contraseña es incorrecta.');
            } else if (error.code === 'auth/user-not-found') {
                Alert.alert('Error', 'No se encontró una cuenta con este correo electrónico.');
            } else {
                Alert.alert('Error', 'Hubo un problema durante el inicio de sesión. Intente nuevamente.');
            }
            // Regresar a la pantalla de login si hay error
            navigation.navigate('Login');
        }
    };

    const signUp = async () => {
        const cleanEmail = email.trim();
        const cleanPassword = password.trim();
        setIsLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, cleanEmail, cleanPassword);
            createUserInFirestore(response.user, username);
            console.log(response);
            setTimeout(() => {
                setIsLoading(false);
                navigation.replace('Home');
            }, 2000);
        } catch (error) {
            setIsLoading(false);
            console.error('Error durante el registro:', error.message);
            if (error.code === 'auth/invalid-email') {
                Alert.alert('Error', 'El correo electrónico ingresado no es válido.');
            } else if (error.code === 'auth/email-already-in-use') {
                Alert.alert('Error', 'Este correo electrónico ya está registrado.');
            } else if (error.code === 'auth/weak-password') {
                Alert.alert('Error', 'La contraseña es demasiado débil. Debe tener al menos 6 caracteres.');
            } else {
                Alert.alert('Error', 'Hubo un problema durante el registro. Intente nuevamente.');
            }
            // Regresar a la pantalla de login si hay error
            navigation.navigate('Login');
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
