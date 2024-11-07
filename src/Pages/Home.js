import { useNavigation } from "@react-navigation/native";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../Components/Card";

export default function Home() {

    const navigation = useNavigation();

    return (
        <ScrollView>
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


