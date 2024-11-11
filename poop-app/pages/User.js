import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Menu from '../components/Menu';
import TabButton from '../components/TabButton';
import GradientButton from '../components/GradientButton';
import PopUp from '../components/PopUp';
import cat from '../assets/cat.jpg';
import { FIREBASE_AUTH, FIREBASE_STORAGE } from '../firebaseConfig';

export default function User() {
    const navigation = useNavigation();

    return (
        <View style={styles.mainView}>
            <View style={styles.tabView}>
                <View style={styles.imageView}>
                    <Image
                        source={cat}
                        style={styles.image}
                    />
                </View>
                <View style={styles.buttonView}>
                    <GradientButton
                        title="Edit profile"
                        onPress={() => navigation.navigate('EditUser')}
                        isPrimary={true}
                        width="40%"
                    />
                </View>
                <TabButton title='Mis publicaciones' />
                <PopUp text="Log out" dialogText="¿Seguro que quieres cerrar sesión?" onAccept={() => FIREBASE_AUTH.signOut()} tab={true} />
            </View>
            <Menu style={styles.menuView} currentSection={4} />
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#151723',
    },
    tabView: {
        flex: 1,
    },
    imageView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 10, // Un poco de margen vertical para la imagen
    },
    image: {
        width: '50%', // Reduce el ancho al 80%
        height: undefined,
        aspectRatio: 1,
        borderRadius: 50,
        marginTop: 20,
        marginBottom: 20,
        borderColor: '#56516A',
        borderWidth: 1,
    },
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -20, // Eleva los botones un poco más cerca de la imagen
    },
    menuView: {
        flex: 1,
    },
});
