import React, { useEffect, useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import Navegacao from '../Components/Navegacao';

export default function Lista() {


    const [lista, setLista] = useState([]);

    // Função para buscar produtos do servidor
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://10.0.2.2:3000/produtos');
            setLista(response.data);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    };

    // Use o useEffect para buscar dados
    useEffect(() => {
        fetchProducts();
    }, []);

    // Função para excluir produto
    const deleteProduto = async (id) => {
        try {
            await axios.delete(`http://10.0.2.2:3000/produtos/${id}`);
            setLista((prevLista) => prevLista.filter((produto) => produto.id !== id));
            Alert.alert('Sucesso', 'Produto excluído com sucesso!');
        } catch (error) {
            console.error('Erro ao excluir produto:', error);
            Alert.alert('Erro', 'Não foi possível excluir o produto.');
        }
    };

    return (
        <View style={styles.pagina}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Lista de Produtos</Text>
                    {lista.length > 0 ? (
                        lista.map((produto) => (
                            <View key={produto.id} style={styles.produtoItem}>
                                <Text style={styles.produtoName}>{produto.name}</Text>
                                <Text style={styles.produtoPrice}>Preço: ${produto.price.toFixed(2)}</Text>
                                <Button
                                    title="Excluir"
                                    color="#4324d4"
                                    onPress={() => deleteProduto(produto.id)} />
                            </View>
                        ))
                    ) : (
                        <Text style={styles.noProducts}>Nenhum produto disponível.</Text>
                    )}
                </View>
            </ScrollView>
            <Navegacao />
        </View>
    );
}

// Estilos
const styles = StyleSheet.create({
    pagina: {
        flex: 1,
    },
    container: {
        padding: 10,
        backgroundColor: '#fff',
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    produtoItem: {
        padding: 15,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
    },
    produtoName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    produtoPrice: {
        fontSize: 16,
        color: '#555',
        marginTop: 5,
    },
    noProducts: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginTop: 20,
    }
});
