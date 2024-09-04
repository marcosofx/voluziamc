import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Pscreen from '../screens/Pscreen';
import Feed from '../screens/Feed';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen
        name='user'
        component={Pscreen}

      />
            <Stack.Screen
        name='home'
        component={Feed}

      />
    </Stack.Navigator>
  )
}