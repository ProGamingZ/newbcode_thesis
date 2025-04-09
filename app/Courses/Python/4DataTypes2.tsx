import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

export default function PythonDataTypesPart2Page() {
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
        <ScreenTitle title="Python Data Types - Part 2" />

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Sequence Types: <Text style={[styles.keyword, { color: primaryColor }]}>list</Text>, <Text style={[styles.keyword, { color: primaryColor }]}>tuple</Text>, <Text style={[styles.keyword, { color: primaryColor }]}>range</Text></Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Sequence types are ordered collections of items. Python has three built-in sequence types:
          </Text>
          <Text style={[styles.listItem, { color: primaryColor }]}>• <Text style={styles.bold}><Text style={[styles.keyword, { color: primaryColor }]}>list</Text></Text>: Ordered, mutable (changeable) collection that can contain items of different types.</Text>
          <Text style={[styles.listItem, { color: primaryColor }]}>• <Text style={styles.bold}><Text style={[styles.keyword, { color: primaryColor }]}>tuple</Text></Text>: Ordered, immutable (unchangeable) collection. Typically used for fixed collections of items.</Text>
          <Text style={[styles.listItem, { color: primaryColor }]}>• <Text style={styles.bold}><Text style={[styles.keyword, { color: primaryColor }]}>range</Text></Text>: Represents an immutable sequence of numbers, often used for looping a specific number of times.</Text>
        </View>

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>list</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Lists are created using square brackets <Text style={[styles.operator, { color: primaryColor }]}>[]</Text> and items are separated by commas <Text style={[styles.operator, { color: primaryColor }]}>,</Text>.
          </Text>
          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Examples:</Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>my_list</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.operator, { color: primaryColor }]}>[</Text>
            <Text style={[styles.value, { color: secondaryColor }]}>1</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>, </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>2</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>, </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>3</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>]</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>mixed_list</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.operator, { color: primaryColor }]}>[</Text>
            <Text style={[styles.value, { color: secondaryColor }]}>1</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>, "</Text>
            <Text style={[styles.value, { color: secondaryColor }]}>hello</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>", </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>3.14</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>, </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>True</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>]</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>empty_list</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.operator, { color: primaryColor }]}>[]</Text>
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>tuple</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Tuples are created using parentheses <Text style={[styles.operator, { color: primaryColor }]}>()</Text> and items are separated by commas <Text style={[styles.operator, { color: primaryColor }]}>,</Text>.
          </Text>
          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Examples:</Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>my_tuple</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
            <Text style={[styles.value, { color: secondaryColor }]}>1</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>, </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>2</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>, </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>3</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>)</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>mixed_tuple</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
            <Text style={[styles.value, { color: secondaryColor }]}>1</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>, "</Text>
            <Text style={[styles.value, { color: secondaryColor }]}>hello</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>", </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>3.14</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>, </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>True</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>)</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>empty_tuple</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.operator, { color: primaryColor }]}>()</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>single_item_tuple</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
            <Text style={[styles.value, { color: secondaryColor }]}>5</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>,</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>)</Text>
            <Text style={styles.comment}> # Note the trailing comma</Text>
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>range</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            The <Text style={[styles.keyword, { color: primaryColor }]}>range()</Text> function creates a sequence of numbers. It's often used in <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> loops.
          </Text>
          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Syntax:</Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.keyword, { color: primaryColor }]}>range</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
            <Text style={[styles.variable, { color: primaryColor }]}>stop</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>)</Text>
            <Text style={styles.comment}> # Starts from 0 up to stop (exclusive)</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>range</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
            <Text style={[styles.variable, { color: primaryColor }]}>start</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>, </Text>
            <Text style={[styles.variable, { color: primaryColor }]}>stop</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>)</Text>
            <Text style={styles.comment}> # From start up to stop (exclusive)</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>range</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
            <Text style={[styles.variable, { color: primaryColor }]}>start</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>, </Text>
            <Text style={[styles.variable, { color: primaryColor }]}>stop</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>, </Text>
            <Text style={[styles.variable, { color: primaryColor }]}>step</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>)</Text>
            <Text style={styles.comment}> # From start up to stop (exclusive), with a step</Text>
          </Text>
          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Examples:</Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>numbers</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.keyword, { color: primaryColor }]}>range</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
            <Text style={[styles.value, { color: secondaryColor }]}>5</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>)</Text>
            <Text style={styles.comment}> # 0, 1, 2, 3, 4</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>even_numbers</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.keyword, { color: primaryColor }]}>range</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
            <Text style={[styles.value, { color: secondaryColor }]}>0</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>, </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>10</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>, </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>2</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>)</Text>
            <Text style={styles.comment}> # 0, 2, 4, 6, 8</Text>
          </Text>
        </View>

        {/* <Link href="/PythonDataTypesPart3Page" asChild>
          <NextButton title="Next: Data Types - Part 3" />
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
      textAlign: 'justify', // Added justify alignment
    },
    listItem: {
      fontSize: 16,
      lineHeight: 22,
      marginBottom: 5,
      color: '#000', // Fallback color
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