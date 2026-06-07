// Importa a função responsável por criar a navegação por abas
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Importa as telas que serão exibidas nas abas
import FavoritesScreen from "../screens/FavoritesScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";

// Cria o objeto Tab que será utilizado para registrar as abas
const Tab = createBottomTabNavigator();

// Componente responsável pela navegação inferior do aplicativo
export default function TabNavigation() {
  return (
    // Navigator que gerencia as abas do aplicativo
    <Tab.Navigator>
      {/* Aba da tela inicial */}
      <Tab.Screen
        name="Home" // Nome exibido na aba
        component={HomeScreen} // Tela que será aberta
      />

      {/* Aba de pesquisa */}
      <Tab.Screen name="Pesquisa" component={SearchScreen} />

      {/* Aba de favoritos */}
      <Tab.Screen name="Favoritos" component={FavoritesScreen} />

      {/* Aba de perfil */}
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
