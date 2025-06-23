import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function SavedScreen() {

    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}    >
            <Text  style={[styles.title, { color: colors.text }]}>Saved/Downloads Screen</Text>
            <Text style={{ color: colors.text }}>Saved Images will appear here</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    heading: { fontSize: 24, fontWeight: 'bold' }
});
