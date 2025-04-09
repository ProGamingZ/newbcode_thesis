import React from 'react';
import { StyleSheet, Text, TouchableOpacity, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { useTheme } from '@/theme/ThemeContext'; // Import the useTheme hook

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>; // Optional custom styling for the button container
  textStyle?: StyleProp<TextStyle>; // Optional custom styling for the button text
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style, textStyle }) => {
  const { theme } = useTheme(); // Access the current theme

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: theme.colors.buttonBackground, borderColor: theme.colors.textPrimary }, // Apply theme colors
        style, // Apply any custom styles passed to the component
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          { color: theme.colors.buttonText }, // Apply theme color to text
          textStyle, // Apply any custom text styles
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    marginBottom: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 5,
  },
  buttonText: {
    fontSize: 36.62,
    fontFamily: 'Raleway',
    fontWeight: 'regular',
  },
});

export default Button;