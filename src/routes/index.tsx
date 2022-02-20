// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../screens/Dashboard';
import CityDetails from '../screens/CityDetails';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Details" component={CityDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;