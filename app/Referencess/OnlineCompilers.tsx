import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ScreenTitle from '@/components/PageTitle';
import { useTheme } from '@/theme/ThemeContext';
import BackButton from '@/components/BackButton';
import ImageComponent from '@/components/ReferenceImages'; // Ensure the import path is correct

// Import your tutorial image sources
const c1 = require('@/assets/images/References/OnlineCompilers/c1.png');
const c2 = require('@/assets/images/References/OnlineCompilers/c2.png');
const c3 = require('@/assets/images/References/OnlineCompilers/c3.png');
const c4 = require('@/assets/images/References/OnlineCompilers/c4.png');
const c5 = require('@/assets/images/References/OnlineCompilers/c5.png');

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
        <ScreenTitle title="Online Compilers" />

        {/* Tutorial Images using your ImageComponent */}
        <View style={styles.imagesContainer}>
          <ScreenTitle style={styles.text}title="Programiz" />
          <ImageComponent imgSource={c1}></ImageComponent>
        </View>

        <View style={styles.imagesContainer}>
          <ScreenTitle style={styles.text}title="OnlineGDB" />
          <ImageComponent imgSource={c2}></ImageComponent>
        </View>

        <View style={styles.imagesContainer}>
          <ScreenTitle style={styles.text}title="One Compiler" />
          <ImageComponent imgSource={c3}></ImageComponent>
        </View>

        <View style={styles.imagesContainer}>
          <ScreenTitle style={styles.text}title="Code Chef" />
          <ImageComponent imgSource={c4}></ImageComponent>
        </View>

        <View style={styles.imagesContainer}>
          <ScreenTitle style={styles.text}title="Code 360" />
          <ImageComponent imgSource={c5}></ImageComponent>
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