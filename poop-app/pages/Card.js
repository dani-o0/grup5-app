import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


import Menu from '../components/Menu'

export default function Card({route}) {
    const {name, imageURL, rating, description, author, location, creationDate} = route.params;


    //const formattedDate = creationDate?.toDate ? creationDate.toDate() : creationDate;

    // Formatear la fecha a una cadena legible, por ejemplo, con `toLocaleDateString`
    const displayDate = creationDate.toDate().toLocaleDateString()

    return (
        <View style={styles.container}>
            <Image source={{uri: imageURL}} style={styles.image}/>
            <Text>{description}</Text>
            <Text>Creado el dia {displayDate}</Text>
            <Menu Active="Search"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#151723'
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
