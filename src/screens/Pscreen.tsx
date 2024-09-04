import React from 'react';
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity, Button, BackHandler } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';


export default function Products() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>


      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Image source={require('../assets/logo.png')} style={styles.logo} />

        <KeyboardAwareScrollView style={styles.box}>
          <Button
            title="Voltar"
            onPress={() => navigation.goBack()
            }


          />



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
    marginTop: 2,

  },
  logo: {
    width: '35%',
    height: '14%',
    marginTop: '10%',
  },


});
