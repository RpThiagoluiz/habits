import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from '@expo-google-fonts/inter';
import { LoadingFonts } from '@components/LoadingFonts';
import { ThemeProvider } from 'styled-components/native';
import { darkTheme } from '@themes/dark';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  return (
    <ThemeProvider theme={darkTheme}>
      {!fontsLoaded ? (
        <LoadingFonts />
      ) : (
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <Text>Open up App.tsx to start working on your app!</Text>
        </View>
      )}
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
