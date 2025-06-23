import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function ProfileScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=12'}}
        style={styles.avatar}
      />
      <Text  style={[styles.title, { color: colors.text }]}>Mr.K</Text>
      <Text style={[styles.title, { color: colors.text }]}      >Software Dev - Intern</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 16 },
  name: { fontSize: 20, fontWeight: '600' },
  role: { fontSize: 14, color: '#555' },
});
