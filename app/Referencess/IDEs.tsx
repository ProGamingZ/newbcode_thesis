import React from 'react';
import { StyleSheet, View, ScrollView, Text} from 'react-native';
import ScreenTitle from '@/components/PageTitle';
import { useTheme } from '@/theme/ThemeContext';
import BackButton from '@/components/BackButton';
import ImageComponent from '@/components/ReferenceImages'; // Ensure the import path is correct

// Import your tutorial image sources
const d1 = require('@/assets/images/References/IDEs/d1.png');
const d2 = require('@/assets/images/References/IDEs/d2.png');
const d3 = require('@/assets/images/References/IDEs/d3.png');
const d4 = require('@/assets/images/References/IDEs/d4.png');
const d5 = require('@/assets/images/References/IDEs/d5.png');

export default function ReferencesTutorials() {
  const { theme } = useTheme();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContentContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <View style={styles.container}>
        {/* Back Button */}
        <BackButton style={styles.backButton} />
      
        {/* Title */}
        <ScreenTitle title="IDEs" />

        {/* Tutorial Images using your ImageComponent */}
        <View style={styles.imagesContainer}>
            <ScreenTitle style={styles.text}title="Eclipse" />
            <ImageComponent imgSource={d1}></ImageComponent>
        </View>

        <View style={styles.imagesContainer}>
            <ScreenTitle style={styles.text}title="VScode" />
            <ImageComponent imgSource={d2}></ImageComponent>
        </View>

        <View style={styles.imagesContainer}>
            <ScreenTitle style={styles.text}title="IntelliJ" />
            <ImageComponent imgSource={d3}></ImageComponent>
        </View>

        <View style={styles.imagesContainer}>
            <ScreenTitle style={styles.text}title="Sublime" />
            <ImageComponent imgSource={d4}></ImageComponent>
        </View>

        <View style={styles.imagesContainer}>
            <ScreenTitle style={styles.text}title="Android Studio" />
            <ImageComponent imgSource={d5}></ImageComponent>
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
  imagesContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  imageSpacer: {
    height: 20,
  },
  text: {
    fontSize: 36.21,
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'regular',
    marginTop: 0,
    marginBottom: 0,
    alignSelf: 'center',
  },
});