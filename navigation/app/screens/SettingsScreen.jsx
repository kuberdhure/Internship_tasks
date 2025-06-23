import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useThemeContext } from '../context/ThemeContext';
import { useTheme } from '@react-navigation/native';


export default function SettingsScreen() {
  const { isDark, toggleTheme } = useThemeContext();
  const { colors } = useTheme();
  
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>Settings</Text>

      <View style={[styles.row,{ color: colors.text }]}>
        <Text style={[styles.label,{ color: colors.text }]}>Dark Mode</Text>
        <Switch value={isDark} onValueChange={toggleTheme} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  label: { fontSize: 16 },
});
