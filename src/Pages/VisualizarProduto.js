import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import Card from '../Components/Card';  // Importando o componente Card

export default function VisualizarProduto() {
    const [produtos, setProdutos] = useState([]);

    // Função para buscar os produtos do servidor
    const listProdutos = () => {
        axios
            .get('http://10.0.2.2:3000/produtos')
            .then((resposta) => {
                setProdutos(resposta.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar produtos", error);
            });
    };

    // Função para excluir um produto
    const deleteProdutos = (id) => {
        axios
            .delete(`http://10.0.2.2:3000/produtos/${id}`)
            .then(() => {
                setProdutos(produtos.filter((produto) => produto.id !== id));
                Alert.alert("Sucesso, produto excluído com sucesso");
            })
            .catch((error) => {
                console.error("Erro ao excluir produto", error);
                Alert.alert("Erro, não foi possível excluir");
            });
    };

    // Usar o useEffect para buscar os dados
    useEffect(() => {
        listProdutos();
    }, []);

    return (
        <ScrollView>
            <View style={styles.cardContainer}>
                {produtos.length > 0 ? (
                    produtos.map((produto, index) => (
                        <Card
                            key={index}
                            title={produto.nomeProduto}
                            description={produto.descricao}
                            money={`R$ ${produto.preco}`}
                            onPress={() => deleteProdutos(produto.id)}  // Passando a função de excluir como prop
                        />
                    ))
                ) : (
                    <Text style={styles.noProduct}>Nenhum produto disponível</Text>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    },
    noProduct: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginTop: 20,
    }
});
