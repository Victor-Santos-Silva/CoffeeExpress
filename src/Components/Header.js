import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Importa o componente para criar gradiente

// Componente funcional para o cabeçalho (Header)
export default function Header() {
    return (
        <LinearGradient
            // Degradê aplicado ao fundo do Header
            colors={['#131313', '#4c4c4c']} // Define as cores do degradê (do preto ao cinza)
            start={[1, 0]} // Posição inicial do degradê (canto superior direito)
            end={[0, 1]}   // Posição final do degradê (canto inferior esquerdo)
            style={estilos.topo} // Estilos aplicados ao container do Header
        >
            {/* Texto do título principal */}
            <Text style={estilos.tituloHeader}>Location:</Text>
            {/* Texto do subtítulo que indica a localização */}
            <Text style={estilos.subtitulo}>São Paulo, Brazil</Text>
            {/* Exibe a imagem de perfil no lado direito */}
            <Image
                source={require('../Images/perfil-man.png')} // Caminho para a imagem local
                style={estilos.imagem} // Estilo da imagem
            />
        </LinearGradient>
    );
}

// Estilos do componente utilizando StyleSheet
const estilos = StyleSheet.create({
    topo: {
        // Configuração geral do container principal (Header)
        position: 'absolute', // Fixa o header no topo da tela
        top: 0,               // Alinha ao topo da tela
        left: 0,              // Alinha ao lado esquerdo da tela
        right: 0,             // Alinha ao lado direito da tela
        height: 160,          // Define a altura do Header
        justifyContent: 'flex-start', // Alinha os elementos na parte superior
        paddingHorizontal: 40, // Espaçamento horizontal nas laterais
        paddingTop: 75,       // Espaçamento no topo
        zIndex: 10,           // Garante que o Header fique acima de outros elementos
    },

    tituloHeader: {
        // Estilo para o título do Header
        color: "white", // Cor do texto (branco)
    },

    subtitulo: {
        // Estilo para o subtítulo (localização)
        color: "white",      // Cor do texto (branco)
        fontWeight: "bold",  // Texto em negrito
    },

    imagem: {
        // Estilo para a imagem de perfil
        height: 100,         // Altura da imagem
        width: 50,           // Largura da imagem
        position: 'absolute', // Posicionamento absoluto dentro do Header
        right: 40,           // Distância da borda direita
        top: 40,             // Distância do topo
    },

    texto: {
        // (Não utilizado neste componente, mas pode ser usado para textos adicionais)
        padding: 20,         // Espaçamento interno
        fontSize: 18,        // Tamanho da fonte
    },
});
