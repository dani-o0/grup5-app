import React from 'react';
import { View, Text, Button } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function Login({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <CustomButton title='Login' onPress=''/>
        </View>
    );
}
