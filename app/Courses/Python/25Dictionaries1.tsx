import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

export default function PythonDictionariesPart1Page() {
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
        <ScreenTitle title="Python Dictionaries - Part 1" />

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Introduction to Python Dictionaries</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Python dictionaries are unordered, mutable collections of key-value pairs. Unlike lists and tuples that are indexed by a range of numbers, dictionaries are indexed by <Text style={[styles.bold, { color: primaryColor }]}>keys</Text>, which can be of any immutable type (like strings, numbers, or tuples).
          </Text>
          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Creating Dictionaries</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            You can create a dictionary by placing key-value pairs inside curly braces <Text style={[styles.operator, { color: primaryColor }]}>{}</Text>. Each key is separated from its value by a colon <Text style={[styles.operator, { color: primaryColor }]}>:</Text>, and key-value pairs are separated by commas <Text style={[styles.operator, { color: primaryColor }]}>,</Text>.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.keyword, { color: primaryColor }]}>empty_dict = </Text>
            <Text style={{ color: secondaryColor }}>{'{}'}</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>student = </Text>
            <Text style={{ color: secondaryColor }}>{'{\n'}</Text>
            <Text style={{ color: secondaryColor }}>  </Text><Text style={{ color: secondaryColor }}>'name'</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text> <Text style={{ color: secondaryColor }}>'Alice'</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text>{'\n'}
            <Text style={{ color: secondaryColor }}>  </Text><Text style={{ color: secondaryColor }}>'age'</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text> <Text style={{ color: secondaryColor }}>20</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text>{'\n'}
            <Text style={{ color: secondaryColor }}>  </Text><Text style={{ color: secondaryColor }}>'major'</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text> <Text style={{ color: secondaryColor }}>'Computer Science'</Text>{'\n'}
            <Text style={{ color: secondaryColor }}>{'}'}</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>grades = </Text>
            <Text style={{ color: secondaryColor }}>{'\{ 1: \'A\', 2: \'B\', 3: \'C\' \}'}</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>data = </Text>
            <Text style={{ color: secondaryColor }}>{'{\n'}</Text>
            <Text style={{ color: secondaryColor }}>  </Text><Text style={{ color: secondaryColor }}>'name'</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text> <Text style={{ color: secondaryColor }}>'Bob'</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text>{'\n'}
            <Text style={{ color: secondaryColor }}>  </Text><Text style={{ color: secondaryColor }}>(</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: secondaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>2</Text><Text style={{ color: secondaryColor }}>)</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text> <Text style={{ color: secondaryColor }}>'coordinates'</Text>{'\n'}
            <Text style={{ color: secondaryColor }}>{'}'}</Text>
          </Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Keys in a dictionary must be unique. If you try to use the same key multiple times, the last assigned value will overwrite the previous ones.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.keyword, { color: primaryColor }]}>duplicate_keys = </Text>
            <Text style={{ color: secondaryColor }}>{'\{ \'a\': 1, \'b\': 2, \'a\': 3 \}'}</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text>
            <Text style={{ color: secondaryColor }}>{'(duplicate_keys)'}</Text> <Text style={styles.comment}>{"# Output: {'a': 3, 'b': 2}"}</Text>
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Accessing Items in a Dictionary</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            You can access the value of a specific item in a dictionary by referring to its key using square brackets <Text style={[styles.operator, { color: primaryColor }]}>[]</Text>.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.keyword, { color: primaryColor }]}>student = </Text>
            <Text style={{ color: secondaryColor }}>{'\{ \'name\': \'Alice\', \'age\': 20, \'major\': \'Computer Science\' \}'}</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>name = student</Text><Text style={{ color: secondaryColor }}>['name']</Text> <Text style={styles.comment}># Output: 'Alice'</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>age = student</Text><Text style={{ color: secondaryColor }}>['age']</Text> <Text style={styles.comment}># Output: 20</Text>
          </Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            If you try to access a key that does not exist in the dictionary, it will raise a <Text style={[styles.keyword, { color: primaryColor }]}>KeyError</Text>. To avoid this, you can use the <Text style={[styles.keyword, { color: primaryColor }]}>get()</Text> method.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.keyword, { color: primaryColor }]}>student = </Text>
            <Text style={{ color: secondaryColor }}>{'\{ \'name\': \'Alice\', \'age\': 20 \}'}</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>name = student</Text><Text style={{ color: secondaryColor }}>.get('name')</Text> <Text style={styles.comment}># Output: 'Alice'</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>major = student</Text><Text style={{ color: secondaryColor }}>.get('major')</Text> <Text style={styles.comment}># Output: None (if key doesn't exist)</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>city = student</Text><Text style={{ color: secondaryColor }}>.get('city', 'Unknown')</Text> <Text style={styles.comment}># Output: 'Unknown' (default value if key doesn't exist)</Text>
          </Text>
        </View>

        {/* <Link href="/PythonDictionariesPart2Page" asChild>
          <NextButton title="Next: Python Dictionaries - Part 2" />
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
    listBullet: {
        marginLeft: 20,
        marginBottom: 5,
      },
    comment: {
      color: 'gray',
      fontStyle: 'italic',
    },
  });