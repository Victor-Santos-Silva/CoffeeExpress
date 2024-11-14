import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');


  const acessar = async () => {
    if (!usuario || !senha) {
      Alert.alert("Erro, por favor preencha todos os campos!");
      return;
    }

    const acessar = { usuario, senha };

    axios.post('http://10.0.2.2:3000/produtos', acessar)
      .then(resposta => {
        if (resposta.status === 201) {
          Alert.alert("Seja bem-vindo!");
          setUsuario('');
          setSenha('');
        } else {
          Alert.alert("Erro, falha ao logar.");
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
        
      <Text style={styles.login}>Login do Garçon..</Text>

      <View style={styles.forms}>
        <Text style={styles.label}>Usuário:</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Digite o usuário"
          value={usuario}
          onChangeText={setUsuario}
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Digite sua senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

      </View>

      <View style={styles.buttonCad}>
        <TouchableOpacity style={styles.buyButton} onPress={() => useNavigation.navigate('Home')}>
          <Text style={styles.buyButtonText}>Acessar</Text>
        </ TouchableOpacity>
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
  login: {
    paddingTop: 60,
    paddingBottom: 70,
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
  buttonCad: {
    paddingLeft: 20,
    paddingRight: 20
  }
});
