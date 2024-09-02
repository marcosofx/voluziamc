
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Modal, ImageBackground } from 'react-native';

interface IntroModalProps {
  visible: boolean;
  onClose: () => void;
}

const IntroModal: React.FC<IntroModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.modalContent}>
          <Image source={require('../assets/logo.png')} style={styles.modalLogo} />
          <TouchableOpacity style={styles.modalButton} onPress={onClose}>
            <Text style={styles.modalButtonText}>Acessar</Text>
          </TouchableOpacity>
          <Image source={require('../assets/LogoDev.png')} style={styles.modalLogoDev} />
        </View>
        </ImageBackground>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backgroundImage: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '100%',
    height: '100%',
    padding: 160,
    alignItems: 'center',
  },
  modalLogo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#ff9705',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    width: 110,
    height: 50,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalLogoDev: {
    width: 150,
    height: 110,
    marginBottom: 20,
    marginTop: 170,
    resizeMode: 'cover',
    
  },
  // opção de logo Dev alternativa * LogoDev2.png styles.modalLogoDev2
  /*modalLogoDev2: {
    width: 300,
    height: 110,
    marginBottom: 20,
    marginTop: 190,
    resizeMode: 'cover',
    
  },*/

});

export default IntroModal;
