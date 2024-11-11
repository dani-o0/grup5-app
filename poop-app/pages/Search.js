import { React, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import { collection, getDocs } from 'firebase/firestore'; // Importar Firestore y métodos
import { db } from '../firebase'; // Importar la configuración de Firebase

import Menu from '../components/Menu'
import BarraSearch from '../components/BarraSearch';  // Sube un nivel y accede a "components"

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
}

export default function Search() {
// Definir el estado para almacenar el texto
const [setSearchText] = useState(''); 
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
              creationDate: item.fechaCreacion,
              comments: item.comentarios
          })}
      />
  );
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <BarraSearch 
              placeholder="Buscar algo..."
              onTextChange={(text) => setSearchText(text)}  // Actualiza el estado con el texto ingresado
          />


      </View>
  );
}