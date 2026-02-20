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
        <ScreenTitle title="Python Lists - Part 1 (Basics)" />

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Lists are ordered, mutable (changeable) collections of items. They are one of the most frequently used data types in Python.
          </Text>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Creating Lists</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Lists are created by placing items inside square brackets <Text style={[styles.bold, { color: primaryColor }]}>[]</Text>, separated by commas.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}># An empty list</Text>{'\n'}
              <Text style={{ color: primaryColor }}>my_list</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[]</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_list`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: []'}</Text>{'\n'}
              <Text style={{ color: primaryColor }}># A list of integers</Text>{'\n'}
              <Text style={{ color: primaryColor }}>numbers</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>2</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>3</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`numbers`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: [1, 2, 3]'}</Text>{'\n'}
              <Text style={{ color: primaryColor }}># A list of strings</Text>{'\n'}
              <Text style={{ color: primaryColor }}>fruits</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`fruits`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: ['apple', 'banana', 'cherry']"}</Text>{'\n'}
              <Text style={{ color: primaryColor }}># A list with mixed data types</Text>{'\n'}
              <Text style={{ color: primaryColor }}>mixed_list</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'hello'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>3.14</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`mixed_list`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: [1, 'hello', 3.14]"}</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Accessing Items (Indexing)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              You can access individual items in a list using their index. Indices start from 0 for the first item.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>fruits</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`fruits[0]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: apple'}</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`fruits[1]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: banana'}</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`fruits[2]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: cherry'}</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Accessing Items (Negative Indexing)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Negative indexing allows you to access items from the end of the list. <Text style={[styles.bold, { color: primaryColor }]}>-1</Text> refers to the last item, <Text style={[styles.bold, { color: primaryColor }]}>-2</Text> to the second last, and so on.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>fruits</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`fruits[-1]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: cherry'}</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`fruits[-2]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: banana'}</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`fruits[-3]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: apple'}</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Slicing Lists</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              You can extract a sublist (a slice) from a list using the slicing operator <Text style={[styles.bold, { color: primaryColor }]}>:</Text>. The syntax is <Text style={[styles.bold, { color: primaryColor }]}>[start:end]</Text>, where <Text style={[styles.bold, { color: primaryColor }]}>start</Text> is the index to begin the slice (inclusive) and <Text style={[styles.bold, { color: primaryColor }]}>end</Text> is the index to end the slice (exclusive).
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>numbers</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>0</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>2</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>3</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>4</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>5</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`numbers[1:4]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: [1, 2, 3]'}</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`numbers[:3]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: [0, 1, 2]'}</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`numbers[3:]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: [3, 4, 5]'}</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`numbers[:]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: [0, 1, 2, 3, 4, 5]'}</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`numbers[::2]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: [0, 2, 4]'}</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Changing Item Values</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Because lists are mutable, you can change the value of specific items by assigning a new value to its index.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>fruits</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
              <Text style={{ color: primaryColor }}>fruits</Text><Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>]</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>'grape'</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`fruits`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: ['apple', 'grape', 'cherry']"}</Text>{'\n'}
              <Text style={{ color: primaryColor }}>numbers</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>2</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>3</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
              <Text style={{ color: primaryColor }}>numbers</Text><Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>0</Text><Text style={{ color: primaryColor }}>]</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>100</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`numbers`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: [100, 2, 3]'}</Text>
            </Text>
          </View>
        </View>

        {/* <Link href="/PythonListsPart2Page" asChild>
          <NextButton title="Next: Python Lists - Part 2" />
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