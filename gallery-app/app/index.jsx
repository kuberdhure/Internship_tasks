import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import {
  NavigationIndependentTree,
} from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  const Drawer = createDrawerNavigator();
  
  // Create a custom dark theme by extending the built-in DarkTheme
  const MyDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#BB86FC',
      background: '#121212',
      card: '#1E1E1E',
      text: '#FFFFFF',
      border: '#272727',
    },
  };
  
  return (
    <PaperProvider>  
  <NavigationIndependentTree>
    <NavigationContainer theme={MyDarkTheme}>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1E1E1E',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerStyle: {
            backgroundColor: '#121212',
          },
          drawerLabelStyle: {
            color: '#FFFFFF',
          },
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Search" component={SearchScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
    </PaperProvider>
  );
}