import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from '../screens/Start'; 
import TabRoutes from './tab.routes'; // Certifique-se de que o caminho está correto

const Stack = createNativeStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* A tela "Start" deve ser a primeira no Stack Navigator */}
        <Stack.Screen name="Start" component={Start} /> 
        {/* Após a tela "Start", navegar para o TabRoutes */}
        <Stack.Screen name="Main" component={TabRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoutes;
