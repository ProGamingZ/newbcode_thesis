import 'expo-dev-client';

import React, { useState, useCallback, useRef, useEffect } from 'react'; // Added useEffect
import { Stack } from "expo-router";
import { LogBox, StatusBar, StyleSheet, View, TouchableOpacity, PanResponder, Animated, useWindowDimensions, Image, } from "react-native";
import { ThemeProvider, useTheme } from '@/theme/ThemeContext';
import Cody from '../components/Cody'; // Assuming your bot component is named Cody
import SplashScreen from '@/components/splashscreen'; // Import your new SplashScreen component

LogBox.ignoreAllLogs(true);

// Define bubble dimensions (should match your styles)
const BUBBLE_SIZE = 60;

// This component will now contain the main app logic and the draggable bot
function RootLayoutInnerContent(): JSX.Element { // Renamed and explicitly typed
  const { theme } = useTheme();
  const [isBotVisible, setIsBotVisible] = useState<boolean>(false); // Explicitly typed
  const { width: screenWidth, height: screenHeight } = useWindowDimensions(); // Get screen dimensions

  const toggleBotVisibility = useCallback(() => {
    console.log('bot is pressed');
    setIsBotVisible((prev) => !prev);
  }, []);

  // Initial position (can be adjusted)
  const initialPosition = { x: 20, y: screenHeight * 0.5 }; // Start vertically centered
  const pan = useRef(new Animated.ValueXY(initialPosition)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: (pan.x as any)._value,
          y: (pan.y as any)._value,
        });
        pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (e, gestureState) => {
        pan.flattenOffset(); // Apply the offset to the base value

        // --- Boundary Check Logic ---
        const currentPosition = {
          x: (pan.x as any)._value,
          y: (pan.y as any)._value,
        };

        // Define boundaries
        const minX = 0;
        const maxX = screenWidth - BUBBLE_SIZE; // Subtract bubble width
        const minY = 0;
        const maxY = screenHeight - BUBBLE_SIZE; // Subtract bubble height

        // Clamp values
        let clampedX = currentPosition.x;
        let clampedY = currentPosition.y;
        let needsCorrection = false;

        if (currentPosition.x < minX) {
          clampedX = minX;
          needsCorrection = true;
        } else if (currentPosition.x > maxX) {
          clampedX = maxX;
          needsCorrection = true;
        }

        if (currentPosition.y < minY) {
          clampedY = minY;
          needsCorrection = true;
        } else if (currentPosition.y > maxY) {
          clampedY = maxY;
          needsCorrection = true;
        }

        // If the position was out of bounds, animate it back smoothly
        if (needsCorrection) {
          Animated.spring(pan, {
            toValue: { x: clampedX, y: clampedY },
            useNativeDriver: false, // Still affects layout via transform
            // You can adjust friction/tension for different spring effects
            // friction: 7,
            // tension: 40,
          }).start();
        }
        // --- End Boundary Check ---
        // Optional: Add logic here to maybe snap to the nearest edge

        const tapThreshold = 5; // Adjust as needed
        if (
          Math.abs(gestureState.dx) < tapThreshold &&
          Math.abs(gestureState.dy) < tapThreshold
        ) {
          toggleBotVisibility(); // Trigger bot visibility on tap
        }

      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={theme.mode === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={theme.colors.background}
      />
      {/* Your App Content */}
      <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Purpose" options={{ headerShown: false }} />
        <Stack.Screen name="Courses" options={{ headerShown: false }} />
        <Stack.Screen name="SyntaxPage" options={{ headerShown: false }} />
        <Stack.Screen name="References" options={{ headerShown: false }} />
        <Stack.Screen name="IDEs/JavaIDE" options={{ headerShown: false }} />
        <Stack.Screen name="IDEs/PythonIDE" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Java/JavaMenu" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Java/1JavaIntroduction" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Java/2Variables" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Java/3Operators" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Java/4StringsMath" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Java/5Conditionals" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Java/6Loops" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Java/7Arrays" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/PythonMenu" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/1PythonIntroduction" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/2Variables" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/3DataTypes1" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/4DataTypes2" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/5DataTypes3" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/6NumbersCasting" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/7Strings1" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/8Strings2" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/9Strings3" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/10BooleansComparisons" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/11Operators1" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/12Operators2" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/13Operators3" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/14Operators4" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/15Conditionals" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/16Loops" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/17Lists1" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/18Lists2" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/19Lists3" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/20Lists4" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/21Tuples1" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/22Tuples2" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/23Sets1" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/24Sets2" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/25Dictionaries1" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/26Dictionaries2" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/27Dictionaries3" options={{ headerShown: false }} />
        <Stack.Screen name="Courses/Python/28Arrays" options={{ headerShown: false }} />
        <Stack.Screen name="Referencess/Tutorials" options={{ headerShown: false }} />
        <Stack.Screen name="Referencess/Websites" options={{ headerShown: false }} />
        <Stack.Screen name="Referencess/OnlineCompilers" options={{ headerShown: false }} />
        <Stack.Screen name="Referencess/IDEs" options={{ headerShown: false }} />
        {/* ... other Stack.Screen components ... */}
      </Stack>

      {/* Movable Bubble */}
      <Animated.View
        style={[
          styles.bubbleContainer,
          {transform: [{ translateX: pan.x }, { translateY: pan.y }],},]}
        {...panResponder.panHandlers}
      >
        <TouchableOpacity
          style={styles.bubbleTouchable}
          onPress={toggleBotVisibility}
          activeOpacity={0.7} // Control feedback opacity
        >
          {/* Replace inner view with an Image */}
          <Image
             // Replace with your actual image path or URI
            source={require('@/assets/images/CODY2.png')} // Example local image
            style={styles.bubbleImage}
          />
        </TouchableOpacity>
      </Animated.View>

      {/* Bot Overlay */}
      {isBotVisible && (
        <View style={styles.fullBotOverlay}>
          <Cody onClose={toggleBotVisibility} />
        </View>
      )}
    </View>
  );
}

