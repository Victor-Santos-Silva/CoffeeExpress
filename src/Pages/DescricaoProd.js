import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import Navegacao from '../Components/Navegacao';

export default function Descricao() {
  const route = useRoute();
  const { title, description, price, imageSource } = route.params;

  const [loading, setLoading] = useState(false);

  const handleAddProduct = async () => {
    setLoading(true);
    const productData = {
      name: title,
      description,
      price,
      image: imageSource,
    };

    try {
      const response = await axios.post('http://10.0.2.2:3000/produtos', productData);
      Alert.alert('Sucesso', 'Produto adicionado com sucesso!');
      console.log(response.data);
    } catch (error) {
      Alert.alert('Error', 'Falha ao adicionar produto.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.pagina}>
      <View style={styles.container}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.descricao}>{title}</Text>
        <Text style={styles.detalhe}>{description}</Text>
        <Text style={styles.price}>R$ {price},00</Text>

        <View style={styles.sizeContainer}>
          <Text style={styles.sizeTitle}>Size</Text>
          <View style={styles.sizeOptions}>
            <Text style={styles.sizeOption}>S</Text>
            <Text style={[styles.sizeOption, styles.sizeSelected]}>M</Text>
            <Text style={styles.sizeOption}>L</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.buyButton}
            onPress={handleAddProduct}
            disabled={loading}
          >
            <Text style={styles.buyButtonText}>{loading ? 'Loading...' : 'Add Product'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Navegacao />
    </View>
  );
}

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
  },
  descricao: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  detalhe: {
    paddingTop: 10,
    fontSize: 15,
    color: 'gray',
  },
  price: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D2691E',
  },
  sizeContainer: {
    marginBottom: 15,
  },
  sizeTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingTop: 15,
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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