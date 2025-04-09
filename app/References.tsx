import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import Button from '@/components/Button';
import ScreenTitle from '@/components/PageTitle';
import { useTheme } from '@/theme/ThemeContext'; // Import the useTheme hook
import BackButton from '@/components/BackButton'; // Use the themed BackButton

export default function ReferencesScreen() {
  const { theme } = useTheme(); // Access the current theme

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
        <ScreenTitle title="References" />

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          <Link href="/Referencess/Tutorials" asChild>
            <Button title="Tutorials" onPress={() => console.log('Tutorials pressed')} />
          </Link> 
          <Link href="/Referencess/Websites" asChild> 
            <Button title="Websites" onPress={() => console.log('Websites pressed')} />
          </Link> 
          <Link href="/Referencess/OnlineCompilers" asChild> 
            <Button title="Online IDEs" onPress={() => console.log('Online IDEs pressed')} />
          </Link>
          <Link href="/Referencess/IDEs" asChild>    
            <Button title="Offline IDEs" onPress={() => console.log('Offline IDEs pressed')} />
          </Link>     
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
    marginBottom: 20, // Space between buttons
  },
});