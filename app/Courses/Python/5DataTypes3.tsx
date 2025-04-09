import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

export default function PythonDataTypesPart3Page() {
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
        <ScreenTitle title="Python Data Types - Part 3" />

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Mapping Type: dict</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Dictionaries (<Text style={[styles.keyword, { color: primaryColor }]}>dict</Text>) in Python are ordered collections of key-value pairs. As of Python 3.7, dictionaries are guaranteed to be ordered. Keys are unique within a dictionary, and they are used to access the corresponding values. Dictionaries are mutable, meaning you can change their contents.
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Creating Dictionaries:</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Dictionaries are created using curly braces <Text style={[styles.operator, { color: primaryColor }]}>{'{}'}</Text>, with key-value pairs separated by colons <Text style={[styles.operator, { color: primaryColor }]}>:</Text>. Items are separated by commas <Text style={[styles.operator, { color: primaryColor }]}>,</Text>.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>my_dict</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.operator, { color: primaryColor }]}>{'{}'}</Text> <Text style={styles.comment}># Empty dictionary</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>person</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.operator, { color: primaryColor }]}>{'\{'}</Text>
              <Text style={[styles.value, { color: secondaryColor }]}>"name"</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text> <Text style={[styles.value, { color: secondaryColor }]}>"Alice"</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text>{'\n'}
              <Text style={[styles.value, { color: secondaryColor }]}>"age"</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text> <Text style={[styles.value, { color: secondaryColor }]}>30</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text>{'\n'}
              <Text style={[styles.value, { color: secondaryColor }]}>"city"</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text> <Text style={[styles.value, { color: secondaryColor }]}>"New York"</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>{'\}'}</Text>
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Set Types: set</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            A <Text style={[styles.keyword, { color: primaryColor }]}>set</Text> is an unordered collection of unique elements. This means that each item in a set must be unique, and sets do not retain the order in which elements were added. Sets are mutable.
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Creating Sets:</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Sets are created using curly braces <Text style={[styles.operator, { color: primaryColor }]}>{'{}'}</Text> or the <Text style={[styles.keyword, { color: primaryColor }]}>set()</Text> constructor. Note that to create an empty set, you must use <Text style={[styles.keyword, { color: primaryColor }]}>set()</Text>, as <Text style={[styles.operator, { color: primaryColor }]}>{'{}'}</Text> creates an empty dictionary.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>my_set1</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.operator, { color: primaryColor }]}>{'\{'}</Text><Text style={[styles.value, { color: secondaryColor }]}>1</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text><Text style={[styles.operator, { color: primaryColor }]}>{'\}'}</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>my_set2</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>set</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}[</Text><Text style={[styles.value, { color: secondaryColor }]}>4</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Note the duplicate 5</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>empty_set</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>set</Text><Text style={[styles.operator, { color: primaryColor }]}>()</Text>
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Uniqueness in Sets:</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            When you create a set with duplicate elements, Python automatically removes the duplicates, ensuring that the set contains only unique items.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>numbers</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.operator, { color: primaryColor }]}>{'\{'}</Text><Text style={[styles.value, { color: secondaryColor }]}>1</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text><Text style={[styles.operator, { color: primaryColor }]}>{'\}'}</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>numbers</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: {`{1, 2, 3}`} (order may vary)</Text>
          </Text>
        </View>

        {/* <Link href="/PythonNumbersAndCastingPage" asChild>
          <NextButton title="Next: Python Numbers and Casting" />
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