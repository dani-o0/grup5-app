import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore'; // Importar `query` y `where`
import { FIREBASE_STORAGE } from '../firebaseConfig'; // Configuración de Firebase
import { useNavigation } from '@react-navigation/native'; // Para la navegación
import Menu from '../components/Menu';
import Location from '../components/Location';
import { getAuth } from 'firebase/auth'; // Para obtener la información del usuario autenticado

export default function MyPublications() {
    const [locations, setLocations] = useState([]); // Datos originales del usuario
    const [loading, setLoading] = useState(true); // Estado de carga
    const navigation = useNavigation();

    // Obtén el usuario autenticado
    const auth = getAuth();
    const currentUser = auth.currentUser;

    // Función para obtener las localizaciones creadas por el usuario
    const fetchUserLocations = async () => {
        try {
            if (currentUser) {
                const userId = currentUser.uid; // ID del usuario autenticado
                const locationsQuery = query(
                    collection(FIREBASE_STORAGE, 'Lavabos'),
                    where('userId', '==', userId) // Filtrar por userId
                );

                const querySnapshot = await getDocs(locationsQuery);
                const userLocations = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    const ratingsArray = data.rating || []; // Asegúrate de que el campo exista y sea un array
                    const averageRating =
                        ratingsArray.length > 0
                            ? ratingsArray.reduce((sum, rating) => sum + rating, 0) / ratingsArray.length
                            : 0; // Calcula la media, o asigna 0 si el array está vacío
                    userLocations.push({
                        id: doc.id,
                        ...data,
                        averageRating, // Añade el promedio calculado como un nuevo campo
                    });
                });

                setLocations(userLocations); // Actualizar las localizaciones del usuario
                setLoading(false);
            } else {
                console.error('No hay usuario autenticado.');
                setLoading(false);
            }
        } catch (error) {
            console.error('Error obteniendo las publicaciones del usuario:', error);
            setLoading(false);
        }
    };

    // Llama a fetchUserLocations al montar el componente
    useEffect(() => {
        fetchUserLocations();
    }, []);

    // Muestra un indicador de carga mientras los datos se están obteniendo
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    // Función para renderizar cada elemento de la lista
    const renderItem = ({ item }) => (
        <Location
            name={item.name}
            imageURL={item.imageUrl}
            rating={item.averageRating}
            onpress={() =>
                navigation.navigate('Card', {
                    id: item.id,
                    name: item.name,
                    imageURL: item.imageUrl,
                    rating: item.averageRating,
                    description: item.description,
                    author: item.userId,
                    location: item.location,
                    creationDate: item.timestamp,
                })
            }
        />
    );

    return (
        <View style={styles.mainView}>
            {/* Lista de publicaciones */}
            <FlatList
                style={{ flex: 1 }}
                data={locations}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

            {/* Menú inferior */}
            <Menu style={styles.menuView} currentSection={4} />
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#151723', // Fondo oscuro
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuView: {
        flex: 1,
    },
});
