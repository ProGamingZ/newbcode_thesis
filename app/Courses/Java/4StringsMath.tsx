import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
import { FontAwesome } from '@expo/vector-icons';

interface DropdownProps {
  title: string;
  content: React.ReactNode;
}

const DropdownBlock: React.FC<DropdownProps> = ({ title, content }) => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={[styles.dropdownBlock, { backgroundColor: theme.colors.accent }]}>
      <TouchableOpacity style={styles.dropdownHeader} onPress={toggleVisibility}>
        <Text style={[styles.dropdownTitle, { color: theme.colors.textPrimary }]}>{title}</Text>
        <FontAwesome
          name={isVisible ? 'chevron-up' : 'chevron-down'}
          size={18}
          color={theme.colors.textPrimary}
        />
      </TouchableOpacity>
      {isVisible && (
        <View style={styles.dropdownContent}>
          <Text style={styles.syntaxContent}>{content}</Text>
        </View>
      )}
    </View>
  );
};

export default function StringsMathPage() {
  const { theme } = useTheme();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContentContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <View style={styles.container}>
        <BackButton style={styles.backButton} />
        <ScreenTitle title="Strings & Math" />

        <DropdownBlock
          title="Strings"
          content={
            <Text style={styles.syntaxContent}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Concatenation:</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Use the </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>+</Text><Text style={{ color: theme.colors.textPrimary }}> operator to concatenate strings.</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>String firstName = "John";</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>String lastName = "Doe";</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>String fullName = firstName + " " + lastName;</Text>{'\n\n'}

              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Numbers and Strings:</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>When you use the </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>+</Text><Text style={{ color: theme.colors.textPrimary }}> operator with a string and a number, Java treats the number as a string (string concatenation).</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>int x = 10;</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>String y = "20";</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>String result = x + y; // Result: "1020"</Text>{'\n\n'}

              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Special Characters (Escape Sequences):</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Use backslash </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>\</Text><Text style={{ color: theme.colors.textPrimary }}> to escape special characters:</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>\"</Text> <Text style={{ color: theme.colors.textPrimary }}>- Double quote</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>\'</Text> <Text style={{ color: theme.colors.textPrimary }}>- Single quote</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>\\</Text> <Text style={{ color: theme.colors.textPrimary }}>- Backslash</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>\n</Text> <Text style={{ color: theme.colors.textPrimary }}>- Newline</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>\r</Text> <Text style={{ color: theme.colors.textPrimary }}>- Carriage return</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>\t</Text> <Text style={{ color: theme.colors.textPrimary }}>- Tab</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>\b</Text> <Text style={{ color: theme.colors.textPrimary }}>- Backspace</Text>{'\n\n'}

              <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary, marginTop: 15 }]}>Common String Methods</Text>
              <Text style={styles.syntaxContent}>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}> {'\n\n'}String txt = "Hello World";</Text>{'\n'}
                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>length():</Text> <Text style={{ color: theme.colors.textPrimary }}>Returns the length of the string.</Text>{'\n'}
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>int len = txt.length(); // len is 11</Text>{'\n\n'}

                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>toUpperCase():</Text> <Text style={{ color: theme.colors.textPrimary }}>Converts the string to uppercase.</Text>{'\n'}
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>String upper = txt.toUpperCase(); // upper is "HELLO WORLD"</Text>{'\n\n'}

                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>toLowerCase():</Text> <Text style={{ color: theme.colors.textPrimary }}>Converts the string to lowercase.</Text>{'\n'}
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>String lower = txt.toLowerCase(); // lower is "hello world"</Text>{'\n\n'}

                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>indexOf(String str):</Text> <Text style={{ color: theme.colors.textPrimary }}>Returns the index of the first occurrence of a specified substring.</Text>{'\n'}
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>int index = txt.indexOf("World"); // index is 6</Text>{'\n\n'}
              </Text>
            </Text>
          }
        />

