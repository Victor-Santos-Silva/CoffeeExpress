import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Principal() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/img/principal.png')} style={styles.image}/>
            <View>
                <Text></Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4c332c',
    },
    image: {
        width: '100%',
        height: 550,
    },
});