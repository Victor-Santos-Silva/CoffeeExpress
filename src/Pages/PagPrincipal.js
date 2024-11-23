import { useNavigation } from "@react-navigation/native";  // Importa o hook useNavigation para navegação entre telas
import React from 'react';  // Importa o React
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';  // Importa os componentes do React Native

export default function Principal() {
    const navigation = useNavigation();  // Hook de navegação para permitir a navegação para outra tela
    
    return (
        <View style={styles.container}>  {/* View principal que envolve todo o conteúdo */}
            <Image source={require('../assets/img/principal.png')} style={styles.image} />  {/* Imagem exibida no topo da tela */}
            
            <View>  {/* Contém o texto explicativo e o botão */}
                <Text style={styles.titulo}>Hora de uma pausa para o café....</Text>  {/* Título principal, em branco e com fonte grande */}
                
                <Text style={styles.texto}>  {/* Texto descritivo, com explicação sobre como abordar os clientes */}
                    Use o script para atrair nossos clientes, não se esqueça de ser gentil e educado,
                    sempre lembrar de desejar um ótimo dia a eles, e que você também tenha um!
                </Text>
                
                <View>
                    <Text style={styles.pontinhos}>...</Text>  {/* Pontinhos animados indicam uma pausa ou algo misterioso */}
                </View>

                <View style={styles.button}>  {/* Contém o botão de navegação */}
                    <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.buyButtonText}>Acessar</Text>  {/* Texto do botão */}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  // Faz com que o container ocupe toda a tela
        backgroundColor: '#38241D',  // Cor de fundo da tela, um tom marrom
    },
    image: {
        width: '100%',  // A imagem ocupa 100% da largura da tela
        height: 500,  // A altura da imagem é definida como 500
    },
    titulo: {
        color: "white",  // Cor do texto em branco
        fontSize: 25,  // Tamanho da fonte do título
        paddingTop: 20,  // Espaçamento superior do título
        paddingBottom: 20,  // Espaçamento inferior do título
        textAlign: "center",  // Alinha o texto no centro
        fontWeight: "bold",  // Deixa o texto em negrito
    },
    texto: {
        fontSize: 18,  // Tamanho da fonte do texto
        color: "#bfbfbf",  // Cor do texto em cinza claro
        textAlign: "center",  // Alinha o texto no centro
        paddingLeft: 12,  // Espaçamento à esquerda do texto
        paddingRight: 12,  // Espaçamento à direita do texto
    },
    pontinhos: {
        color: "white",  // Cor dos pontinhos em branco
        textAlign: "center",  // Alinha os pontinhos no centro
        fontSize: 50,  // Tamanho da fonte dos pontinhos
        fontWeight: "bold",  // Deixa os pontinhos em negrito
        paddingBottom: 20,  // Espaçamento inferior
    },
    button: {
        paddingLeft: 20,  // Espaçamento à esquerda do botão
        paddingRight: 20,  // Espaçamento à direita do botão
    },
    buyButton: {
        backgroundColor: '#D2691E',  // Cor de fundo do botão, um tom de laranja
        paddingVertical: 15,  // Espaçamento vertical dentro do botão
        paddingHorizontal: 20,  // Espaçamento horizontal dentro do botão
        borderRadius: 30,  // Bordas arredondadas do botão
    },
    buyButtonText: {
        color: '#fff',  // Cor do texto no botão, em branco
        fontSize: 20,  // Tamanho da fonte do texto do botão
        fontWeight: 'bold',  // Deixa o texto do botão em negrito
        textAlign: "center",  // Alinha o texto no centro
    }
});
