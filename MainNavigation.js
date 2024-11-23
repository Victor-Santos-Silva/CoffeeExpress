import React from 'react';  // Importa o React, necessário para a criação de componentes no React Native
import { NavigationContainer } from '@react-navigation/native';  // Importa o NavigationContainer, que gerencia o estado da navegação
import { createNativeStackNavigator } from '@react-navigation/native-stack';  // Importa o método para criar uma navegação de pilha (Stack Navigator)
import Principal from './src/Pages/PagPrincipal';  // Importa a página Principal
import Home from './src/Pages/Home';  // Importa a página Home
import Descricao from './src/Pages/DescricaoProd';  // Importa a página Descrição do Produto
import Cadastro from './src/Pages/Login';  // Importa a página de Cadastro/Login
import Carrinho from './src/Pages/Carrinho';  // Importa a página do Carrinho

const Stack = createNativeStackNavigator();  // Cria a instância do stack navigator

export default function App() {
  return (
    <NavigationContainer>  // O NavigationContainer deve envolver toda a navegação do aplicativo
      <Stack.Navigator initialRouteName="Principal">  // Define a tela inicial da navegação como "Principal"
        {/* Define a tela "Principal" com a opção de não mostrar o cabeçalho */}
        <Stack.Screen name="Principal" component={Principal} options={{ headerShown: false }} />
        {/* Define a tela "Home" com a opção de não mostrar o cabeçalho */}
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        {/* Define a tela de "Cadastro" com a opção de não mostrar o cabeçalho */}
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        {/* Define a tela "Descricao" (descrição do produto), com o cabeçalho padrão */}
        <Stack.Screen name="Descricao" component={Descricao} />
        {/* Define a tela "Carrinho" com a opção de não mostrar o cabeçalho */}
        <Stack.Screen name="Carrinho" component={Carrinho} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
