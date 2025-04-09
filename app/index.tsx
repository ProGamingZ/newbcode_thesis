import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ImageViewer from '@/components/Logo';
import Button from '@/components/Button';
import { Link } from 'expo-router';
import ThemeToggleButton from '@/components/ThemeToggleButton'; // Import the toggle button
import { useTheme } from '@/theme/ThemeContext'; // Import the useTheme hook

const lightThemePicture = require('../assets/images/NewbCode_Logo_Removebg1.png');
const darkThemePicture = require('../assets/images/NewbCode_Logo_Removebg2.png');

export default function Index() {
  const { theme } = useTheme(); // Access the current theme
  const handleCoursePress = () => console.log('Courses button pressed');
  const handleSyntaxPress = () => console.log('Syntaxes button pressed');
  const handleReferencePress = () => console.log('References button pressed');
  const handlePurposePress = () => console.log('Purpose button pressed');

  const currentLogoSource = theme.mode === 'light' ? lightThemePicture : darkThemePicture;

  return (
      <ScrollView contentContainerStyle={[styles.scrollContentContainer, { backgroundColor: theme.colors.background }]}>
        <View style={styles.container}>
          <ThemeToggleButton style={styles.themeToggleButtonTopRight} /> {/* Add the theme toggle */}
          {/* Logo */}
          <View style={styles.logoContainer}>
            <ImageViewer imgSource={currentLogoSource} />
          </View>

          {/* Buttons */}
          <View style={styles.buttonsContainer}>
            <Link href="/Courses" asChild>
              <Button title="COURSES" onPress={handleCoursePress} />
            </Link>
            <Link href="/SyntaxPage" asChild>
              <Button title="SYNTAXES" onPress={handleSyntaxPress} />
            </Link>
            <Link href="/References" asChild>
              <Button title="REFERENCES" onPress={handleReferencePress} />
            </Link>
            <Link href="/Purpose" asChild>
              <Button title="PURPOSE" onPress={handlePurposePress} />
            </Link>
          </View>

          {/* Bottom Text */}
          <View style={styles.bottomTextContainer}>
            <Text style={[styles.bottomText, { color: theme.colors.indexBottomTextColor }]}>NWSSU BSCS 2024-2025</Text>
            <Text style={[styles.bottomText, { color: theme.colors.indexBottomTextColor }]}>YURI JOSEPH A. ORTIZ</Text>
          </View>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
  },
  container: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  logoContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
  buttonsContainer: {
    width: '80%',
    alignItems: 'stretch',
    marginTop: 40,
    marginBottom: 40,
  },
  bottomTextContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  bottomText: {
    fontSize: 14.3,
    fontFamily: 'Raleway',
    fontWeight: 'regular',
  },
  themeToggleButtonTopRight: {
    position: 'absolute',
    borderRadius: 50,
    borderWidth: 1, // Add the border width
    borderColor: "#1a1a1a", // Add the border color
    borderStyle: 'solid', // Ensure it's a solid line
    top: 20, // Adjust for status bar
    right: 20,
    zIndex: 1,
  },
});