import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import TabsNavigator from './TabsNavigator';
import {
  ProfileScreen,
  AboutScreen,
  SavedScreen,
  SettingsScreen,
} from '../screens';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native'; // 🟢 Theme

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const { colors } = useTheme(); // 🟢 Get theme colors

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Main App"
        onPress={() => props.navigation.navigate('Tabs')}
        icon={({ size }) => (
          <Ionicons name="grid-outline" size={size} color={colors.text} />
        )}
        labelStyle={{ color: colors.text }}
      />
      <DrawerItem
        label="Profile"
        onPress={() => props.navigation.navigate('Profile')}
        icon={({ size }) => (
          <Ionicons name="person-outline" size={size} color={colors.text} />
        )}
        labelStyle={{ color: colors.text }}
      />
      <DrawerItem
        label="Downloads"
        onPress={() => props.navigation.navigate('Downloads')}
        icon={({ size }) => (
          <Ionicons name="download-outline" size={size} color={colors.text} />
        )}
        labelStyle={{ color: colors.text }}
      />
      <DrawerItem
        label="About"
        onPress={() => props.navigation.navigate('About')}
        icon={({ size }) => (
          <Ionicons name="information-circle-outline" size={size} color={colors.text} />
        )}
        labelStyle={{ color: colors.text }}
      />
      <DrawerItem
        label="Settings"
        onPress={() => props.navigation.navigate('DrawerSettings')}
        icon={({ size }) => (
          <Ionicons name="settings-outline" size={size} color={colors.text} />
        )}
        labelStyle={{ color: colors.text }}
      />

      <View style={[styles.footer, { borderTopColor: colors.border }]}>
        <Text style={[styles.footerText, { color: colors.text }]}>SnapFlick v1.0.0</Text>
        <Text style={[styles.footerText, { color: colors.text }]}>by Mr.K</Text>
      </View>
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
       
      }}
    >
      <Drawer.Screen name="Tabs" component={TabsNavigator} options={{ title: 'Gallery' }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Downloads" component={SavedScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="DrawerSettings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginTop: 40,
    alignItems: 'center',
    borderTopWidth: 1,
    paddingTop: 10,
  },
  footerText: {
    fontSize: 12,
  },
});
