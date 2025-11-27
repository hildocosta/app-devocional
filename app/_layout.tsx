import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="splash/splash">

        {/* Splash */}
        <Stack.Screen
          name="splash/splash"
          options={{ headerShown: false }}
        />

        {/* Welcome */}
        <Stack.Screen
          name="welcome/welcome"
          options={{ headerShown: false }}
        />

        {/* Login */}
        <Stack.Screen
          name="auth/login"
          options={{ headerShown: false }}
        />

        {/* Register */}
        <Stack.Screen
          name="auth/register"
          options={{ headerShown: false }}
        />

      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
