import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function AboutScreen() {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: colors.text }]}>SnapFlick</Text>
            <Text style={[styles.title, { color: colors.text }]}>Version 1.0.0</Text>
            <Text style={[styles.title, { color: colors.text },{ marginTop: 10 }]}>
                Built with ❤️ using React Native and the Flickr API by Mr.K
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});
