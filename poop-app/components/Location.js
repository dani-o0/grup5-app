import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import StaticRating from './StaticRating';

export default function Location({ name, imageURL, rating, onpress}) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri: imageURL}} style={styles.image}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text} onPress={onpress}>
                    {name}
                </Text>
                <StaticRating rating={rating}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        borderRadius: 20,
        width:'100%',
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 10, // para separación entre celdas
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