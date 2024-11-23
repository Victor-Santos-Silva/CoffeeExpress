import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Card from "../Components/Card";
import Header from "../Components/Header"
import Navegacao from "../Components/Navegacao"
export default function Home() {

    const navigation = useNavigation();

    const produtos = [
        {
            imageSource: require('../Images/cafe com leite.png'),
            title: 'Cappuccino Tradicional',
            description: 'Cappuccino',
            money: 'R$ 4,00',
            price: 4,
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
        <View style={estilo.pagina}>
            <Header />
            <ScrollView>
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
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
        top: 150,
        bottom: 150,
        height: 1500
    },
});