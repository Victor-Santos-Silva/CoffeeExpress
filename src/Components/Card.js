import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

export default function Card(props) {
    return (
        <View style={estilos.card}>
            <Image source={require('../Images/cafezinho expresso.png')}
                style={estilos.imagem}
            />
            <Text style={estilos.titulo}>{props.title}</Text>
            <Text style={estilos.descricao}>{props.description}</Text>
            <Text style={estilos.preco}>{props.money}</Text>
            <TouchableOpacity style={estilos.botao} onPress={props.onPress}>
                <Text style={estilos.textoBotao}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const estilos = StyleSheet.create({
    card: {
        width: 180,
        height: 320,
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 3,
        elevation: 5,
    },

    botao: {
        backgroundColor: '#C67C4E',  // Cor de fundo
        paddingVertical: 10,  // Altura do botão
        paddingHorizontal: 20,  // Largura do botão
        borderRadius: 18,  // Bordas arredondadas
        width: 50,
        left: 110
    },

    textoBotao: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },

    imagem: {
        width: 160,
        height: 160,
        borderRadius: 15,
    },

    titulo: {
        fontWeight: 'bold',
        fontSize: 20
    },

    descricao: {
        color: 'gray'
    },

    preco: {
        top: 35,
        left: 5,
        fontSize: 15
    }
});
