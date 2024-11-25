import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';

const Descricao = () => {
  const { params } = useRoute();

  const { title, descriptionComplet, price, imageSource } = params;

  const [loading, setLoading] = useState(false);

  const handleAddProduct = async () => {
    setLoading(true);

    const resolvedImage = Image.resolveAssetSource(imageSource).uri;
    const productData = { name: title, descriptionComplet, price, image: resolvedImage };

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
        price={price}
        imageSource={imageSource}
      />
      <DescricaoCompletaProduto
        descriptionComplet={descriptionComplet}
      />
      <SizeSelector />
      <Footer onAdd={handleAddProduct} loading={loading} price={price} />
    </View>
  );
};

// Componentes Reutilizáveis

const ProductDetails = ({ title, imageSource }) => (
  <View style={styleProductDetails.detailsContainer}>
    <Image source={imageSource} style={styleProductDetails.image} />
    <Text style={styleProductDetails.title}>{title}</Text>
  </View>
);

const DescricaoCompletaProduto = ({ descriptionComplet }) => (
  <View style={stylesDescriptComplet.descriptCompletContainer}>
    <Text style={stylesDescriptComplet.descriptCompletTitle}>Descricao:</Text>
    <Text style={stylesDescriptComplet.descriptCompletStyle}>{descriptionComplet}</Text>
  </View>
);

const SizeSelector = () => (
  <View style={stylesSizeSelector.sizeContainer}>
    <Text style={stylesSizeSelector.sizeTitle}>Tamanho</Text>
    <View style={stylesSizeSelector.sizeOptions}>
      {['P', 'M', 'G'].map((size, index) => (
        <Text
          key={index}
          style={[stylesSizeSelector.sizeOption, size === 'M' && stylesSizeSelector.sizeSelected]}
        >
          {size}
        </Text>
      ))}
    </View>
  </View>
);

const Footer = ({ onAdd, loading, price }) => (
  <View style={stylesFotter.footer}>
    <Text style={stylesFotter.price}>
      R$ {price ? price.toFixed(2).replace('.', ',') : '0,00'}
    </Text>
    <TouchableOpacity
      style={stylesFotter.buyButton}
      onPress={onAdd}
      disabled={loading}
    >
      <Text style={stylesFotter.buyButtonText}>
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
  },
})


const stylesFotter = StyleSheet.create({
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buyButton: {
    backgroundColor: '#E27D19',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginLeft: 50
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E27D19',
  },
})

const stylesSizeSelector = StyleSheet.create({
  sizeContainer: {
    padding: 10,
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
});


const stylesDescriptComplet = StyleSheet.create({
  descriptCompletContainer: {
    paddingLeft: 5,
    height: 180
  },
  descriptCompletTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 5
  },
  descriptCompletStyle: {
    padding: 5
  },


});

const styleProductDetails = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 10
  },
})
export default Descricao;