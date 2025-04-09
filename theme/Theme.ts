export const lightTheme = {
  mode: 'light',
  colors: {
      background: '#8c8c8c',
      textPrimary: '#1a1a1a',
      textSecondary: '#262626',
      textTertiary: '#595959',
      accent: '#a6a6a6',
      buttonBackground: '#a6a6a6',
      buttonText: '#1a1a1a',
      icon: '#262626',
      indexBottomTextColor: '#1a1a1a',
      codeBackground: '#d3d3d3', // Light gray for code background
      // Color for sun/moon icons in light mode
      // Add more colors as needed
  },
};

export const darkTheme = {
  mode: 'dark',
  colors: {
      background: '#1a1a1a',
      textPrimary: '#f2f2f2',
      textSecondary: '#d9d9d9',
      textTertiary: '#737373',
      accent: '#404040',
      buttonBackground: '#404040',
      buttonText: '#f2f2f2',
      icon: '#f2f2f2', // Color for sun/moon icons in dark mode
      indexBottomTextColor: '#f2f2f2',
      codeBackground: '#2e2e2e', // Darker gray for code background
      // Add more colors as needed
  },
};

export type Theme = typeof lightTheme;

// ThemeContext.tsx will handle the current theme state