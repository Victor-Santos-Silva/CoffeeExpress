import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, View } from "react-native";
import Card from "../Components/Card";
import Header from "../Components/Header"
export default function Home() {

    const navigation = useNavigation();

    return (
        <ScrollView>
            <Header />
            <View style={estilo.container}>

                <Card
                    title="Café"
                    description="Café quente "
                    money="R$ 8,00"
                    onPress={() => navigation.navigate('Descricao')}
                />
                <Card
                    title="Chá"
                    description="Chá verde fresco"
                    money="R$ 6,00"
                    onPress={() => navigation.navigate('Descricao')}

                />
                <Card
                    title="Chá"
                    description="Chá verde fresco"
                    money="R$ 6,00"
                    onPress={() => navigation.navigate('Descricao')}
                />
                <Card
                    title="Chá"
                    description="Chá verde fresco"
                    money="R$ 6,00"
                    onPress={() => navigation.navigate('Descricao')}
                />

            </View>
        </ScrollView>
    );
}

const estilo = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    },
});


