import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import TabRoutes from './tab.routes';
import StackRoutes from './stack.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                headerTransparent: true,
                headerTitle: '',
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: 'transparent',
                    elevation: 0,
                    shadowOpacity: 0,
                },
                drawerStyle: {
                    backgroundColor: '#fff',
                },
                drawerType: 'front',
            }}>
            <Drawer.Screen
                name='Tabs'
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                    drawerLabel: 'Início',
                }}
            />
            <Drawer.Screen
                name='StackRoutes'
                component={StackRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="shopping-bag" color={color} size={size} />,
                    drawerLabel: 'Produtos',
                }}
            />
        </Drawer.Navigator>
    );
}
