import React from 'react';
import { StyleSheet, Text, StyleProp, TextStyle } from 'react-native';
import { useTheme } from '@/theme/ThemeContext'; // Import the useTheme hook

interface ScreenTitleProps {
  title: string;
  style?: StyleProp<TextStyle>; // Optional custom styling for the title
}

const ScreenTitle: React.FC<ScreenTitleProps> = ({ title, style }) => {
  const { theme } = useTheme(); // Access the current theme

  return (
    <Text style={[styles.title, { color: theme.colors.textPrimary }, style]}>{title}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 58.59,
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'regular',
    marginTop: 80,
    marginBottom: 60,
    alignSelf: 'center',
  },
});

export default ScreenTitle;