import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Bcart() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Image source={require('../assets/logo.png')} style={styles.logo} />

        <KeyboardAwareScrollView style={styles.Box} >
          <Text style={styles.title}>Itens</Text>
          <View style={styles.underline} />
        </KeyboardAwareScrollView>
        <View style={styles.Box2} >
          <TouchableOpacity style={styles.Button}><Text style={styles.ButtonText}>Prosseguir</Text></TouchableOpacity>

        </View>




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
  Box: {
    width: "100%",
    height: "100%",
    backgroundColor: '#fdfdfde6',
    marginTop: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35

  },
  Box2: {
    width: "100%",
    height: "30%",
    backgroundColor: '#4e4e4e',

  },
  logo: {
    width: "35%",
    height: "13%",
    marginTop: "9%",


  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 25,
    marginRight: "50%",
    width: "85%",


  },
  underline: {
    height: 2, 
    width: '90%', 
    backgroundColor: '#000', 
    marginTop: 4, 
    marginLeft: 19
  },
  Button: {
    backgroundColor: '#ff9705',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    width: 150,
    height: 50,
    marginTop: 9,
    marginLeft: "60%"
  },

  ButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: "9%"


  },
});
