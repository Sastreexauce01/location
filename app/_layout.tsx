import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="annonces/[id]" options={{ headerShown: false }} />
      <Stack.Screen
        name="Screen/connexion/index"
        options={{ title: "Connexion", headerShown: false }}
      />
      <Stack.Screen
        name="Screen/inscription/index"
        options={{ title: "Inscription", headerShown: false }}
      />
    </Stack>
  );
}
