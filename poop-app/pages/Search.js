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

    // Función para obtener datos de Firestore
    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(FIREBASE_STORAGE, 'Lavabo'));
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push({ id: doc.id, ...doc.data() }); // Extrae los datos y agrega el id
            });
            setData(items); // Almacena los datos originales
            setFilteredData(items); // Almacena también los datos iniciales como "filtrados"
            setLoading(false); // Detener el indicador de carga
        } catch (error) {
            console.error('Error obteniendo los datos de Firebase:', error);
        }
    };

    useEffect(() => {
        fetchData(); // Cargar datos cuando el componente se monta
    }, []);

    // Función para filtrar datos en tiempo real
    useEffect(() => {
        const filteredItems = data.filter((item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) // Filtra por coincidencia parcial
        );
        setFilteredData(filteredItems); // Actualiza los datos filtrados
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
            rating={item.rating}
            onpress={() =>
                navigation.navigate('Card', {
                    name: item.name,
                    imageURL: item.imageUrl,
                    rating: item.rating,
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
            <BarraSearch
                placeholder="Buscar localización..."
                onTextChange={(text) => setSearchText(text)} // Actualiza el texto de búsqueda
            />

            {/* Lista de localizaciones */}
            <FlatList
                style={{ width: '90%' }}
                data={filteredData} // Muestra solo las localizaciones filtradas
                renderItem={renderItem} // Renderiza cada localización
                keyExtractor={(item) => item.id} // Clave única para cada elemento
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
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuView: {
        flex: 1,
    },
});
