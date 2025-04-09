import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Animated, StyleProp, ViewStyle } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { useTheme } from '@/theme/ThemeContext';

interface ThemeToggleButtonProps {
  style?: StyleProp<ViewStyle>; // Add this line to define the style prop
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ style }) => {
  const { theme, toggleTheme } = useTheme();
  const [sunOpacity] = useState(new Animated.Value(theme.mode === 'light' ? 1 : 0));
  const [moonOpacity] = useState(new Animated.Value(theme.mode === 'dark' ? 1 : 0));

  useEffect(() => {
    Animated.timing(sunOpacity, {
      toValue: theme.mode === 'light' ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(moonOpacity, {
      toValue: theme.mode === 'dark' ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [theme.mode, sunOpacity, moonOpacity]);

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={toggleTheme}>
      <Animated.View style={[styles.iconWrapper, { opacity: sunOpacity }]}>
        <Icon name="sunny-outline" size={24} color={theme.colors.icon} />
      </Animated.View>
      
      <Animated.View style={[styles.iconWrapper, { opacity: moonOpacity, position: 'absolute' }]}>
        <Icon name="moon-outline" size={24} color={theme.colors.icon} />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ThemeToggleButton;