import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient}  from 'expo-linear-gradient';

interface GradientContainerProps {
  children: ReactNode;
  colors: [string, string, ...string[]]; // Enforce at least two colors as a tuple
  locations?: [number, number, ...number[]] | null; // Enforce at least two locations as a tuple or null
  style?: any;
}

const GradientContainer: React.FC<GradientContainerProps> = ({
  children,
  colors,
  locations,
  style,
}) => {
  return (
    <LinearGradient
      colors={colors}
      locations={locations}
      style={[styles.gradient, style]}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});

export default GradientContainer;