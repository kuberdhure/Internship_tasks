import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const HomeScreen = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchPhotos = async (pageNumber = 1) => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=${pageNumber}&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s&safe_search=1`;

    try {
      const res = await axios.get(url);
      const newPhotos = res.data.photos.photo;
      const totalPages = res.data.photos.pages;

      if (pageNumber === 1) {
        setPhotos(newPhotos);
      } else {
        setPhotos((prev) => [...prev, ...newPhotos]);
      }

      // Update `hasMore` properly using API's total pages
      setHasMore(pageNumber < totalPages);
      setPage(pageNumber);

      // Save merged data to cache
      const cached = await AsyncStorage.getItem('cachedPhotos');
      const parsedCache = cached ? JSON.parse(cached) : [];

      const updatedCache = pageNumber === 1 ? newPhotos : [...parsedCache, ...newPhotos];
      await AsyncStorage.setItem('cachedPhotos', JSON.stringify(updatedCache));
    } catch (err) {
      console.log('Fetch error:', err.message);
      const cached = await AsyncStorage.getItem('cachedPhotos');
      if (cached) {
        setPhotos(JSON.parse(cached));
        setHasMore(false); // fallback mode
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
      setIsFetchingMore(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <FlatList
            data={photos}
            keyExtractor={(item) => item.id}
            numColumns={2}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => {
                  setRefreshing(true);
                  setHasMore(true);
                  fetchPhotos(1);
                }}
              />
            }
            renderItem={({ item }) =>
              item.url_s ? (
                <View style={styles.imageBox}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      setSelectedImage(item.url_s);
                      setModalVisible(true);
                    }}
                  >
                    <Image
                      source={{ uri: item.url_s }}
                      style={styles.image}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                </View>
              ) : null
            }
            onEndReached={() => {
              if (!isFetchingMore && hasMore) {
                setIsFetchingMore(true);
                fetchPhotos(page + 1);
              }
            }}
            onEndReachedThreshold={0.5}
            ListFooterComponent={() =>
              isFetchingMore ? <ActivityIndicator size="small" color="#fff" /> : null
            }
          />

          <Modal
            visible={modalVisible}
            transparent
            animationType="fade"
            onRequestClose={() => setModalVisible(false)}
          >
            <Pressable
              style={styles.modalContainer}
              onPress={() => setModalVisible(false)}
            >
              <Image
                source={{ uri: selectedImage }}
                style={styles.modalImage}
                resizeMode="contain"
              />
            </Pressable>
          </Modal>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#000' },
  imageBox: { flex: 1, margin: 5 },
  image: { height: 150, borderRadius: 10 },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000000dd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: '95%',
    height: '80%',
  },
});

export default HomeScreen;
