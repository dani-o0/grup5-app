import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore'; // Importar Firestore y métodos
import { FIREBASE_STORAGE } from '../firebaseConfig'; // Importar la configuración de Firebase

import Menu from '../components/Menu'
import Location from '../components/Location'
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

export default function Search() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    const fetchAuthor = async (userId) => {
        try {
            const userDoc = await getDoc(doc(FIREBASE_STORAGE, 'Users', userId)); // Cambia 'Users' al nombre real de tu colección de usuarios
            if (userDoc.exists()) {
                return userDoc.data().username; // Supongamos que el campo del nombre del usuario es 'name'
            }
        } catch (error) {
            console.error('Error obteniendo el autor:', error);
        }
        return 'Desconocido'; // Valor predeterminado si el autor no existe
    };

    const fetchCommentsWithAuthors = async (comments) => {
        return await Promise.all(
            comments.map(async (comment) => {
                const authorName = await fetchAuthor(comment.userId); // Obtén el nombre del autor del comentario
                return { ...comment, authorName }; // Agrega el nombre del autor al comentario
            })
        );
    };
    
    // Función para obtener los datos de Lavabos y sus autores
    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(FIREBASE_STORAGE, 'Lavabos')); // Consulta Lavabos
            const items = await Promise.all(
                querySnapshot.docs.map(async (doc) => {
                    const data = doc.data();
                    const authorName = await fetchAuthor(data.userId); // Obtén el nombre del autor principal
                    const commentsWithAuthors = await fetchCommentsWithAuthors(data.comments || []); // Procesa los comentarios
                    return { id: doc.id, ...data, authorName, comments: commentsWithAuthors }; // Incluye todo
                })
            );
            setData(items); // Almacena los datos en el estado
            setLoading(false); // Detener el indicador de carga
        } catch (error) {
            console.error('Error obteniendo los datos de Firebase:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );  
      }

      const renderItem = ({ item }) => (
        <Location
            name={item.name}
            imageURL={item.imageUrl}
            rating={item.rating}
            onpress={() => navigation.navigate('Card', { 
                name: item.name, 
                imageURL: item.imageUrl, 
                rating: item.rating, 
                description: item.description,
                author: item.authorName,
                location: item.location,
                creationDate: item.timestamp,
                comments: item.comments,
                commentAuthor: item.comments.authorName
            })}
        />
    );
    return (
        <View style={styles.mainView}>
            <View style={styles.tabView}>
                <Text>Bienvenido al Search</Text>
                <FlatList style={{width: '90%'}}
                data={data} // Pasamos el array de datos
                renderItem={renderItem} // Función para renderizar cada ítem
                keyExtractor={item => item.id} // Para darle una key única a cada item
                />  
            </View>
            <Menu style={styles.menuView} currentSection={2} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
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
  });
