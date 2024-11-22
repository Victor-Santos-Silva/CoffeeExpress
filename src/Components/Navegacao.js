import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function Navegacao() {
    const navigation = useNavigation();

    return (
        <View style={styles.navegacao}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="home" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Lista')}>
                <Ionicons name="list" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

// Estilos
const styles = StyleSheet.create({
    navegacao: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center", // Garante alinhamento vertical
        height: 'auto'
    },
});
