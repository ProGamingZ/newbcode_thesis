import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

export default function PythonListsPart1Page() {
    const { theme } = useTheme();

    const primaryColor = theme.colors.textPrimary;
    const secondaryColor = theme.colors.textSecondary;
    const codeBackgroundColor = theme.colors.codeBackground;
    const accentColor = theme.colors.accent;
  
    return (
      <ScrollView
        contentContainerStyle={[
          styles.scrollContentContainer,
          { backgroundColor: theme.colors.background },
        ]}
      >
        <View style={styles.container}>
          <BackButton style={styles.backButton} />
          <ScreenTitle title="Python Lists" />
  
          <View style={[styles.section, { backgroundColor: accentColor }]}>
            <Text style={[styles.sectionTitle, { color: primaryColor }]}>Part 3 (Looping and Comprehension)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              This section explores how to iterate through lists and introduces a concise way to create new lists called list comprehension.
            </Text>
  
            <View>
              <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Looping Through Lists Using 'for'</Text>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                You can easily iterate over each item in a list using a <Text style={[styles.bold, { color: primaryColor }]}>for</Text> loop.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>fruits</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={{ color: primaryColor }}>fruit</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={{ color: primaryColor }}>fruits</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
                <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`fruit`})</Text>
              </Text>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                This loop will iterate through the <Text style={[styles.bold, { color: primaryColor }]}>fruits</Text> list, and in each iteration, the current item will be assigned to the <Text style={[styles.bold, { color: primaryColor }]}>fruit</Text> variable, which is then printed. The output will be:
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.comment, { color: secondaryColor }]}>{'apple'}</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}>{'banana'}</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}>{'cherry'}</Text>
              </Text>
            </View>
  
            <View>
              <Text style={[styles.subSectionTitle, { color: primaryColor }]}>List Comprehension (Basic Syntax)</Text>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                List comprehension provides a concise way to create new lists based on existing lists (or other iterables). The basic syntax is:
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: primaryColor }}>expression</Text> <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={{ color: primaryColor }}>item</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={{ color: primaryColor }}>iterable</Text><Text style={{ color: primaryColor }}>]</Text>
              </Text>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                Here, <Text style={[styles.bold, { color: primaryColor }]}>expression</Text> is the operation performed on each <Text style={[styles.bold, { color: primaryColor }]}>item</Text> in the <Text style={[styles.bold, { color: primaryColor }]}>iterable</Text>. The result is a new list containing the results of these expressions.
              </Text>
            </View>
  
            <View>
              <Text style={[styles.subSectionTitle, { color: primaryColor }]}>List Comprehension Examples</Text>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                Let's look at some examples to understand list comprehension better.
              </Text>
  
              <View style={{ marginLeft: 15 }}>
                <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>Squaring Numbers</Text>
                <Text style={[styles.sectionContent, { color: primaryColor, fontSize: 14 }]}>
                  Create a new list containing the square of each number in an existing list.
                </Text>
                <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                  <Text style={{ color: primaryColor }}>numbers</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>2</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>3</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>4</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>5</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
                  <Text style={{ color: primaryColor }}>squares</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: primaryColor }}>n</Text> <Text style={{ color: primaryColor }}>**</Text> <Text style={{ color: secondaryColor }}>2</Text> <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={{ color: primaryColor }}>n</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={{ color: primaryColor }}>numbers</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
                  <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`squares`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: [1, 4, 9, 16, 25]'}</Text>
                </Text>
              </View>
  
              <View style={{ marginLeft: 15, marginTop: 10 }}>
                <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>Converting Strings to Uppercase</Text>
                <Text style={[styles.sectionContent, { color: primaryColor, fontSize: 14 }]}>
                  Create a new list with the uppercase version of each string in a list.
                </Text>
                <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                  <Text style={{ color: primaryColor }}>fruits</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
                  <Text style={{ color: primaryColor }}>upper_fruits</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: primaryColor }}>fruit</Text><Text style={{ color: primaryColor }}>.</Text><Text style={{ color: primaryColor }}>upper</Text><Text style={{ color: primaryColor }}>()</Text> <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={{ color: primaryColor }}>fruit</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={{ color: primaryColor }}>fruits</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
                  <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`upper_fruits`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: ['APPLE', 'BANANA', 'CHERRY']"}</Text>
                </Text>
              </View>
            </View>
          </View>
  
          {/* <Link href="/PythonTuplesPage" asChild>
            <NextButton title="Next: Python Tuples" />
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