<DropdownBlock
  title="Java Math"
  content={
    <Text style={styles.syntaxContent}>
      <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Math.max(a, b):</Text> <Text style={{ color: theme.colors.textPrimary }}>Returns the number with the highest value.</Text>{'\n'}
      <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>int maxVal = Math.max(5, 10); // maxVal is 10</Text>{'\n\n'}

      <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Math.min(a, b):</Text> <Text style={{ color: theme.colors.textPrimary }}>Returns the number with the lowest value.</Text>{'\n'}
      <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>int minVal = Math.min(5, 10); // minVal is 5</Text>{'\n\n'}

      <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Math.sqrt(x):</Text> <Text style={{ color: theme.colors.textPrimary }}>Returns the square root of x.</Text>{'\n'}
      <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>double sqrtVal = Math.sqrt(64); // sqrtVal is 8.0</Text>{'\n\n'}

      <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Math.abs(x):</Text> <Text style={{ color: theme.colors.textPrimary }}>Returns the absolute (positive) value of x.</Text>{'\n'}
      <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>int absVal = Math.abs(-5); // absVal is 5</Text>{'\n\n'}

      <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Math.random():</Text> <Text style={{ color: theme.colors.textPrimary }}>Returns a random floating-point number between 0.0 (inclusive) and 1.0 (exclusive).</Text>{'\n'}
      <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>double randVal = Math.random();</Text>{'\n\n'}

      <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Math.round(x):</Text> <Text style={{ color: theme.colors.textPrimary }}>Returns the value of x rounded to the nearest integer.</Text>{'\n'}
      <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>int roundedVal = Math.round(4.7); // roundedVal is 5</Text>{'\n'}
      <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>int roundedDownVal = Math.round(4.4); // roundedDownVal is 4</Text>{'\n\n'}

      <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Math.floor(x):</Text> <Text style={{ color: theme.colors.textPrimary }}>Returns the value of x rounded down to the nearest integer.</Text>{'\n'}
      <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>double floorVal = Math.floor(4.7); // floorVal is 4.0</Text>{'\n'}
      <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>double floorDownVal = Math.floor(4.2); // floorDownVal is 4.0</Text>{'\n\n'}

      <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Math.ceil(x):</Text> <Text style={{ color: theme.colors.textPrimary }}>Returns the value of x rounded up to the nearest integer.</Text>{'\n'}
      <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>double ceilVal = Math.ceil(4.3); // ceilVal is 5.0</Text>{'\n'}
      <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>double ceilUpVal = Math.ceil(4.9); // ceilUpVal is 5.0</Text>{'\n\n'}

      <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Math.pow(x, y):</Text> <Text style={{ color: theme.colors.textPrimary }}>Returns the value of x to the power of y.</Text>{'\n'}
      <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>double powVal = Math.pow(2, 3); // powVal is 8.0</Text>{'\n\n'}

      <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Math.PI:</Text> <Text style={{ color: theme.colors.textPrimary }}>A static final double field representing the ratio of the circumference of a circle to its diameter, approximately 3.14159...</Text>{'\n'}
      <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>double piValue = Math.PI;</Text>{'\n'}
    </Text>
  }
/>

        <DropdownBlock
          title="Booleans"
          content={
            <Text style={styles.syntaxContent}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>boolean:</Text> <Text style={{ color: theme.colors.textPrimary }}>A primitive data type that can have only two possible values: </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>true</Text> <Text style={{ color: theme.colors.textPrimary }}>or </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>false</Text><Text style={{ color: theme.colors.textPrimary }}>.</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>boolean isJavaFun = true;</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>boolean isFishTasty = false;</Text>{'\n'}
            </Text>
          }
        />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContentContainer: {
    flexGrow: 1,
    paddingVertical: 40,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '90%',
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  dropdownBlock: {
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  dropdownTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Will be overridden by theme
  },
  dropdownContent: {
    paddingTop: 10,
  },
  syntaxBlock: {
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  syntaxTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Will be overridden by theme
    marginBottom: 10,
  },
  syntaxContent: {fontSize: 16,
    lineHeight: 22,
  },
  keyword: {
    fontWeight: 'bold',
  },
  comment: {
    fontStyle: 'italic',
  },
  indentedCode: {
    marginLeft: 20,
  },
});