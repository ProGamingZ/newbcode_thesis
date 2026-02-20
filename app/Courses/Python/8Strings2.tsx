import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

export default function PythonStringsPart2Page() {
  const { theme } = useTheme();

  const accentColor = theme.colors.accent;
  const primaryColor = theme.colors.textPrimary;
  const secondaryColor = theme.colors.textSecondary;
  const codeBackgroundColor = theme.colors.codeBackground;

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContentContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <View style={styles.container}>
        <BackButton style={styles.backButton} />
        <ScreenTitle title="Python Strings - Part 2" />

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Python Strings - Part 2 (Common Methods)</Text>
          {/* ... other content ... */}

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>replace()</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            The <Text style={[styles.keyword, { color: primaryColor }]}>replace()</Text> method replaces all occurrences of a specified substring with another substring.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>original_text</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"Hello World"</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>replaced_text</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>original_text</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>replace</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}"World", "Python")</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>replaced_text</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: "Hello Python"</Text>
          </Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            You can also specify the number of replacements to make as a third argument (optional).
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>text_with_many</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"apple banana apple cherry apple"</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>replace_once</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>text_with_many</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>replace</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}"apple", "orange", 1)</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>replace_once</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: "orange banana apple cherry apple"</Text>
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>split()</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            The <Text style={[styles.keyword, { color: primaryColor }]}>split()</Text> method splits a string into a list of substrings based on a specified delimiter. If no delimiter is specified, it defaults to whitespace.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>sentence</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"Hello,World,Python"</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>split_comma</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>sentence</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>split</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}",")</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>split_comma</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: ['Hello', 'World', 'Python']</Text>
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>paragraph</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"This is a sentence. Another sentence."</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>split_space</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>paragraph</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>split</Text><Text style={[styles.operator, { color: primaryColor }]}>()</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>split_space</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: ['This', 'is', 'a', 'sentence.', 'Another', 'sentence.']</Text>
          </Text>
        </View>

        {/* <Link href="/PythonStringsPart3Page" asChild>
          <NextButton title="Next: Python Strings - Part 3" />
        </Link> */}
        <BackButton style={styles.backButton} />
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
  section: {
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000', // Fallback color
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 8,
    color: '#000', // Fallback color
    textAlign: 'justify',
  },
  subSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: '#000', // Fallback color
  },
  bold: {
    fontWeight: 'bold',
  },
  codeBlock: {
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    fontFamily: 'monospace',
    fontSize: 14,
  },
  codeLine: {
    lineHeight: 20,
  },
  keyword: {
    fontWeight: 'bold',
  },
  operator: {},
  value: {},
  variable: {},
  comment: {
    color: 'gray',
    fontStyle: 'italic',
  },
});