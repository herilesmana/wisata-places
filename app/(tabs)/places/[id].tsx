import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking, Share } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons'; 
import { tempatWisata } from '../../../data/tempatWisata';

export default function PlaceDetail() {
  const { id } = useLocalSearchParams();
  const item = tempatWisata.find((place) => place.id === parseInt(id as string));

  if (!item) {
    return (
      <View style={styles.container}>
        <Text>Tempat wisata tidak ditemukan.</Text>
      </View>
    );
  }

  const handleOpenMaps = () => {
    Linking.openURL(item.googleMapsUrl);
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${item.title}\n\n${item.description}\n\nLokasi: ${item.googleMapsUrl}`,
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.largeButton} onPress={handleOpenMaps}>
            <FontAwesome name="map-marker" size={20} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Lihat di Google Maps</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.smallButton} onPress={handleShare}>
            <FontAwesome name="share-alt" size={20} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 300 },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, color: '#555', marginBottom: 20 },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  largeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 5,
    flex: 1, // Tombol ini akan mengambil ruang sisa
    marginRight: 10,
  },
  smallButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#28A745',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

PlaceDetail.options = {
  animation: 'fade',
};
