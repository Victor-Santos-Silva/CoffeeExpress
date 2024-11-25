import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet,View } from "react-native";
import Card from "../Components/Card";
import Header from "../Components/Header"
import Menu from "../Components/Menu";
import Navegacao from "../Components/Navegacao";
export default function Home() {

    const navigation = useNavigation();

    const produtos = [
        {
            imageSource: require('../Images/cafe com leite.png'),
            title: 'Cappuccino Tradicional',
            description: 'Cappuccino',
            descriptionComplet: 'Uma combinação clássica de café espresso, leite vaporizado e espuma cremosa no topo. Levemente aromatizado com chocolate em pó ou canela, oferece um equilíbrio perfeito entre o sabor intenso do café e a suavidade do leite, ideal para qualquer momento do dia.',
            money: 'R$ 4,00',
            price: 4,
        },
        {
            imageSource: require('../Images/outro tipo de cappucino.png'),
            title: 'Cappuccino de Baunilha',
            description: 'Cappuccino',
            descriptionComplet: 'Uma variação suave e aromática do clássico, com o toque adocicado da baunilha que equilibra perfeitamente o café e o leite vaporizado, trazendo uma experiência cremosa e reconfortante.',
            money: 'R$ 6,00',
            price: 6,
        },
        {
            imageSource: require('../Images/cappucino.png'),
            title: 'Cappuccino de Canela',
            description: 'Cappuccino',
            descriptionComplet: 'O tradicional cappuccino ganha um toque especial com o aroma quente e envolvente da canela, que realça o sabor do café e adiciona um perfil levemente picante e acolhedor.',
            money: 'R$ 8,00',
            price: 8,
        },
        {
            imageSource: require('../Images/cafezinho expresso.png'),
            title: 'Cappuccino de Avelã',
            description: 'Cappuccino',
            descriptionComplet: 'Uma opção sofisticada e deliciosa, onde o sabor marcante do café se mistura com a doçura e o aroma único da avelã, criando uma bebida irresistível e cheia de personalidade.a',
            money: 'R$ 10,00',
            price: 10,
        },
        {
            imageSource: require('../Images/cafe com leite.png'),
            title: 'Cappuccino Tradicional',
            description: 'Cappuccino',
            descriptionComplet: 'Uma combinação clássica de café espresso, leite vaporizado e espuma cremosa no topo. Levemente aromatizado com chocolate em pó ou canela, oferece um equilíbrio perfeito entre o sabor intenso do café e a suavidade do leite, ideal para qualquer momento do dia.',
            money: 'R$ 4,00',
            price: 4,
        },
        {
            imageSource: require('../Images/outro tipo de cappucino.png'),
            title: 'Cappuccino de Baunilha',
            description: 'Cappuccino',
            descriptionComplet: 'Uma variação suave e aromática do clássico, com o toque adocicado da baunilha que equilibra perfeitamente o café e o leite vaporizado, trazendo uma experiência cremosa e reconfortante.',
            money: 'R$ 6,00',
            price: 6,
        },
        {
            imageSource: require('../Images/cappucino.png'),
            title: 'Cappuccino de Canela',
            description: 'Cappuccino',
            descriptionComplet: 'O tradicional cappuccino ganha um toque especial com o aroma quente e envolvente da canela, que realça o sabor do café e adiciona um perfil levemente picante e acolhedor.',
            money: 'R$ 8,00',
            price: 8,
        },
        {
            imageSource: require('../Images/cafezinho expresso.png'),
            title: 'Cappuccino de Avelã',
            description: 'Cappuccino',
            descriptionComplet: 'Uma opção sofisticada e deliciosa, onde o sabor marcante do café se mistura com a doçura e o aroma único da avelã, criando uma bebida irresistível e cheia de personalidade.a',
            money: 'R$ 10,00',
            price: 10,
        },

    ];

    return (
        <View style={estilo.pagina}>
            <Header />
            <ScrollView>
                <Menu />
                <View style={estilo.container}>
                    {produtos.map((produto, index) => (
                        <Card
                            key={index}
                            imageSource={produto.imageSource}
                            title={produto.title}
                            description={produto.description}
                            money={produto.money}
                            onPress={() => navigation.navigate('Descricao', produto)}
                        />
                    ))}
                </View>
            </ScrollView>
            <Navegacao />
        </View>
    );
}

const estilo = StyleSheet.create({
    pagina: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
        top: 200,
        bottom: 150,
        height: 1500
    },
    
});