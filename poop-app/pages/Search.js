import React, { useState } from 'react';  
import { View, Text } from 'react-native';

import Menu from '../components/Menu'
import BarraSearch from '../components/BarraSearch';  // Sube un nivel y accede a "components"



export default function Search() {
// Definir el estado para almacenar el texto
const [setSearchText] = useState(''); 

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <BarraSearch 
                placeholder="Buscar algo..."
                onTextChange={(text) => setSearchText(text)}  // Actualiza el estado con el texto ingresado
            />

           
        </View>
    );
}