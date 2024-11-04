import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


import Menu from '../components/Menu'

export default function Card({route}) {
    const {name, imageURL, rating, description, author, location, creationDate} = route.params;


    //const formattedDate = creationDate?.toDate ? creationDate.toDate() : creationDate;

    // Formatear la fecha a una cadena legible, por ejemplo, con `toLocaleDateString`
    const displayDate = creationDate.toDate().toLocaleDateString()

    return (
        <View style={styles.mainView}>
        <View style={styles.tabView}>
            <Image source={{uri: imageURL}} style={styles.image}/>
            <Text style={{color: 'white'}}>{description}</Text>
            <Text style={{color: 'white'}}>Creado el dia {displayDate}</Text>
        </View>
        <Menu style={styles.menuView} currentSection={2} />
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
        alignItems: 'center',
    },
    menuView:
    {
        flex: 1,
    },
    imageContainer: {
        flex:1,
        width:'20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10, // Bordes redondeados en la imagen
        margin:15
    },
    textContainer: {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
        width:'70%'
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    buttonContainer: {
        width:'10%',
    },
});
