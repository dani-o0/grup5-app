import React from 'react';
import { View, Text, Button } from 'react-native';
import GradientButton from '../components/GradientButton';

export default function Login({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <GradientButton title="Login" onPress={() => alert('Login pressed')} width='50%'/>
        </View>
    );
}
