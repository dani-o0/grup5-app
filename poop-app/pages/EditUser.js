import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Menu from '../components/Menu';
import Input from '../components/CustomTextInput'
import GradientButton from '../components/GradientButton';

export default function EditUser() {
    const navigation = useNavigation();

    return (
        <View style={styles.mainView}>
            <View style={styles.tabView}>
                <View style={styles.buttonView}>
                    <GradientButton
                        title="Change profile picture"
                        onPress={() => console.log("Change picture")}
                        isPrimary={true}
                        width="50%"
                    />
                    <Input placeholder="Nombre de usuario..."/>
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