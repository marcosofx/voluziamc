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
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <View style={styles.boxImg}>
                  <Image source={{ uri: item.imagem_url }} style={styles.image} />
                </View>
                <View style={styles.boxName}>
                  <Text>{item.name}</Text>
                </View>
                <View style={styles.boxPrice}>
                  <Text>R$ {item.price}</Text>
                </View>

                <View style={styles.boxButton}>
                  <View style={styles.plus}>
                    <Button title="+" onPress={() => { }} />
                  </View>
                  <Text>
                    00
                  </Text>
                  <View style={styles.less}>
                    <Button title="-" onPress={() => { }} />
                  </View>
                </View>
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
    backgroundColor: '#0084ff',
    justifyContent: 'space-between',
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10,
    elevation: 5,
    margin: 7,
  },
  image: {
    width: 70,
    height: 70,
    backgroundColor: '#000000e6',
  },
  boxImg: {
    width: 80,
    height: 80,
    backgroundColor: '#d42525',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  boxName: {
    backgroundColor: '#74eb7ae6',
  },
  boxPrice: {
    backgroundColor: '#de37ffe6',
  },
  boxButton: {
    backgroundColor: '#ff0000e6',
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 5,
  },
  plus: {
    width: 25,
    height: 25,
    marginRight: 5,
    
  },
  less: {
    width: 25,
    height: 25,
    marginLeft: 5,
  },

});
