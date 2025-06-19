import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';
import axios from 'axios';
import { Snackbar } from 'react-native-paper';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [snackVisible, setSnackVisible] = useState(false);

  const searchPhotos = async () => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s&text=${query}&safe_search=1&content_type=1&sort=relevance`
      );
      setPhotos(res.data.photos.photo);
    } catch (err) {
      console.error(err);
      setSnackVisible(false); // Force reset
      setTimeout(() => setSnackVisible(true), 100); // Show again after delay
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search cats, dogs, etc"
        placeholderTextColor="#aaa"
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />
      <Button title="Search" onPress={searchPhotos} />

      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={photos}
          keyExtractor={(item) => item.id}
          numColumns={2}
          style={{ marginTop: 10 }}
          ListEmptyComponent={() => (
            <Text style={{ textAlign: 'center', marginTop: 20, color: '#ccc' }}>
              No images found
            </Text>
          )}
          renderItem={({ item }) =>
            item.url_s ? (
              <View style={styles.imageBox}>
                <Image source={{ uri: item.url_s }} style={styles.image} />
              </View>
            ) : null
          }
        />
      )}

      <Snackbar
        visible={snackVisible}
        onDismiss={() => setSnackVisible(false)}
        duration={4000}
        action={{
          label: 'Retry',
          onPress: () => {
            setSnackVisible(false);
            searchPhotos();
          },
        }}
      >
        Failed to fetch. Try again.
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#000' },
  input: {
    color: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 15,
    marginBottom: 15,
  },
  imageBox: { flex: 1, margin: 5 },
  image: { height: 150, borderRadius: 15 },
});

export default SearchScreen;
