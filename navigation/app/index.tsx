import React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import DrawerNavigator from './navigation/MainNavigator';
import { ThemeProvider, useThemeContext } from './context/ThemeContext';

function AppInner() {
  const { theme } = useThemeContext();
  return (
    <NavigationIndependentTree>
      <NavigationContainer theme={theme}>
        <DrawerNavigator />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}