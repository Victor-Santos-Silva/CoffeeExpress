import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
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

    axios.post('http://10.0.2.2:3000/cadastro', novoProduto)
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

        <Button title="Cadastrar Produto" onPress={enviarProduto}/>

    </View>

    
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5
  }
});