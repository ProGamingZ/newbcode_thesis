import React from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import JavaOnlineIDE from '@/components/JavaOnlineIDE'; // Adjust path if needed
import BackButton from '@/components/BackButton';
import ScreenTitle from '@/components/PageTitle';
import { useTheme } from '@/theme/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function JavaIDEScreen() {
  const { theme } = useTheme();
  const statusBarHeight = Platform.OS === 'android' && StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 20;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
      <View style={styles.container}>
        <BackButton style={styles.backButton} />
        <View style={styles.ideContainer}>
          <JavaOnlineIDE />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' && StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 20,
  },
  backButton: {
    marginBottom: 20,
  },
  ideContainer: {
    flex: 1,
    width: '100%',
  },
});