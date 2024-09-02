import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

import Feed from '../screens/Feed';
import Bcart from '../screens/Bcart';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
          tabBarLabel: 'Início',
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopWidth: 0,
            elevation: 0,
            borderTopLeftRadius: 25, 
            borderTopRightRadius: 25, 
            position: 'absolute', 
            overflow: 'hidden', 
          },
        }}
      />
      <Tab.Screen
        name="Bcart"
        component={Bcart}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="shoppingcart" color={color} size={29} />,
          tabBarLabel: 'Carrinho',
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopWidth: 0,
            elevation: 0,
            borderTopLeftRadius: 25, 
            borderTopRightRadius: 25, 
            position: 'absolute', 
            overflow: 'hidden', 
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
