import React, { useState } from 'react';  // Importa React e o hook useState para controle de estado
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';  // Importa componentes da interface do React Native
import { useRoute } from '@react-navigation/native';  // Hook useRoute para acessar os parâmetros da navegação
import axios from 'axios';  // Biblioteca axios para fazer requisições HTTP
import Navegacao from '../Components/Navegacao';  // Componente personalizado de navegação

// Componente Descricao
const Descricao = () => {
  const { params } = useRoute();  // Obtém os parâmetros passados pela navegação (dados do produto)
  const { title, description, price, imageSource } = params;  // Desestrutura os parâmetros do produto
  const [loading, setLoading] = useState(false);  // Estado para controlar o status de carregamento

  // Função para adicionar o produto
  const handleAddProduct = async () => {
    setLoading(true);  // Inicia o carregamento

    // Resolve o URI da imagem a partir do componente Image
    const resolvedImage = Image.resolveAssetSource(imageSource).uri;
    // Dados do produto a ser enviado
    const productData = { name: title, description, price, image: resolvedImage };

    try {
      // Faz uma requisição POST para adicionar o produto ao servidor
      await axios.post('http://10.0.2.2:3000/produtos', productData);
      Alert.alert('Sucesso', 'Produto adicionado com sucesso!');  // Exibe uma mensagem de sucesso
    } catch (error) {
      Alert.alert('Erro', 'Falha ao adicionar produto.');  // Exibe uma mensagem de erro
      console.error(error);  // Exibe o erro no console
    } finally {
      setLoading(false);  // Finaliza o carregamento, independentemente de sucesso ou erro
    }
  };

  return (
    <View style={styles.page}>
      {/* Exibe os detalhes do produto */}
      <ProductDetails
        title={title}
        description={description}
        price={price}
        imageSource={imageSource}
      />
      {/* Componente para selecionar o tamanho */}
      <SizeSelector />
      {/* Rodapé com o botão para adicionar produto */}
      <Footer onAdd={handleAddProduct} loading={loading} />
      {/* Componente de navegação */}
      <Navegacao />
    </View>
  );
};

// Componentes reutilizáveis

// Exibe os detalhes do produto
const ProductDetails = ({ title, description, price, imageSource }) => (
  <View style={styles.detailsContainer}>
    {/* Exibe a imagem do produto */}
    <Image source={imageSource} style={styles.image} />
    {/* Exibe o título do produto */}
    <Text style={styles.title}>{title}</Text>
    {/* Exibe a descrição do produto */}
    <Text style={styles.description}>{description}</Text>
    {/* Exibe o preço do produto */}
    <Text style={styles.price}>R$ {price},00</Text>
  </View>
);

// Componente para selecionar o tamanho do produto
const SizeSelector = () => (
  <View style={styles.sizeContainer}>
    {/* Título do seletor de tamanhos */}
    <Text style={styles.sizeTitle}>Tamanho</Text>
    {/* Opções de tamanhos */}
    <View style={styles.sizeOptions}>
      {['P', 'M', 'G'].map((size, index) => (
        <Text
          key={index}
          style={[styles.sizeOption, size === 'M' && styles.sizeSelected]}  // Estilo especial para o tamanho "M"
        >
          {size}
        </Text>
      ))}
    </View>
  </View>
);

// Rodapé com o botão para adicionar produto
const Footer = ({ onAdd, loading }) => (
  <View style={styles.footer}>
    <TouchableOpacity
      style={styles.buyButton}
      onPress={onAdd}  // Chama a função para adicionar o produto
      disabled={loading}  // Desabilita o botão durante o carregamento
    >
      <Text style={styles.buyButtonText}>
        {loading ? 'Carregando...' : 'Adicionar Produto'}  // Exibe o texto de acordo com o estado de carregamento
      </Text>
    </TouchableOpacity>
  </View>
);

// Estilos
const styles = StyleSheet.create({
  page: {
    flex: 1,  // Faz o componente ocupar toda a tela
    backgroundColor: 'white',  // Cor de fundo da página
    padding: 20,  // Padding para dar espaçamento
  },
  detailsContainer: {
    flex: 1,  // O container ocupa toda a altura disponível
  },
  image: {
    width: '100%',  // A imagem ocupa toda a largura disponível
    height: 250,  // Altura fixa da imagem
    resizeMode: 'contain',  // A imagem será redimensionada para se ajustar sem distorção
  },
  title: {
    fontSize: 22,  // Tamanho da fonte do título
    fontWeight: 'bold',  // Deixa o título em negrito
  },
  description: {
    marginTop: 10,  // Espaçamento superior
    fontSize: 15,  // Tamanho da fonte da descrição
    color: 'gray',  // Cor cinza para o texto
  },
  price: {
    marginTop: 10,  // Espaçamento superior
    fontSize: 20,  // Tamanho da fonte do preço
    fontWeight: 'bold',  // Preço em negrito
    color: '#D2691E',  // Cor laranja para o preço
  },
  sizeContainer: {
    marginTop: 20,  // Espaçamento superior para o seletor de tamanho
  },
  sizeTitle: {
    fontSize: 17,  // Tamanho da fonte do título "Tamanho"
    fontWeight: 'bold',  // Deixa o título em negrito
    marginBottom: 10,  // Espaçamento inferior
  },
  sizeOptions: {
    flexDirection: 'row',  // Alinha as opções de tamanho em linha
    justifyContent: 'space-around',  // Espaça uniformemente as opções
  },
  sizeOption: {
    paddingVertical: 9,  // Espaçamento vertical
    paddingHorizontal: 35,  // Espaçamento horizontal
    borderRadius: 9,  // Bordas arredondadas
    borderWidth: 1,  // Borda com 1px
    borderColor: '#ccc',  // Cor da borda
  },
  sizeSelected: {
    backgroundColor: '#FFE5B4',  // Cor de fundo para o tamanho selecionado
    color: '#D2691E',  // Cor do texto do tamanho selecionado
    borderColor: '#D2691E',  // Cor da borda do tamanho selecionado
  },
  footer: {
    marginTop: 20,  // Espaçamento superior para o rodapé
    flexDirection: 'row',  // Alinha o botão no centro
    justifyContent: 'center',  // Centraliza o botão
  },
  buyButton: {
    backgroundColor: '#D2691E',  // Cor de fundo do botão
    paddingVertical: 10,  // Padding vertical do botão
    paddingHorizontal: 55,  // Padding horizontal do botão
    borderRadius: 30,  // Bordas arredondadas do botão
  },
  buyButtonText: {
    color: '#fff',  // Cor do texto do botão
    fontSize: 18,  // Tamanho da fonte
    fontWeight: 'bold',  // Texto em negrito
  },
});

export default Descricao;  // Exporta o componente para ser usado em outras partes do aplicativo
