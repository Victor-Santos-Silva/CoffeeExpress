import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'; // Importa componentes básicos do React Native
import { Ionicons } from '@expo/vector-icons'; // Importa ícones da biblioteca Expo
import { useNavigation } from '@react-navigation/native'; // Hook para navegação entre telas

// Componente funcional para a barra de navegação inferior
export default function Navegacao() {
    const navigation = useNavigation(); // Obtém o objeto de navegação para navegar entre telas

    return (
        <View style={styles.navegacao}>
            {/* Botão para navegar para a tela 'Home' */}
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                {/* Ícone de "casa" */}
                <Ionicons name="home" size={24} color="black" />
            </TouchableOpacity>

            {/* Botão para navegar para a tela 'Carrinho' */}
            <TouchableOpacity onPress={() => navigation.navigate('Carrinho')}>
                {/* Ícone de "carrinho" */}
                <Ionicons name="cart" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}

// Estilos do componente
const styles = StyleSheet.create({
    navegacao: {
        flexDirection: 'row', // Exibe os itens em linha (horizontalmente)
        justifyContent: 'space-around', // Distribui os itens com espaçamento uniforme
        backgroundColor: 'white', // Define o fundo branco para a barra de navegação
        paddingVertical: 15, // Espaçamento vertical interno
        borderTopLeftRadius: 15, // Define bordas arredondadas no canto superior esquerdo
        borderTopRightRadius: 15, // Define bordas arredondadas no canto superior direito
        borderTopWidth: 1, // Define uma borda superior fina
        borderTopColor: '#ddd', // Cor da borda superior (cinza claro)
    },
});
