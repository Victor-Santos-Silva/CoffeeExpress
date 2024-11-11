import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

export default function Cadastro() {
  const [nomeProduto, setNomeProduto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [imagem, setImagem] = useState(null);

  const selecionarImagem = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada para acessar a galeria!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  };

  const enviarProduto = async () => {
    if (!nomeProduto || !descricao || !preco || !imagem) {
      Alert.alert("Erro, por favor preencha todos os campos!");
      return;
    }

    const novoProduto = { nomeProduto, descricao, preco, imagem };

    axios.post('http://10.0.2.2:3000/produtos', novoProduto)
      .then(resposta => {
        if (resposta.status === 201) {
          Alert.alert("Sucesso, produto adicionado!");
          setNomeProduto('');
          setDescricao('');
          setPreco('');
          setImagem(null);
        } else {
          Alert.alert("Erro, falha ao adicionar produto.");
        }
      })
      .catch(() => Alert.alert("Erro ao conectar com o servidor."));
  };

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.coffee}>Coffee Express</Text>
        <Image source={require('../assets/img/capuccino.png')} style={styles.image} />
      </View>
        
      <Text style={styles.registro}>Registrar Novo Produto..</Text>

      <View style={styles.forms}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Digite o nome do produto"
          value={nomeProduto}
          onChangeText={setNomeProduto}
        />

        <Text style={styles.label}>Preço:</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Digite o preço do produto" 
          value={preco}
          onChangeText={setPreco}
        />

        <Text style={styles.label}>Descrição:</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Digite a descrição do produto" 
          value={descricao}
          onChangeText={setDescricao}
        />

        <Text style={styles.label}>Imagem:</Text>
        <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem}>
          <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
        </TouchableOpacity>
        {imagem && <Image source={{ uri: imagem }} style={styles.previewImage} />}
      </View>

      <View style={styles.button}>
        <TouchableOpacity style={styles.buyButton} onPress={enviarProduto}>
          <Text style={styles.buyButtonText}>Cadastrar Produto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  image: {
    width: 100,
    height: 100,
    left: 310
  },
  coffee: {
    fontSize: 30,
    top: 60,
    textAlign: "center",
    fontWeight: "bold",
    color: "white"
  },
  cabecalho: {
    backgroundColor: "#38241D",
  },
  registro: {
    paddingTop: 50,
    paddingBottom: 30,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#38241D",
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: "center",
    fontWeight: "bold",
    color: "#38241D",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20, 
    borderRadius: 20,
  },
  forms: {
    padding: 10
  },
  imageButton: {
    backgroundColor: "#6B4226",
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 15,
  },
  imageButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  previewImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  buyButton: {
    backgroundColor: '#38241D',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
  },
  button: {
    paddingLeft: 20,
    paddingRight: 20,
  }
});
