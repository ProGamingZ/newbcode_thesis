import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
import { router } from 'expo-router';
import Button from '@/components/Button';

export default function JavaSyntaxMenuPage() {
  const { theme } = useTheme();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContentContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <View style={styles.container}>
        <BackButton style={styles.backButton} />
        <ScreenTitle title="Procedural" />

        <View style={styles.menuContainer}>
            <Button title="Introduction" onPress={() => router.push('/Courses/Java/1JavaIntroduction')} />
            <Button title="Variables" onPress={() => router.push('/Courses/Java/2Variables')} />
            <Button title="Operators" onPress={() => router.push('/Courses/Java/3Operators')} />
            <Button title="Strings & Math" onPress={() => router.push('/Courses/Java/4StringsMath')} />
            <Button title="Conditionals" onPress={() => router.push('/Courses/Java/5Conditionals')} />
            <Button title="Loops" onPress={() => router.push('/Courses/Java/6Loops')} />
            <Button title="Arrays" onPress={() => router.push('/Courses/Java/7Arrays')} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContentContainer: {
    flexGrow: 1,
    paddingVertical: 40,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '90%',
    paddingHorizontal: 20,
    alignItems: 'center', // Center items horizontally
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  menuContainer: {
    flex: 1,
    width: '100%',
    marginTop: 0,
    alignItems: 'center', // Center buttons in the container
  },
  menuButton: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});