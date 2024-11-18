import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const items = [
  {
    id: '1',
    image: require('../assets/img/coffee1.png'),
    title: 'Expresso Coffee',
    subtitle: 'with Chocolate',
    description: 'A cappuccino is an approximately 150 ml (5 oz) beverage...',
    price: '$ 4.53',
  },
  {
    id: '2',
    image: require('../assets/img/coffee5.png'),
    title: 'Latte Coffee',
    subtitle: 'with Caramel',
    description: 'A latte is made with espresso and steamed milk...',
    price: '$ 5.00',
  },
  // Adicione mais itens aqui
];

export default function ItemList() {
  const navigation = useNavigation();

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('ItemDetail', item)}
        >
          <Image source={item.image} style={styles.image} />
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
});
