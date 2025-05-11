import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native'; // Import TouchableOpacity and Linking
import ScreenTitle from '@/components/PageTitle';
import { useTheme } from '@/theme/ThemeContext';
import BackButton from '@/components/BackButton';
import ImageComponent from '@/components/ReferenceImages'; // Ensure the import path is correct
// Remove import { Link } from 'expo-router'; // No longer needed for this specific task

// Import your tutorial image sources
const b1 = require('@/assets/images/References/Websites/b1.png');
const b2 = require('@/assets/images/References/Websites/b2.png');
const b3 = require('@/assets/images/References/Websites/b3.png');
const b4 = require('@/assets/images/References/Websites/b4.png');
const b5 = require('@/assets/images/References/Websites/b5.png');

// Define the websites and their URLs
const websites = [
  { name: "FreeCodeCamp", image: b1, url: "https://www.freecodecamp.org/" },
  { name: "W3Schools", image: b2, url: "https://www.w3schools.com/" },
  { name: "LeetCode", image: b3, url: "https://leetcode.com/" },
  { name: "HackerRank", image: b4, url: "https://www.hackerrank.com/" },
  { name: "Codecademy", image: b5, url: "https://www.codecademy.com/" }, // Corrected spelling
];

// Helper function to open links safely
const openLink = async (url: string) => {
  // Check if the link is supported for links with custom URL scheme.
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    // Opening the link with some catch block to handle errors
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
};


export default function ReferencesTutorials() {
  const { theme } = useTheme();
  const styles = getThemedStyles(theme); // Assuming you have themed styles

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContentContainer}
    >
      <View style={styles.container}>
        {/* Back Button */}
        <BackButton style={styles.backButton} />

        {/* Title */}
        <ScreenTitle title="Websites" />

        {/* Map through the websites array */}
        {websites.map((site) => (
          // Wrap each item in TouchableOpacity
          <TouchableOpacity
            key={site.name}
            style={styles.imagesContainer}
            onPress={() => openLink(site.url)} // Call openLink on press
            activeOpacity={0.7} // Optional: control feedback opacity
          >
            {/* You can decide if the title is inside or outside TouchableOpacity */}
            <ScreenTitle style={styles.text} title={site.name} />
            <ImageComponent imgSource={site.image} />
          </TouchableOpacity>
        ))}

      </View>
    </ScrollView>
  );
}

// Assuming you have a function like this for themed styles
const getThemedStyles = (theme: any) => StyleSheet.create({
  scrollContentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: theme.colors.background, // Apply theme background
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    // position: 'absolute', // Consider if absolute positioning is needed with ScrollView padding
    // top: 40,
    // left: 20,
    alignSelf: 'flex-start', // Position back button appropriately
    marginLeft: 0, // Adjust as needed
    marginTop: 10, // Adjust as needed
    marginBottom: 10,
  },
  imagesContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    // Add padding or margin if needed for touch area
    paddingVertical: 10,
  },
  text: {
    fontSize: 24, // Adjusted size
    // fontFamily: 'Raleway', // Make sure this font is loaded
    // fontStyle: 'normal',
    fontWeight: '600', // Semibold might look better
    marginBottom: 8, // Add some space between title and image
    alignSelf: 'center',
    color: theme.colors.textPrimary, // Apply theme text color
  },
  // Remove imageSpacer if not used
});