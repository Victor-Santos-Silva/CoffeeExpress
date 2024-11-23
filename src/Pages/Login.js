import React, { useState } from 'react';  // Importa o React e o hook useState para gerenciar o estado dos dados de login
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';  // Importa os componentes do React Native
import { useNavigation } from '@react-navigation/native';  // Importa o hook useNavigation para navegação entre telas

export default function Login() {
  const [usuario, setUsuario] = useState('');  // Estado para armazenar o nome de usuário
  const [senha, setSenha] = useState('');  // Estado para armazenar a senha do usuário
  const navigation = useNavigation();  // Hook de navegação para permitir a navegação para outra tela

  // Função chamada quando o usuário tenta fazer login
  const acessar = () => {
    // Verifica se os campos de usuário e senha estão preenchidos
    if (!usuario || !senha) {
      Alert.alert("Erro, por favor preencha todos os campos!");  // Exibe um alerta se algum campo estiver vazio
      return;
    }

    // Verifica se o usuário e senha estão corretos
    if (usuario === 'admin' && senha === 'admin') {
      Alert.alert("Seja bem-vindo!");  // Alerta de boas-vindas se o login for bem-sucedido
      setUsuario('');  // Limpa os campos de usuário e senha
      setSenha('');  
      navigation.navigate('Home');  // Navega para a tela "Home" após login bem-sucedido
    } else {
      Alert.alert("Erro, usuário ou senha incorretos.");  // Exibe um alerta de erro caso as credenciais estejam incorretas
    }
  };

  return (
    <View style={styles.container}>  {/* View principal que envolve todo o conteúdo */}
      <View style={styles.cabecalho}>  {/* Cabeçalho da tela */}
        <Text style={styles.coffee}>Coffee Express</Text>  {/* Título do aplicativo */}
        <Image source={require('../assets/img/capuccino.png')} style={styles.image} />  {/* Imagem do logo */}
      </View>
        
      <Text style={styles.login}>Login do Garçon..</Text>  {/* Texto explicativo sobre a tela de login */}

      <View style={styles.forms}>  {/* Formulário para entrada de usuário e senha */}
        <Text style={styles.label}>Usuário:</Text>  {/* Rótulo para o campo de usuário */}
        <TextInput 
          style={styles.input}  // Estilo do campo de entrada de texto
          placeholder="Digite o usuário"  // Texto de sugestão no campo de entrada
          value={usuario}  // Valor do campo de usuário (controlado pelo estado)
          onChangeText={setUsuario}  // Atualiza o estado de 'usuario' sempre que o texto mudar
        />

        <Text style={styles.label}>Senha:</Text>  {/* Rótulo para o campo de senha */}
        <TextInput 
          style={styles.input}  // Estilo do campo de entrada de texto
          placeholder="Digite sua senha"  // Texto de sugestão no campo de entrada
          secureTextEntry  // Torna o campo de senha seguro (os caracteres digitados são ocultos)
          value={senha}  // Valor do campo de senha (controlado pelo estado)
          onChangeText={setSenha}  // Atualiza o estado de 'senha' sempre que o texto mudar
        />
      </View>

      <View style={styles.buttonCad}>  {/* Container para o botão de login */}
        <TouchableOpacity style={styles.buyButton} onPress={acessar}>  {/* Botão para fazer o login */}
          <Text style={styles.buyButtonText}>Acessar</Text>  {/* Texto do botão */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",  // Cor de fundo do container principal
    flex: 1,  // Faz com que o container ocupe toda a tela
  },
  image: {
    width: 100,  // Largura da imagem
    height: 100,  // Altura da imagem
    left: 310,  // Posiciona a imagem à esquerda
  },
  coffee: {
    fontSize: 30,  // Tamanho da fonte do título
    top: 60,  // Distância do topo da tela
    textAlign: "center",  // Alinha o texto no centro
    fontWeight: "bold",  // Deixa o texto em negrito
    color: "white",  // Cor do texto
  },
  cabecalho: {
    backgroundColor: "#38241D",  // Cor de fundo do cabeçalho
  },
  login: {
    paddingTop: 60,  // Distância do topo
    paddingBottom: 70,  // Distância da parte inferior
    fontSize: 25,  // Tamanho da fonte do texto
    fontWeight: "bold",  // Deixa o texto em negrito
    textAlign: "center",  // Alinha o texto no centro
    color: "#38241D",  // Cor do texto
  },
  label: {
    fontSize: 18,  // Tamanho da fonte do rótulo
    marginBottom: 5,  // Margem inferior
    textAlign: "center",  // Alinha o texto no centro
    fontWeight: "bold",  // Deixa o texto em negrito
    color: "#38241D",  // Cor do texto
  },
  input: {
    borderWidth: 1,  // Largura da borda do campo de entrada
    borderColor: "#ccc",  // Cor da borda
    padding: 10,  // Espaçamento interno
    marginBottom: 20,  // Margem inferior
    borderRadius: 20,  // Bordas arredondadas
  },
  forms: {
    padding: 10,  // Espaçamento interno do formulário
  },
  buyButton: {
    backgroundColor: '#38241D',  // Cor de fundo do botão
    paddingVertical: 15,  // Espaçamento vertical dentro do botão
    paddingHorizontal: 20,  // Espaçamento horizontal dentro do botão
    borderRadius: 30,  // Bordas arredondadas
  },
  buyButtonText: {
    color: '#fff',  // Cor do texto do botão
    fontSize: 20,  // Tamanho da fonte
    fontWeight: 'bold',  // Deixa o texto em negrito
    textAlign: "center",  // Alinha o texto no centro
  },
  buttonCad: {
    paddingLeft: 20,  // Espaçamento à esquerda do botão
    paddingRight: 20,  // Espaçamento à direita do botão
  }
});
