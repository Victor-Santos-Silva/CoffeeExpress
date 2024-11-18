import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Principal from './src/Pages/PagPrincipal';
import Home from './src/Pages/Home';
import Descricao from './src/Pages/DescricaoProd';
import Cadastro from './src/Pages/Login';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen name="Principal" component={Principal} options={{ headerShown: false }}  />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro}  />
        <Stack.Screen name="Descricao" component={Descricao} options={{ title: 'Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}