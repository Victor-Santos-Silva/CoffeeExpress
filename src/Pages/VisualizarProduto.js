import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';

export default function VisualizarProduto() {
    const [produtos, setProdutos] = useState([]);

    // Função para buscar os produtos do servidor
    const listProdutos = () => {
        axios
            .get('http://10.0.2.2:3000/clientes')
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
            .delete(`http://10.0.2.2:3000/clientes/${id}`)
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

        </ScrollView>
    );
}
