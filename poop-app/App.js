import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login';
import Home from './pages/Home';
import Search from './pages/Search';
import Add from './pages/Add';
import UserPage from './pages/User';
import Card from './pages/Card';
import EditUser from './pages/EditUser';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebaseConfig';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Home" component={Home} options={{ headerShown: true, animation: 'none' }} />
      <InsideStack.Screen name="Search" component={Search} options={{ headerShown: true, animation: 'none' }} />
      <InsideStack.Screen name="Add" component={Add} options={{ headerShown: true, animation: 'none' }} />
      <InsideStack.Screen name="User" component={UserPage} options={{ headerShown: true, animation: 'none' }} />
      <InsideStack.Screen name="EditUser" component={EditUser} options={{ headerShown: true, animation: 'none' }} />
      <InsideStack.Screen name="Card" component={Card} options={{ headerShown: true, animation: 'none' }} />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });
    
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user ? (
          <Stack.Screen name="Inside" component={InsideLayout} options={{ headerShown: false, animation: 'none' }} />
        ) : (
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false, animation: 'none' }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
