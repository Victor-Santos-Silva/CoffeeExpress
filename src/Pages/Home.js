import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Card from "../Components/Card";
import Header from "../Components/Header"
import Carrinho from "../Components/Carrinho";
import Navegacao from "../Components/Navegacao"
export default function Home() {

    const navigation = useNavigation();

    return (
        <View>
            <Header />
            <ScrollView>
                <Carrinho />
                <View style={estilo.container}>
                    <Card
                        imageSource={require('../Images/cafe com leite.png')}
                        title="Cappuccino Tradicional"
                        description="Cappuccino "
                        money="R$ 8,00"
                        onPress={() => navigation.navigate('Descricao')}
                    />
                    <Card
                        imageSource={require('../Images/outro tipo de cappucino.png')}
                        title="Cappuccino de Baunilha"
                        description="Cappuccino"
                        money="R$ 6,00"
                        onPress={() => navigation.navigate('Descricao')}

                    />
                    <Card
                        imageSource={require('../Images/cappucino.png')}
                        title="Cappuccino de Canela"
                        description="Cappuccino"
                        money="R$ 6,00"
                        onPress={() => navigation.navigate('Descricao')}
                    />
                    <Card
                        imageSource={require('../Images/cafezinho expresso.png')}
                        title="Cappuccino de Avelã"
                        description="Cappuccino"
                        money="R$ 6,00"
                        onPress={() => navigation.navigate('Descricao')}
                    />
                </View>
            </ScrollView >
            <Navegacao />
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
        top: 150,
        bottom: 150
    },
});

