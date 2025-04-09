import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ScreenTitle from '@/components/PageTitle';
import { useTheme } from '@/theme/ThemeContext';
import BackButton from '@/components/BackButton';
import ImageComponent from '@/components/ReferenceImages'; // Ensure the import path is correct

// Import your tutorial image sources
const b1 = require('@/assets/images/References/Websites/b1.png');
const b2 = require('@/assets/images/References/Websites/b2.png');
const b3 = require('@/assets/images/References/Websites/b3.png');
const b4 = require('@/assets/images/References/Websites/b4.png');
const b5 = require('@/assets/images/References/Websites/b5.png');

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
        <ScreenTitle title="Websites" />

        {/* Tutorial Images using your ImageComponent */}
        <View style={styles.imagesContainer}>
          <ScreenTitle style={styles.text}title="FreeCodeCamp" />
          <ImageComponent imgSource={b1}></ImageComponent>
        </View>

        <View style={styles.imagesContainer}>
          <ScreenTitle style={styles.text}title="W3Schools" />
          <ImageComponent imgSource={b2}></ImageComponent>
        </View>

        <View style={styles.imagesContainer}>
          <ScreenTitle style={styles.text}title="LeetCode" />
          <ImageComponent imgSource={b3}></ImageComponent>
        </View>

        <View style={styles.imagesContainer}>
          <ScreenTitle style={styles.text}title="HackerRank" />
          <ImageComponent imgSource={b4}></ImageComponent>
        </View>

        <View style={styles.imagesContainer}>
          <ScreenTitle style={styles.text}title="CodeCademy" />
          <ImageComponent imgSource={b5}></ImageComponent>
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