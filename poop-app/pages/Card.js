import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';


import Menu from '../components/Menu'
import StaticRating from '../components/StaticRating';

export default function Card({route}) {
    const {name, imageURL, rating, description, author, location, creationDate, comments} = route.params;


    //const formattedDate = creationDate?.toDate ? creationDate.toDate() : creationDate;

    // Formatear la fecha a una cadena legible, por ejemplo, con `toLocaleDateString`
    const displayDate = creationDate.toDate().toLocaleDateString()
      
    const renderItem = ({ item }) => (
      <View style={styles.commentContainer}>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.date}>Creado el día {new Date(item.creationDate2).toLocaleDateString()}</Text>
      </View>
    );
    console.log('Comentarios:', comments);

    return (
        <View style={styles.mainView}>
        <View style={styles.tabView}>
            <Image source={{uri: imageURL}} style={styles.image}/>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.textContainer}>
                <Text style={styles.text1}>{description}</Text>
                <Text style={styles.text2}>Creado el dia {displayDate}</Text>
            </View>
            <StaticRating style={styles.rating} rating={rating}/>
            <View style={{flex: 1}}>
                <View style={styles.comentariosText}>
                    <Text style={{color: 'white'}}>
                        Comentarios:
                    </Text>
                    <FlatList
                      data={comments}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View>
        <Menu style={styles.menuView} currentSection={2} />
      </View>
    );
};

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
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuView:
    {
        flex: 1,
    },
    title: {
        color: 'white',
        fontSize: 36,
    },
    imageContainer: {
        flex:1,
        width:'25%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 300,
        height: 250,
        borderRadius: 10, // Bordes redondeados en la imagen
        marginTop:15
    },
    textContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'80%',
        backgroundColor: '#56516A',
        borderRadius: 20,
    },
    text1: {
        color: 'white',
        fontSize: 18,
        marginBottom: 20,
    },
    text2: {
        color: 'white',
        fontSize: 12,
    },
    rating: {
        margin: 50,
    },
    comentariosText: {
        flex: 1,
        paddingHorizontal: 10,
        width: '100%',
    },
    commentContainer: {
        backgroundColor: '#56516A',
        padding: 20,
        marginBottom: 10,
        borderRadius: 10,
    },
    author: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    message: {
        color: 'white',
        fontSize: 14,
        marginTop: 5,
    },
    date: {
        color: 'white',
        fontSize: 12,
        marginTop: 5,
    },

});
