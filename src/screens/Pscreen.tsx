import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity, Button, FlatList, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getProdutos } from '../services/api';


const Pscreen: React.FC = () => {
  const navigation = useNavigation();
  const [produtos, setProdutos] = useState<any[]>([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      const data = await getProdutos();
      setProdutos(data);
    };

    fetchProdutos();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Image source={require('../assets/logo.png')} style={styles.logo} />

        <View style={styles.box}>
          <Button title="Voltar" onPress={() => navigation.goBack()} />

          <FlatList
            data={produtos}
            keyExtractor={(item) => item.id.toString()} // Assumindo que cada item tem um 'id'
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text>{item.name}</Text>
                <Text>R$ {item.price}</Text>
                <Image source={{ uri: item.imagem_url }} style={styles.image} />
                <Button title="+" onPress={() => { }} />
                <Button title="-" onPress={() => { }} />
              </View>
            )}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default Pscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fdfdfde6',
    marginTop: 2,

  },
  logo: {
    width: '35%',
    height: '14%',
    marginTop: '55%',
  },
  itemContainer: {
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});
