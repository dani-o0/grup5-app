import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import { collection, getDocs } from 'firebase/firestore'; // Importar Firestore y métodos
import { db } from '../firebase'; // Importar la configuración de Firebase

import Menu from '../components/Menu'
import Location from '../components/Location'
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

export default function Search() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'Lavabo')); // Asumiendo que tienes una colección 'questions'
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push({ id: doc.id, ...doc.data() }); // Extrae los datos y agrega el id
            });
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
            name={item.nombre}
            imageURL={item.imagen}
            rating={item.valoracion}
            onpress={() => navigation.navigate('Card', { 
                name: item.nombre, 
                imageURL: item.imagen, 
                rating: item.valoracion, 
                description: item.descripcion,
                author: item.autor,
                location: item.localizacion,
                creationDate: item.fechaCreacion
            })}
        />
    );
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Bienvenido al Search</Text>
            <FlatList style={{width: '90%'}}
            data={data} // Pasamos el array de datos
            renderItem={renderItem} // Función para renderizar cada ítem
            keyExtractor={item => item.id} // Para darle una key única a cada item
            />
            <Menu Active="Search"/>
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
  });