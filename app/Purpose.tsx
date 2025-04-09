import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext'; // Import useTheme
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';

export default function PurposeScreen() {
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
        <BackButton style={styles.backButtonStyle} />

        {/* Title */}
        <ScreenTitle title="Purpose" />

        {/* Content Box */}
        <View
          style={[
            styles.contentBox,
            {
              backgroundColor: theme.colors.accent,
              borderColor: theme.colors.textPrimary,
            },
          ]}
        >
          <Text style={[styles.contentText, { color: theme.colors.textPrimary }]}>
            This application was created to cater to individuals aspiring to delve into the realm of programming, yet find
            themselves little/no access to conventional desktops/laptops and internet.
          </Text>
          <Text style={[styles.contentText, { color: theme.colors.textPrimary }]}>
            The NewbCode offline programming learning app aims to provide an interactive platform for students to learn
            the fundamentals of coding. With the increasing demand for coding skills in various fields, this app addresses
            the need for accessible and engaging resources to introduce the fundamental coding concepts to beginners.
          </Text>
          <Text style={[styles.contentText, { color: theme.colors.textPrimary }]}>
            The lessons only focus on the important parts you need to learn to understand the code. There are additional
            learning materials in the references tab should you feel the need for more info.
          </Text>
          <Text style={[styles.contentText, { color: theme.colors.textPrimary }]}>
            If you have the skills and want to change the code you can email me for the source code
            ortizyuri254@gmail.com
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContentContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  backButtonStyle: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  contentBox: {
    borderRadius: 15,
    padding: 20,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1, // Add the border width
    borderStyle: 'solid', // Ensure it's a solid line
  },
  contentText: {
    fontFamily: 'Raleway',
    fontSize: 14.31,
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'justify',
  },
});