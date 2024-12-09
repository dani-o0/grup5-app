import React from 'react';
import { View, StyleSheet, Text, Image, ActivityIndicator } from 'react-native';
import logo from '../assets/LogoLetrasB.png';

export default function SplashScreen({ navigation }) {
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
                <Text style={[{ color: "#FFFFFF" }]}>Bienvenido de vuelta. ¿Tienes un apretón?</Text>
            </View>

            {/* Aquí está el contenedor con la rueda de carga y el texto "Cargando" */}
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#FFFFFF" />
                <Text style={styles.loadingText}>Cargando...</Text>
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
        marginTop: 30,
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
    loadingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20, 
    },
    loadingText: {
        color: '#FFFFFF',
        marginLeft: 10,
    },
});
