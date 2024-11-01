import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import Dashboard from '../screens/dashboard';
import AddNote from '../screens/addNote';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="AddNote" component={AddNote} options={{ headerShown: false }} />
    </Stack.Navigator>
);

export default AppNavigator;
