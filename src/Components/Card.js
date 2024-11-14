import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

export default function Card(props) {
    return (
        <View style={estilos.card}>
            <Image
                source={require('../Images/cafezinho expresso.png')}  // Imagem estática. Pode modificar se necessário
                style={estilos.imagem}
            />
            <Text style={estilos.titulo}>{props.title}</Text>
            <Text style={estilos.descricao}>{props.description}</Text>
            <Text style={estilos.preco}>{props.money}</Text>
            <View style={estilos.botoes}>
                <TouchableOpacity style={estilos.botaoSaibaMais} onPress={props.onPress}>
                    <Text style={estilos.textoBotao}>Saiba Mais</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    card: {
        width: 'auto',
        height: 'auto',
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
    botaoSaibaMais: {
        backgroundColor: '#C67C4E',
        borderRadius: 18,
        top: 10,
        marginTop: 5
    },
    textoBotao: {
        color: 'white',
        fontSize: 10,
        textAlign: 'center',
        padding: 5,
        fontWeight: 'bold'
    },
    imagem: {
        width: 160,
        height: 160,
        borderRadius: 15,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    descricao: {
        color: 'gray',
        width: 150,
        height: 'auto'
    },
    preco: {
        fontSize: 15,
    },
    botoes: {
        marginBottom: 10
    }
});
