import { React, useState} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Menu from '../components/Menu';
import Input from '../components/CustomTextInput'
import GradientButton from '../components/GradientButton';
import cat from '../assets/cat.jpg';
import { FIREBASE_AUTH, FIREBASE_STORAGE } from '../firebaseConfig';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';

export default function EditUser() {
    const navigation = useNavigation();
    const [displayName, setDisplayName] = useState('');

    const updateProfile = async (uid, newProfileData) => {
        try {
            const userRef = doc(FIREBASE_STORAGE, 'Users', uid);
            await updateDoc(userRef, newProfileData);
            console.log('Informacion del usuario actualizada en Firestore: ', uid);
        } catch (error) {
            console.error('Error al actualizar la informacion del usuario en Firestore: ', error.message);
        }
    }

    return (
        <View style={styles.mainView}>
            <View style={styles.tabView}>
                <View style={styles.buttonView}>
                    <Input placeholder="Nombre de usuario..." value={displayName} onChangeText={setDisplayName} secondary={true}/>
                    <GradientButton
                        title="Save changes"
                        onPress={() => updateProfile(FIREBASE_AUTH.currentUser.uid, {
                            username: displayName,
                        })}
                        isPrimary={true}
                        width="40%"
                    />
                </View>
            </View>
            <Menu style={styles.menuView} currentSection={4}/>
        </View>
    );
}


const styles = StyleSheet.create({
    mainView:
    {
        flex: 1,
        backgroundColor: '#151723',
    },
    tabView:
    {
        flex: 7,
        width: '100%',
        height: '50%',
        justifyContent: 'center',
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
        borderColor: '#56516A',
        borderWidth: 1,
    },
    buttonView:
    {
        alignItems: 'center', 
        justifyContent: 'center',
    },
    menuView:
    {
        flex: 1,
    },
  });