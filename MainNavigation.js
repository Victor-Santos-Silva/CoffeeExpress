import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/Pages/Home'
import Descricao from './src/Pages/DescricaoProd'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();


export default function MainNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
                <Stack.Screen name='Sobre' component={Descricao} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}