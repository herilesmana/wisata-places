import { Stack } from 'expo-router';
// import { useFonts } from 'expo-font';

export default function RootLayout() {
  // const [fontsLoaded] = useFonts({
  //   'Lobster-Regular': require('../assets/fonts/Lobster-Regular.ttf'),
  // });
  
  // if (!fontsLoaded) {
  //   return null
  // }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{
        headerShown: false,
        animation: 'slide_from_right',
      }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
