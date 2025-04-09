import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

export default function PythonDictionariesPart1Page() {
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
          <ScreenTitle title="Python Dictionaries - Part 3 (Looping)" />
  
          <View style={[styles.section, { backgroundColor: accentColor }]}>
            <Text style={[styles.sectionTitle, { color: primaryColor }]}>Looping Through Python Dictionaries</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              You can iterate through the keys, values, or key-value pairs of a dictionary using <Text style={[styles.bold, { color: primaryColor }]}>for</Text> loops in Python. Here's how you can do it:
            </Text>
  
            <View>
              <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Looping Through Keys</Text>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                By default, when you iterate over a dictionary in a <Text style={[styles.bold, { color: primaryColor }]}>for</Text> loop, you are iterating over its keys. You can also explicitly use the <Text style={[styles.bold, { color: primaryColor }]}>keys()</Text> method.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>my_dict</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'name'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'Alice'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'age'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>30</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'city'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'New York'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}># Looping through keys (default)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={{ color: primaryColor }}>key</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
                <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`key`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: name, age, city (in insertion order from Python 3.7+)'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}># Looping through keys using .keys()</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={{ color: primaryColor }}>key</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>keys</Text><Text style={{ color: primaryColor }}>():</Text>{'\n'}
                <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`key`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: name, age, city (in insertion order)'}</Text>
              </Text>
            </View>
  
            <View>
              <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Looping Through Values</Text>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                To iterate through the values of a dictionary, you can use the <Text style={[styles.bold, { color: primaryColor }]}>values()</Text> method.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>my_dict</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'name'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'Alice'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'age'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>30</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'city'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'New York'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={{ color: primaryColor }}>value</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>values</Text><Text style={{ color: primaryColor }}>():</Text>{'\n'}
                <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`value`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: Alice, 30, New York (in corresponding order)'}</Text>
              </Text>
            </View>
  
            <View>
              <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Looping Through Key-Value Pairs</Text>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                To iterate through both the keys and their corresponding values, you can use the <Text style={[styles.bold, { color: primaryColor }]}>items()</Text> method. This method returns a view object that displays a list of a dictionary's key-value tuple pairs.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>my_dict</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'name'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'Alice'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'age'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>30</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'city'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'New York'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={{ color: primaryColor }}>key</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>value</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>items</Text><Text style={{ color: primaryColor }}>():</Text>{'\n'}
                <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`Key:`}</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>key</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>{`, Value:`}</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>value</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: Key: name, Value: Alice'}</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}>{'#         Key: age, Value: 30'}</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}>{'#         Key: city, Value: New York'}</Text>
              </Text>
            </View>
          </View>
  
          {/* <Link href="/PythonComprehensionsPage" asChild>
            <NextButton title="Next: Python Comprehensions" />
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