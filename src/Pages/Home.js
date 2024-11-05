import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, View } from "react-native";
import Card from "../Components/Card";
import React from 'react';

export default function Home() {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={estilo.container}>
                <Card
                    title="Café"
                    description="Café quente "
                    money="R$ 8,00"
                />
                <Card
                    title="Chá"
                    description="Chá verde fresco"
                    money="R$ 6,00"
                />
                <Card
                    title="Chá"
                    description="Chá verde fresco"
                    money="R$ 6,00"
                />
                <Card
                    title="Chá"
                    description="Chá verde fresco"
                    money="R$ 6,00"
                />
            </View>
        </ScrollView>
    );
}

const estilo = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',  // Exibe os cards na mesma linha
        flexWrap: 'wrap',      // Permite que os cards quebrem para a próxima linha se necessário
        justifyContent: 'space-between', // Espaça os cards igualmente
        padding: 10,  // Adiciona um espaçamento interno ao container
    },
});
