import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from "@expo-google-fonts/archivo";

import Dashboard from './src/screens/Dashboard';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

export default function App() {

  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  });

  if (!fontsLoaded) return <AppLoading />

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  )
}
