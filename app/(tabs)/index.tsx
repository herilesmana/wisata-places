import { StyleSheet, View, Text } from 'react-native';
import { Image } from 'expo-image';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Selamat Datang
      </Text>
      <Image source={require('../../assets/images/wisata-places.jpg')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  image: { width: 200, height: 200, borderRadius: 15 },
});