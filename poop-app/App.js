import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './pages/SplashScreen';
import Login from './pages/Login';
import Home from './pages/Home';
import Search from './pages/Search';
import Add from './pages/Add';
import User from './pages/User';
import Card from './pages/Card';
import EditUser from './pages/EditUser';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false ,  animation: 'none'}}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false ,  animation: 'none'}}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: true ,  animation: 'none'}}/>
        <Stack.Screen name="Search" component={Search} options={{ headerShown: true ,  animation: 'none'}}/>
        <Stack.Screen name="Add" component={Add} options={{ headerShown: true ,  animation: 'none'}}/>
        <Stack.Screen name="User" component={User} options={{ headerShown: true ,  animation: 'none'}}/>
        <Stack.Screen name="EditUser" component={EditUser} options={{ headerShown: true ,  animation: 'none'}}/>
        <Stack.Screen name="Card" component={Card} options={{ headerShown: true ,  animation: 'none'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
