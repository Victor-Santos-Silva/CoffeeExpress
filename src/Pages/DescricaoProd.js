import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Descricao() {
  return (
    <ScrollView>

      <View style={styles.container}>
        <Image
          source={require('../assets/img/coffee1.png')}
          style={styles.image} />
        <Text style={styles.descricao}>Expresso Coffee</Text>
        <Text style={styles.detalhe}>with Chocolate</Text>
        <Text style={styles.description}>Description</Text>
        <Text style={styles.texto}>A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee
          and 85 ml of fresh milk the fo.. Read More</Text>


        <View style={styles.sizeContainer}>
          <Text style={styles.sizeTitle}>Size</Text>
          <View style={styles.sizeOptions}>
            <Text style={styles.sizeOption}>S</Text>
            <Text style={[styles.sizeOption, styles.sizeSelected]}>M</Text>
            <Text style={styles.sizeOption}>L</Text>
          </View>
        </View>
        <Text style={styles.detalhe}>Price</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>$ 4.53</Text>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20
  },
  image: {
    width: '100%',
    height: 370,
    resizeMode: 'contain',
    marginTop: 20,
  },
  descricao: {
    fontSize: 23,
    fontWeight: "bold"
  },
  detalhe: {
    paddingTop: 10,
    fontSize: 15,
    color: "gray"
  },
  description: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: "bold"
  },
  texto: {
    paddingTop: 10,
    fontSize: 17
  },
  sizeContainer: {
    marginBottom: 15,
  },
  sizeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    paddingTop: 15
  },
  sizeOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  sizeOption: {
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  sizeSelected: {
    backgroundColor: "#FFE5B4",
    color: "#D2691E",
    borderColor: "#D2691E"
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    color: "#D2691E",
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#D2691E',
    paddingVertical: 10,
    paddingHorizontal: 55,
    borderRadius: 30,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});