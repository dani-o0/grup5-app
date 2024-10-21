import React from 'react';
import { View, StyleSheet } from 'react-native';

import Menu from '../components/Menu';
import TabButton from '../components/TabButton';
import GradientButton from '../components/GradientButton';

export default function User() {
    return (
        <View style={styles.mainView}>
            <View style={styles.tabView}>
                <View style={styles.buttonView}>
                    <GradientButton
                        title="Edit profile"
                        onPress={console.log("Edit profile page")}
                        isPrimary={true}
                        width="40%"
                    />
                </View>
                <TabButton title='Mis publicaciones'  />
                <TabButton title='Log out'  />
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