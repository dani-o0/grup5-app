import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { collection, getDocs } from 'firebase/firestore'; // Firestore y métodos
import { FIREBASE_STORAGE } from '../firebaseConfig'; // Configuración de Firebase
import { useNavigation } from '@react-navigation/native'; // Para la navegación
import Menu from '../components/Menu';
import Location from '../components/Location';
import BarraSearch from '../components/BarraSearch'; // Asegúrate de importar correctamente

export default function Search() {
    const [data, setData] = useState([]); // Datos originales de Firestore
    const [filteredData, setFilteredData] = useState([]); // Datos filtrados en función de la búsqueda
    const [loading, setLoading] = useState(true); // Estado de carga
    const [searchText, setSearchText] = useState(''); // Texto ingresado en la barra de búsqueda
    const navigation = useNavigation();

    // Función para obtener los datos de Firestore
    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(FIREBASE_STORAGE, 'Lavabos'));
            const items = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const ratingsArray = data.rating || []; // Asegúrate de que el campo exista y sea un array
                const averageRating =
                    ratingsArray.length > 0
                        ? ratingsArray.reduce((sum, rating) => sum + rating, 0) / ratingsArray.length
                        : 0; // Calcula la media, o asigna 0 si el array está vacío
                items.push({
                    id: doc.id,
                    ...data,
                    averageRating, // Añade el promedio calculado como un nuevo campo
                });
            });
            console.log(items); // Verifica los datos obtenidos
            setData(items);
            setFilteredData(items); // Inicializa con todos los datos
            setLoading(false);
        } catch (error) {
            console.error('Error obteniendo los datos de Firebase:', error);
        }
    };

    // Llama a fetchData al montar el componente
    useEffect(() => {
        fetchData(); // Cargar datos cuando el componente se monta
    }, []);

    // Función que se ejecuta cuando el texto de búsqueda cambia
    const handleSearch = () => {
        setLoading(true); // Mostrar indicador de carga
        setSearchText('');
        fetchData(); // Volver a obtener los datos al buscar
    };

    // Función para filtrar datos en tiempo real
    useEffect(() => {
        const filteredItems = data.filter((item) =>
            item.name && item.name.toLowerCase().includes(searchText.toLowerCase()) // Asegúrate de que 'name' no sea undefined
        );
        setFilteredData(filteredItems);        
        setLoading(false); // Detenemos el indicador de carga
    }, [searchText, data]); // Se ejecuta cuando cambia el texto de búsqueda o los datos originales

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
            rating={item.averageRating} // Usa el promedio calculado
            onpress={() =>
                navigation.navigate('Card', {
                    id : item.id,
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
            {/* Barra de búsqueda */}
            <View style={styles.searchView}>
                <BarraSearch
                    placeholder="Buscar localización..."
                    onTextChange={setSearchText}
                    handleSearch={handleSearch} // Actualiza el texto de búsqueda y ejecuta fetchData
                />
            </View>
            {/* Lista de localizaciones */}
            <FlatList
                style={{ flex: 1 }}  // Asegúrate de que ocupe todo el espacio disponible
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

            {/* Menú inferior */}
            <Menu style={styles.menuView} currentSection={2} />
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#151723', // Fondo oscuro
    },
    searchView: {
        marginTop: 50,
        alignItems: 'center',
        padding: 10,
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
