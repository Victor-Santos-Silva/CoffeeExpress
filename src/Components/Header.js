import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Header() {
    return (
        <LinearGradient
            colors={['#131313', '#4c4c4c']}  // Defina as cores do degradê aqui
            start={[1, 0]}  // Posição inicial do gradiente (superior esquerda)
            end={[0, 1]}    // Posição final do gradiente (inferior)
            style={estilos.topo}
        >
            <Text style={estilos.tituloHeader}>Location:</Text>
            <Text style={estilos.subtitulo}>São Paulo, Brazil</Text>
            <Image
                source={require('../Images/perfil-man.png')}
                style={estilos.imagem}
            />
        </LinearGradient>
    );
}

const estilos = StyleSheet.create({
    topo: {
        height: 160,
        display: 'flex',
        justifyContent: 'flex-start', // Alinha os itens no topo
        paddingHorizontal: 40, // Deixa um espaçamento nas laterais
        paddingTop: 70, // Deixa o título mais próximo do topo
    },

    tituloHeader: {
        color: "white",
    },
    
    subtitulo: {
        color: "white",
        fontWeight: "bold",
    },

    imagem: {
        height: 100,
        width: 50,
        position: 'absolute', // Para posicionar a imagem em cima do texto
        right: 40, // Ajuste para a posição direita
        top: 40,  // Ajuste para a altura desejada
    },
});
