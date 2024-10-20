import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{
        headerShown: false,
        animation: 'fade_from_bottom'
        }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
