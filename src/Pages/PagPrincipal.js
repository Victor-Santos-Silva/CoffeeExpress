import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default function Principal() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/img/principal.png')} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2F1B0C',
    },
    image: {
        width: '100%',
        height: 550,
    },
});