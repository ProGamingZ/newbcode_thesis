import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/theme/ThemeContext'; // Import the useTheme hook
import Button from '@/components/Button';
import BackButton from '@/components/BackButton';
import ScreenTitle from '@/components/PageTitle';

export default function CoursesScreen() {
  const router = useRouter();
  const { theme } = useTheme(); // Access the current theme

  const goBack = () => {
    router.back();
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContentContainer,
        { backgroundColor: theme.colors.background }, // Apply background from theme
      ]}
    >
      <View style={styles.container}>
        {/* Back Button */}
        <BackButton style={styles.backButton} />


        {/* Title */}
        <ScreenTitle title="Courses" />

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          
          <Button title="JAVA" onPress={() => router.push('/Courses/Java/JavaMenu')} />
          <Button title="PYTHON" onPress={() => router.push('/Courses/Python/PythonMenu')} />
        </View>

        {/* Text Labels */}
        <Text style={[styles.label, { color: theme.colors.textPrimary }]}>PLAYGROUND</Text>

        {/* Single Button */}
        <View style={styles.playgroundButtonContainer}>
          <Button title="Java" onPress={() => router.push('/IDEs/JavaIDE')} />
          <Button title="Python" onPress={() => router.push('/IDEs/PythonIDE')} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 40,
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  buttonsContainer: {
    width: '80%',
    alignItems: 'stretch',
    marginBottom: 40,
  },
  label: {
    fontSize: 36.62,
    fontFamily: 'Raleway',
    fontWeight: 'regular',
    // color: '#1a1a1a', // Removed hardcoded color, will be themed
    marginBottom: 10,
    alignSelf: 'center',
    marginLeft: '0%',
  },
  playgroundButtonContainer: {
    width: '80%',
    alignItems: 'stretch',
  },
});