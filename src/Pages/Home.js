import { useNavigation } from "@react-navigation/native";  // Importa o hook useNavigation para navegação entre telas
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";  // Importa componentes do React Native
import Card from "../Components/Card";  // Importa o componente Card para exibir os produtos
import Header from "../Components/Header";  // Importa o componente Header (provavelmente exibe o título ou informações de navegação)
import Navegacao from "../Components/Navegacao";  // Importa o componente Navegacao, provavelmente a barra de navegação inferior

export default function Home() {

    const navigation = useNavigation();  // Cria uma instância do hook de navegação

    // Array com os produtos disponíveis para exibição na tela inicial
    const produtos = [
        {
            imageSource: require('../Images/cafe com leite.png'),  // Caminho da imagem do produto
            title: 'Cappuccino Tradicional',  // Título do produto
            description: 'Cappuccino',  // Descrição do produto
            money: 'R$ 4,00',  // Preço do produto, exibido como string
            price: 4,  // Preço do produto, em formato numérico (usado para cálculo ou lógica)
        },
        {
            imageSource: require('../Images/outro tipo de cappucino.png'),
            title: 'Cappuccino de Baunilha',
            description: 'Cappuccino',
            money: 'R$ 6,00',
            price: 6,
        },
        {
            imageSource: require('../Images/cappucino.png'),
            title: 'Cappuccino de Canela',
            description: 'Cappuccino',
            money: 'R$ 8,00',
            price: 8,
        },
        {
            imageSource: require('../Images/cafezinho expresso.png'),
            title: 'Cappuccino de Avelã',
            description: 'Cappuccino',
            money: 'R$ 10,00',
            price: 10,
        }
    ];

    return (
        <View style={estilo.pagina}>  {/* Container principal da tela */}
            <Header />  {/* Exibe o componente de cabeçalho */}
            <ScrollView>  {/* ScrollView para permitir rolagem dos produtos caso ocupem mais espaço do que a tela */}
                <View style={estilo.container}>  {/* Container dos produtos */}
                    {produtos.map((produto, index) => (  // Itera sobre o array de produtos
                        <Card  // Componente de Card que exibe os detalhes de cada produto
                            key={index}  // Chave única para cada item da lista
                            imageSource={produto.imageSource}  // Imagem do produto
                            title={produto.title}  // Título do produto
                            description={produto.description}  // Descrição do produto
                            money={produto.money}  // Preço do produto como string
                            onPress={() => navigation.navigate('Descricao', produto)}  // Navegação para a tela "Descricao" com os dados do produto
                        />
                    ))}
                </View>
            </ScrollView>
            <Navegacao />  {/* Exibe a barra de navegação inferior */}
        </View>
    );
}

// Estilos da tela
const estilo = StyleSheet.create({
    pagina: {
        flex: 1,  // Faz com que o container ocupe toda a tela
    },
    container: {
        display: 'flex',  // Usa flexbox para o layout
        flexDirection: 'row',  // Os cards dos produtos serão exibidos em linha
        flexWrap: 'wrap',  // Permite que os cards se envolvam em múltiplas linhas, caso o espaço seja pequeno
        justifyContent: 'space-between',  // Distribui os cards com espaço entre eles
        padding: 10,  // Adiciona espaçamento interno ao container
        top: 150,  // Define uma distância do topo da tela (provavelmente para não sobrepor o header)
        bottom: 150,  // Define uma distância do fundo da tela (provavelmente para não sobrepor o footer)
        height: 1500  // Define a altura do container, o que pode ser ajustado conforme o conteúdo
    },
});
