import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import Navegacao from '../Components/Navegacao';

const Descricao = () => {
  const { params } = useRoute();
  const { title, description, price, imageSource } = params;
  const [loading, setLoading] = useState(false);

  const handleAddProduct = async () => {
    setLoading(true);

    const resolvedImage = Image.resolveAssetSource(imageSource).uri;
    const productData = { name: title, description, price, image: resolvedImage };

    try {
      await axios.post('http://10.0.2.2:3000/produtos', productData);
      Alert.alert('Sucesso', 'Produto adicionado com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Falha ao adicionar produto.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.page}>
      <ProductDetails
        title={title}
        description={description}
        price={price}
        imageSource={imageSource}
      />
      <SizeSelector />
      <Footer onAdd={handleAddProduct} loading={loading} />
      <Navegacao />
    </View>
  );
};

// Componentes Reutilizáveis

const ProductDetails = ({ title, description, price, imageSource }) => (
  <View style={styles.detailsContainer}>
    <Image source={imageSource} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
    <Text style={styles.price}>R$ {price},00</Text>
  </View>
);

const SizeSelector = () => (
  <View style={styles.sizeContainer}>
    <Text style={styles.sizeTitle}>Tamanho</Text>
    <View style={styles.sizeOptions}>
      {['P', 'M', 'G'].map((size, index) => (
        <Text
          key={index}
          style={[styles.sizeOption, size === 'M' && styles.sizeSelected]}
        >
          {size}
        </Text>
      ))}
    </View>
  </View>
);

const Footer = ({ onAdd, loading }) => (
  <View style={styles.footer}>
    <TouchableOpacity
      style={styles.buyButton}
      onPress={onAdd}
      disabled={loading}
    >
      <Text style={styles.buyButtonText}>
        {loading ? 'Carregando...' : 'Adicionar Produto'}
      </Text>
    </TouchableOpacity>
  </View>
);

// Estilos
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  detailsContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    fontSize: 15,
    color: 'gray',
  },
  price: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D2691E',
  },
  sizeContainer: {
    marginTop: 20,
  },
  sizeTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sizeOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sizeOption: {
    paddingVertical: 9,
    paddingHorizontal: 35,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  sizeSelected: {
    backgroundColor: '#FFE5B4',
    color: '#D2691E',
    borderColor: '#D2691E',
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buyButton: {
    backgroundColor: '#D2691E',
    paddingVertical: 10,
    paddingHorizontal: 55,
    borderRadius: 30,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Descricao;