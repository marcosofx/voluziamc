import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from '../screens/Feed';
import Pscreen from '../screens/Pscreen';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='Feed'
        component={Feed}
      />
      <Stack.Screen
        name='Pscreen'
        component={Pscreen}
      />
    </Stack.Navigator>
  );
}
