import React, { useEffect, useState } from 'react';  // Importa React e hooks para gerenciamento de estado e efeitos
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native';  // Importa componentes da interface de usuário do React Native
import axios from 'axios';  // Importa a biblioteca axios para fazer requisições HTTP
import { useNavigation } from "@react-navigation/native";  // Hook de navegação entre telas
import Navegacao from '../Components/Navegacao';  // Componente personalizado de navegação
import Header from '../Components/Header';  // Componente personalizado de cabeçalho

// Componente Carrinho
export default function Carrinho() {

    const [lista, setLista] = useState([]);  // Estado para armazenar a lista de produtos do carrinho

    // Função para buscar produtos do servidor
    const fetchProducts = async () => {
        try {
            // Faz uma requisição GET para obter os produtos do servidor
            const response = await axios.get('http://10.0.2.2:3000/produtos');
            setLista(response.data);  // Atualiza o estado com os produtos retornados
        } catch (error) {
            // Caso haja erro na requisição
            console.error('Erro ao buscar produtos:', error);
        }
    };

    // useEffect é utilizado para buscar os dados assim que o componente for montado
    useEffect(() => {
        fetchProducts();  // Chama a função fetchProducts quando o componente é carregado
    }, []);  // O array vazio [] indica que o efeito será executado apenas uma vez (na montagem do componente)

    // Função para excluir produto
    const deleteProduto = async (id) => {
        try {
            // Faz uma requisição DELETE para excluir o produto com o id fornecido
            await axios.delete(`http://10.0.2.2:3000/produtos/${id}`);
            // Atualiza a lista, removendo o produto excluído
            setLista((prevLista) => prevLista.filter((produto) => produto.id !== id));
            // Exibe uma mensagem de sucesso
            Alert.alert('Sucesso', 'Produto excluído com sucesso!');
        } catch (error) {
            // Caso haja erro na exclusão
            console.error('Erro ao excluir produto:', error);
            Alert.alert('Erro', 'Não foi possível excluir o produto.');
        }
    };

    return (
        <View style={styles.pagina}>
            {/* ScrollView permite que a lista de produtos seja rolável */}
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Produtos do Carrinho</Text>
                    {lista.length > 0 ? (
                        // Se a lista não estiver vazia, mapeia os produtos para exibir
                        lista.map((produto) => (
                            <View key={produto.id} style={styles.produtoItem}>
                                <Text style={styles.produtoName}>{produto.name}</Text>
                                <Text style={styles.produtoPrice}>
                                    Preço: R${!isNaN(Number(produto.price)) && produto.price !== null && produto.price !== ""
                                        ? parseFloat(produto.price).toFixed(2)
                                        : 'Indisponível'}  {/* Exibe o preço, garantindo que seja um número válido */}
                                </Text>

                                {/* Botão para excluir o produto */}
                                <Button
                                    title="Excluir"
                                    color="red"
                                    onPress={() => deleteProduto(produto.id)}  // Chama a função de exclusão ao pressionar
                                />
                            </View>
                        ))
                    ) : (
                        // Caso não haja produtos, exibe uma mensagem informando
                        <Text style={styles.noProducts}>Nenhum produto disponível.</Text>
                    )}
                </View>
            </ScrollView>
            <Navegacao />  {/* Componente de navegação */}
        </View>
    );
}

// Estilos
const styles = StyleSheet.create({
    pagina: {
        flex: 1,  // O layout ocupa toda a tela
        marginTop: 50,  // Espaçamento superior para afastar da parte superior da tela
        backgroundColor: '#fff'  // Cor de fundo da tela
    },
    container: {
        padding: 10,  // Espaçamento interno
        backgroundColor: '#fff',  // Cor de fundo do container
    },
    title: {
        textAlign: 'center',  // Alinha o título no centro
        fontSize: 24,  // Tamanho da fonte
        fontWeight: 'bold',  // Deixa o título em negrito
        marginBottom: 10,  // Espaçamento inferior
    },
    produtoItem: {
        padding: 15,  // Espaçamento interno
        marginVertical: 5,  // Espaçamento vertical entre os itens
        borderWidth: 1,  // Borda em torno do item
        borderColor: '#ccc',  // Cor da borda
        borderRadius: 5,  // Bordas arredondadas
        backgroundColor: '#f9f9f9',  // Cor de fundo do item
    },
    produtoName: {
        fontSize: 18,  // Tamanho da fonte do nome do produto
        fontWeight: 'bold',  // Nome em negrito
        color: '#333',  // Cor do texto
    },
    produtoPrice: {
        fontSize: 16,  // Tamanho da fonte do preço
        color: '#555',  // Cor do texto do preço
        marginTop: 5,  // Espaçamento superior
    },
    noProducts: {
        fontSize: 16,  // Tamanho da fonte para a mensagem de "sem produtos"
        color: 'gray',  // Cor cinza para a mensagem
        textAlign: 'center',  // Alinha o texto ao centro
        marginTop: 20,  // Espaçamento superior
    }
});
