import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/Pages/Home'
import Descricao from './src/Pages/DescricaoProd'
import VisualizarProduto from './src/Pages/VisualizarProduto'

const Stack = createNativeStackNavigator();


export default function MainNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Descricao" component={Descricao} />
                <Stack.Screen name="VisualizarProduto" component={VisualizarProduto} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}