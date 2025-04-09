import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ScreenTitle from '@/components/PageTitle';
import { useTheme } from '@/theme/ThemeContext';
import BackButton from '@/components/BackButton';
import ImageComponent from '@/components/ReferenceImages'; // Ensure the import path is correct

// Import your tutorial image sources
const a1 = require('@/assets/images/References/Tutorials/a1.png');
const a2 = require('@/assets/images/References/Tutorials/a2.png');
const a3 = require('@/assets/images/References/Tutorials/a3.png');
const a4 = require('@/assets/images/References/Tutorials/a4.png');
const a5 = require('@/assets/images/References/Tutorials/a5.png');

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
        <ScreenTitle title="Youtube" />

        {/* Tutorial Images using your ImageComponent */}
        <View style={styles.imagesContainer}>
          <ImageComponent imgSource={a1}></ImageComponent>
        </View>

        <View style={styles.imagesContainer}>
          <ImageComponent imgSource={a2}></ImageComponent>
        </View>

        <View style={styles.imagesContainer}>
          <ImageComponent imgSource={a3}></ImageComponent>
        </View>

        <View style={styles.imagesContainer}>
          <ImageComponent imgSource={a4}></ImageComponent>
        </View>

        <View style={styles.imagesContainer}>
          <ImageComponent imgSource={a5}></ImageComponent>
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
});