// This is your main RootLayout that controls the initial render
export default function RootLayout(): JSX.Element {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    // The SplashScreen component will handle the navigation away after its duration.
    // We just need to initially render it.
    // Once the SplashScreen navigates, the router will handle the new route,
    // and this RootLayout will re-render, effectively showing the main content.
    // We don't need a direct timer here to set showSplash to false.
    // The navigation from SplashScreen takes care of the transition.
  }, []);

  return (
    <ThemeProvider>
      {/* Conditionally render SplashScreen or the main app content */}
      {showSplash ? (
        // Render the SplashScreen. It will navigate to '/index' after 4 seconds.
        // We pass a prop to inform this layout when the splash is done.
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        // Once the SplashScreen navigates, this content will be rendered.
        <RootLayoutInnerContent />
      )}
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: { // Added a base container style
    flex: 1,
  },
  bubbleContainer: {
    position: 'absolute',
    width: BUBBLE_SIZE,
    height: BUBBLE_SIZE,
    zIndex: 1000, // Ensure bubble is above other content but below the overlay
    // Shadow and elevation moved to bubbleTouchable for better consistency
  },
  bubbleTouchable: { // Style the touchable area itself
    width: '100%',
    height: '100%',
    borderRadius: BUBBLE_SIZE / 2, // Make it circular
    backgroundColor: 'transparent', // Example background color, can be transparent
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  bubbleImage: {
    width: BUBBLE_SIZE * 1, // Make image slightly smaller than bubble
    height: BUBBLE_SIZE * 1, // Make image slightly smaller than bubble
    borderRadius: (BUBBLE_SIZE * 1) / 2, // Make image circular
    resizeMode: 'cover', // Or 'contain' depending on your image aspect ratio needs
  },
  // innerBubble removed as it's replaced by Image
  fullBotOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Slightly darker overlay
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    zIndex: 2000, // Ensure bot overlay is above the bubble
  },
});