import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';

// Import data tempatWisata
import { tempatWisata } from '../../../data/tempatWisata';
import { Href, useRouter } from 'expo-router';
import { Image } from 'expo-image';

export default function Index() {
  const router = useRouter();

  const renderItem = ({ item }: { item: { id: number; imageUrl: string; title: string; description: string } }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => router.push(`/places/${item.id}` as unknown as Href<string | object>)}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Daftar Tempat Wisata</Text>
      <FlatList
        data={tempatWisata}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
  },
  text: {
    // color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 15,
  },
  itemContainer: {
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fefefe',
  },
  image: { width: '100%', height: 200, borderRadius: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  description: { fontSize: 14, color: '#555' },
});