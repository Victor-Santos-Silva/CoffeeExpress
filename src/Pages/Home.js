import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Card from '../Components/Card';
import { useNavigation } from '@react-navigation/native';

const items = [
  {
    id: '1',
    image: require('../assets/img/coffee1.png'),
    title: 'Expresso Coffee',
    subtitle: 'with Chocolate',
    price: '$ 4.53',
    description: 'A strong, rich espresso with a touch of chocolate.',
  },
  {
    id: '2',
    image: require('../assets/img/coffee5.png'),
    title: 'Latte Coffee',
    subtitle: 'with Caramel',
    price: '$ 5.00',
    description: 'A creamy latte blended with sweet caramel syrup.',
  },
];

export default function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        {items.map((item) => (
          <Card
            key={item.id}
            imageSource={item.image}
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
            onPress={() => navigation.navigate('Descricao', { ...item })}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
