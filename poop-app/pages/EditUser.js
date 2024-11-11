import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Menu from '../components/Menu';
import Input from '../components/CustomTextInput'
import GradientButton from '../components/GradientButton';
import cat from '../assets/cat.jpg';

export default function EditUser() {
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
                        title="Change profile picture"
                        onPress={() => console.log("Change picture")}
                        isPrimary={true}
                        width="50%"
                    />
                    <Input placeholder="Nombre de usuario..." secondary={true}/>
                    <Input placeholder="Contraseña..." secureTextEntry={true} secondary={true}/>
                    <Input placeholder="Confirmar contraseña..." secureTextEntry={true} secondary={true} />
                    <GradientButton
                        title="Save changes"
                        onPress={() => navigation.navigate('User')}
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