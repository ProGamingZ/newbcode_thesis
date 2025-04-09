import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

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

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Strings</Text>
          <Text style={styles.syntaxContent}>
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Concatenation:</Text>{'\n'}
            <Text>Use the </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>+</Text><Text> operator to concatenate strings.</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>String firstName = "John";</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>String lastName = "Doe";</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>String fullName = firstName + " " + lastName;</Text>{'\n\n'}

            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Numbers and Strings:</Text>{'\n'}
            <Text>When you use the </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>+</Text><Text> operator with a string and a number, Java treats the number as a string (string concatenation).</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>int x = 10;</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>String y = "20";</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>String result = x + y; // Result: "1020"</Text>{'\n\n'}

            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Special Characters (Escape Sequences):</Text>{'\n'}
            <Text>Use backslash </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>\</Text><Text> to escape special characters:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>\"</Text> <Text>- Double quote</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>\'</Text> <Text>- Single quote</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>\\</Text> <Text>- Backslash</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>\n</Text> <Text>- Newline</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>\r</Text> <Text>- Carriage return</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>\t</Text> <Text>- Tab</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>\b</Text> <Text>- Backspace</Text>{'\n\n'}

            <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary, marginTop: 15 }]}>Common String Methods</Text>
            <Text style={styles.syntaxContent}>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}> {'\n\n'}String txt = "Hello World";</Text>{'\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>length():</Text> <Text>Returns the length of the string.</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>int len = txt.length(); // len is 11</Text>{'\n\n'}

              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>toUpperCase():</Text> <Text>Converts the string to uppercase.</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>String upper = txt.toUpperCase(); // upper is "HELLO WORLD"</Text>{'\n\n'}

              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>toLowerCase():</Text> <Text>Converts the string to lowercase.</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>String lower = txt.toLowerCase(); // lower is "hello world"</Text>{'\n\n'}

              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>indexOf(String str):</Text> <Text>Returns the index of the first occurrence of a specified substring.</Text>{'\n'}
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>int index = txt.indexOf("World"); // index is 6</Text>{'\n\n'}
            </Text>
          </Text>
        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Java Math</Text>
          <Text style={styles.syntaxContent}>
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Math.max(a, b):</Text> <Text>Returns the number with the highest value.</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>int maxVal = Math.max(5, 10); // maxVal is 10</Text>{'\n\n'}

            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Math.min(a, b):</Text> <Text>Returns the number with the lowest value.</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>int minVal = Math.min(5, 10); // minVal is 5</Text>{'\n\n'}
          </Text>
        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Booleans</Text>
          <Text style={styles.syntaxContent}>
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>boolean:</Text> <Text>A primitive data type that can have only two possible values: </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>true</Text> <Text>or </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>false</Text><Text>.</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>boolean isJavaFun = true;</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>boolean isFishTasty = false;</Text>{'\n'}
          </Text>
        </View>

        {/* Next Button */}
        {/* <Link href="/ConditionalsPage" asChild>
          <NextButton title="Next: Conditionals" />
        </Link> */}
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
  syntaxContent: {
    fontSize: 16,
    lineHeight: 22,
  },
  keyword: {
    fontWeight: 'bold',
  },
});