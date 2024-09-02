import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
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
  Box: {
    width: "100%",
    height: "100%",
    backgroundColor: '#fdfdfde6',
    marginTop: 5,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35

  },
  logo: {
    width: "35%",
    height: "14%",
    marginTop: "10%",


  },

  title: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});
