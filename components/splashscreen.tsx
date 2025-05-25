import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';
// Removed useRouter as it's no longer needed in SplashScreen
// import { useRouter } from 'expo-router'; 

// Define the paths to your logo images
const lightThemePicture: ImageSourcePropType = require('../assets/images/NewbCode_Logo_Removebg1.png');

// Define the duration for the splash screen in milliseconds
const SPLASH_DURATION = 4000; // 4 seconds

// Define the props interface for SplashScreen
interface SplashScreenProps {
  onFinish: () => void; // A function that takes no arguments and returns nothing
}

// Update the component to accept the defined props
export default function SplashScreen({ onFinish }: SplashScreenProps): JSX.Element {
  // Removed router initialization as it's no longer used
  // const router = useRouter(); 

  // The logo will always be the light theme version.
  const currentLogoSource: ImageSourcePropType = lightThemePicture;

  // Define static day theme colors for the splash screen
  const dayThemeColors = {
    background: '#8c8c8c', // White background for day theme
    textPrimary: '#000000', // Black text for day theme
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // Call onFinish prop when the splash screen duration is over
      onFinish(); 
      // Removed router.replace('/index');
    }, SPLASH_DURATION);

    return () => clearTimeout(timer);
  }, [onFinish]); // Removed router from dependency array

  return (
    // Use static day theme background color
    <View style={[styles.container, { backgroundColor: dayThemeColors.background }]}>
      <Image
        source={currentLogoSource}
        style={styles.logo}
        resizeMode="contain"
      />
      {/* Use static day theme text color */}
      <Text style={[styles.text, { color: dayThemeColors.textPrimary }]}>
        {'{NewbCode}'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Raleway',
  },
});
