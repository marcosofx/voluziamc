import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type StackParamList = {
  Start: undefined;
  Main: undefined; 
};

type StartScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'Start'>;

const Start: React.FC = () => {
  const navigation = useNavigation<StartScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Start Screen!</Text>
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('Main')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Start;
