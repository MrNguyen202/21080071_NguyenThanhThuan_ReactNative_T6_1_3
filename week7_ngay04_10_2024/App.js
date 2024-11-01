import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './navigation/navigationRef';
import AppNavigator from './navigation/AppNavigator';
import store from './redux/store'; // Import store dưới dạng một đối tượng

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer ref={navigationRef}>
                <AppNavigator />
            </NavigationContainer>
        </Provider>
    );
}
