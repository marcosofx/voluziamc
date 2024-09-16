import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity, Button, FlatList, Text, Modal, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute, RouteProp   } from '@react-navigation/native';
import { getProdutos } from '../services/api';
import AntDesign from '@expo/vector-icons/AntDesign';


type RootStackParamList = {
  Pscreen: { tableName: string };
};

const Pscreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, 'Pscreen'>>();
  const { tableName } = route.params;
  const [produtos, setProdutos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

  useEffect(() => {
    const fetchProdutos = async () => {
      setLoading(true);
      const data = await getProdutos(tableName); // Passa o nome da tabela na função de busca
      setProdutos(data);
      setLoading(false);
    };

    fetchProdutos();
  }, [tableName]); // Atualiza os produtos ao mudar a tabela


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
                <View style={styles.boxInfo}>
                  <View style={styles.boxName}>
                    <Text style={styles.title}>{item.name}</Text>
                  </View>
                  <View style={styles.boxDatails}>
                    <Text style={styles.subTitle}>{item.details}</Text>
                  </View>
                </View>
                <View style={styles.boxInfo2}>
                  <View style={styles.boxPrice}>
                    <Text style={styles.titlePrice}>R$ {item.price}</Text>
                  </View>
                  <View style={styles.boxButton}>
                    <View>
                      <TouchableOpacity style={styles.plus} onPress={() => { }}>
                        <AntDesign style={styles.Icon} name="minussquareo" size={22} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <Text>0</Text>
                    <View>
                      <TouchableOpacity style={styles.less} onPress={() => { }}>
                        <AntDesign style={styles.Icon} name="plussquareo" size={22} color="grey" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ImageBackground>

      {/* Modal de Carregamento */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={loading}
        onRequestClose={() => { }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>Carregando...</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

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
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    elevation: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000e6',
  },
  boxImg: {
    width: 80,
    height: 80,
    backgroundColor: '#d42525',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    overflow: 'hidden',
  },
  boxInfo: {
    width: 195,
    height: 80,
  },
  boxName: {
    padding: 1,
  },
  boxDatails: {
    padding: 5,
  },
  boxPrice: {
    padding: 5,
    marginBottom: 5,
    marginTop: 5,
  },
  boxInfo2: {
    width: 100,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  plus: {
    width: 30,
    height: 25,
    marginRight: 5,
    borderRadius: 5,
  },
  less: {
    width: 30,
    height: 25,
    marginLeft: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 'semibold',
  },
  titlePrice: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  Icon: {
    position: 'absolute',
    right: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 1,
    paddingVertical: 2,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  loadingBox: {
    width: 150,
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
  },
});
