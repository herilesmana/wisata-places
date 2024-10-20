import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About Wisata Places</Text>
      <Text style={styles.text}>Aplikasi ini dibuat untuk memudahkan dalam mencari tempat wisata di Indonesia.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: '#fff',
    fontSize: 20
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
});
