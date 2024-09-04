import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import TabRoutes from './tab.routes';
import StackRoutes from './stack.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true, // Mostrar o header para personalizá-lo
                headerTransparent: true, // Torna o header transparente
                headerTitle: '', // Remove o título do header
                headerTintColor: '#fff', // Cor do ícone do menu (hambúrguer)
                headerStyle: {
                    backgroundColor: 'transparent', // Torna o fundo do header transparente
                    elevation: 0, // Remove sombra no Android
                    shadowOpacity: 0, // Remove sombra no iOS
                },
                drawerStyle: {
                    backgroundColor: '#fff', // Fundo transparente do drawer
                },
                drawerType: 'front', 
            }}>
            <Drawer.Screen
                name='Home'
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                    drawerLabel: 'Inicio',


                }}
            />
            <Drawer.Screen
                name='Pscreen'
                component={StackRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="shopping-bag" color={color} size={size} />,
                    drawerLabel: 'Produtos'
                }}
            />
        </Drawer.Navigator>
    )
}