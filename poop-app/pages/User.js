import React from 'react';
import { View, Text } from 'react-native';

import Menu from '../components/Menu';
import TabButton from '../components/TabButton';
import GradientButton from '../components/GradientButton';
import PopUp from '../components/PopUp';
import cat from '../assets/cat.jpg';


export default function User(navigation) {
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
                <PopUp text="Log out" dialogText="¿Seguro que quieres cerrar sesión?" onAccept={() => navigation.navigate('Login')} tab={true} />
            </View>
            <Menu style={styles.menuView} currentSection={4} />
        </View>
    );
}