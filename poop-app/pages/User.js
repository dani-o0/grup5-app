import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { doc, getDoc } from 'firebase/firestore';

import Menu from '../components/Menu';
import TabButton from '../components/TabButton';
import PopUp from '../components/PopUp';
import { FIREBASE_AUTH, FIREBASE_STORAGE } from '../firebaseConfig';


export default function User() {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchUsername = async () => {
            try {
                const userRef = doc(FIREBASE_STORAGE, 'Users', FIREBASE_AUTH.currentUser.uid);
                const userDoc = await getDoc(userRef);
                if (userDoc.exists()) {
                    setUsername(userDoc.data().username);
                }
            } catch (error) {
                console.error('Error al obtener el username:', error);
            }
        };

        fetchUsername();
    }, []);

    return (
        <View style={styles.mainView}>
            <View style={styles.tabView}>
                <Text style={styles.usernameText}>{username}</Text>
                <View style={styles.buttonsContainer}>
                    <TabButton 
                        title="Edit profile" 
                        onPress={() => navigation.navigate('EditUser')}
                        style={styles.tabButton}
                    />
                    <TabButton 
                        title='Mis publicaciones' 
                        onPress={() => navigation.navigate('MyPublications')}
                        style={styles.tabButton}
                    />
                    <PopUp 
                        text="Log out" 
                        dialogText="¿Seguro que quieres cerrar sesión?" 
                        onAccept={() => FIREBASE_AUTH.signOut()} 
                        tab={true}
                        style={styles.tabButton}
                    />
                </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    menuView: {
        flex: 1,
    },
    usernameText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonsContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    tabButton: {
        marginVertical: 5,
    },
});
