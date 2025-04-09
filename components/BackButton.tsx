import React from 'react';
import { StyleSheet, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'; // Or any other icon set you prefer
import { useRouter } from 'expo-router';
import { useTheme } from '@/theme/ThemeContext'; // Import the useTheme hook

interface BackButtonProps {
  style?: StyleProp<ViewStyle>;
  iconColor?: string; // Optional prop if you want to override theme
  backgroundColor?: string; // Optional prop if you want to override theme
}

const BackButton: React.FC<BackButtonProps> = ({ style, iconColor: propIconColor, backgroundColor: propBackgroundColor }) => {
  const router = useRouter();
  const { theme } = useTheme(); // Access the current theme

  // Determine background color based on props and theme
  const currentBackgroundColor = propBackgroundColor || theme.colors.buttonBackground;

  // Determine icon color based on props and theme
  const currentIconColor = propIconColor || theme.colors.buttonText;

  const goBack = () => {
    router.back();
  };

  return (
    <TouchableOpacity
      onPress={goBack}
      style={[
        styles.button,
        { backgroundColor: currentBackgroundColor, borderColor: theme.colors.textPrimary }, // Apply theme-based border color
        style,
      ]}
    >
      <Icon name="chevron-back-outline" size={24} color={currentIconColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
     padding: 2,
     borderRadius: 20, // Adjust for desired roundness
     borderWidth: 1, // Optional subtle border
    // Default border color (will be overridden by theme)
    // shadowColor: '#000', // Optional subtle shadow
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 1, // For Android shadow
  },
});

export default BackButton;