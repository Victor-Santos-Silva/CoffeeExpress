import React, { useState } from 'react'
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import axios from 'axios';

export default function Cadastro() {
  const [nomeProduto, setNomeProduto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');

  const enviarProduto = async () => {
    if (!nomeProduto || !descricao || !preco) {
      Alert.alert("Erro, por favor preencha todos os campos!");
      return;
    }

    const novoProduto = { nomeProduto, descricao, preco };

    axios.post('http://10.0.2.2:3000/produtos', novoProduto)
    .then(resposta => {
      if (resposta.status === 201) {
        Alert.alert("Sucesso, contato adicionado!");
        setNomeProduto('');
        setDescricao('');
        setPreco('');
      } else {
        Alert.alert("Erro, falha ao adicionar contato.");
      }
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
      <Text style={styles.coffee}>Coffee Express</Text>
      <Image
      source={require('../assets/img/capuccino.png')} style={styles.image}
      />
      </View>
        
        <Text style={styles.registro}>Registrar Produto</Text>

        <View style={styles.forms}>
        <Text style={styles.label}>Nome</Text>
        <TextInput 
        style={styles.input} 
        placeholder="Digite o nome do produto"
        value={nomeProduto}
        onChangeText={setNomeProduto}
        />

        <Text style={styles.label} >Descrição</Text>
        <TextInput 
        style={styles.input} 
        placeholder="Digite a descrição do produto" 
        value={descricao}
        onChangeText={setDescricao}
        />

        <Text style={styles.label} >Preço</Text>
        <TextInput 
        style={styles.input} 
        placeholder="Digite o preço do produto" 
        value={preco}
        onChangeText={setPreco}
        />
        </View>
        
        <View style={styles.button}>
        <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText} onPress={enviarProduto}>Cadastrar Produto</Text>
        </TouchableOpacity>
        </View>

    </View>

    
  )
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
    paddingTop: 30,
    paddingBottom: 50,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: "center",
    fontWeight: "bold",
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
    paddingRight: 20
  }
});