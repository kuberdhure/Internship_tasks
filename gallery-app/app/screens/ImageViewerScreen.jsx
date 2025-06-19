import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageViewerScreen = ({ route }) => {
  const { url } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: url }}
        style={styles.fullImage}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // dark background
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
});

export default ImageViewerScreen;
