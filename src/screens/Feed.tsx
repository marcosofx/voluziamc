import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Carousel from 'react-native-reanimated-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import IntroModal from '../screens/IntroModal';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '../routes/types';
import { RootStackParamList } from '../routes/types';


const { width } = Dimensions.get('window');

interface CarouselItem {
  id: string;
  src: any;
}

const images: CarouselItem[] = [
  { id: '1', src: require('../assets/image1.jpg') },
  { id: '2', src: require('../assets/image2.jpg') },
  { id: '3', src: require('../assets/image3.jpg') },
  { id: '4', src: require('../assets/image4.jpg') },
  { id: '5', src: require('../assets/image5.jpg') },
  { id: '6', src: require('../assets/image6.jpg') },
  { id: '7', src: require('../assets/image7.jpg') },
  { id: '8', src: require('../assets/image8.jpg') },
];



type FeedScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Tabs'>;

export default function Feed() {
  const navigation = useNavigation<FeedScreenNavigationProp>();

  const [modalVisible, setModalVisible] = useState(true);

  const renderItem = ({ item }: { item: CarouselItem }) => (
    <View style={styles.carouselItem}>
      <Image source={item.src} style={styles.carouselImage} />
      <LinearGradient
        colors={['transparent', 'rgba(0, 0, 0, 0.589)']}
        style={styles.gradient}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <IntroModal visible={modalVisible} onClose={() => setModalVisible(false)} />

      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Image source={require('../assets/logo.png')} style={styles.logo} />

        <KeyboardAwareScrollView style={styles.box}>
          <Carousel
            data={images}
            width={width}
            height={250}
            renderItem={renderItem}
            loop
            autoPlay={true}
            autoPlayInterval={3000}
            pagingEnabled={true}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('StackRoutes', { screen: 'Pscreen'})}
            
          >
            <View style={styles.imageContainer}>
              <Image source={require('../assets/feed1.png')} style={styles.imgFeed} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View style={styles.imageContainer}>
              <Image source={require('../assets/feed2.png')} style={styles.imgFeed} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View style={styles.imageContainer}>
              <Image source={require('../assets/feed3.png')} style={styles.imgFeed} />
            </View>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </View>
  );
}

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
    marginTop: 5,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  logo: {
    width: '35%',
    height: '14%',
    marginTop: '10%',
  },
  carouselItem: {
    borderRadius: 35,
    height: '120%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: '95%',
    height: '78%',
    borderRadius: 35,
    marginTop: '-10%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c0c0c0',
    padding: -100,
    borderRadius: 25,
    width: '95%',
    margin: 11,
    marginVertical: '2.5%',
    marginLeft: '3%',
    height: 101,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 5,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
  },
  imgFeed: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderBottomEndRadius: 35,
    borderBottomStartRadius: 35,
    width: 393.1,
    margin: 10,
    height: 140,
    marginVertical: '26%',
    overflow: 'hidden',
    borderWidth: 0.2,
    borderColor: '#00000053',
  },
});
