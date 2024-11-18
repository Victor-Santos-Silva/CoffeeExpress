import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function Carrinho() {

    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Lista')}>
                <Text > Carrinho</Text>
            </TouchableOpacity>
        </View>
    );
}

const estilos = StyleSheet.create({
    
});
