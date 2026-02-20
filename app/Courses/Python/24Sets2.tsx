import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

export default function PythonTuplesPage() {
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
        <ScreenTitle title="Python Sets (Set Operations)" />

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Python Set Operations</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Python provides several built-in methods and operators to perform common set operations, allowing you to combine, compare, and find differences between sets.
          </Text>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Set Operations</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Let's explore the fundamental set operations: union, intersection, difference, and symmetric difference. Python offers both methods and corresponding operators for these operations.
            </Text>

            <View style={{ marginLeft: 15 }}>
              <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'union()' and '|' Operator (OR)</Text>
              <Text style={[styles.sectionContent, { color: primaryColor, fontSize: 14 }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>union()</Text> method returns a new set containing all items from both sets. The <Text style={[styles.bold, { color: primaryColor }]}>|</Text> (pipe) operator does the same.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>set1</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'a'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'b'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>set2</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'b'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'c'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>union_set_method</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>set1</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>union</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: primaryColor }}>set2</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`union_set_method`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'a', 'b', 'c'}"}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>union_set_operator</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>set1</Text> <Text style={{ color: primaryColor }}>|</Text> <Text style={{ color: primaryColor }}>set2</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`union_set_operator`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'a', 'b', 'c'}"}</Text>
              </Text>
            </View>

            <View style={{ marginLeft: 15, marginTop: 10 }}>
              <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'intersection()' and '&' Operator (AND)</Text>
              <Text style={[styles.sectionContent, { color: primaryColor, fontSize: 14 }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>intersection()</Text> method returns a new set containing only the items that are present in both sets. The <Text style={[styles.bold, { color: primaryColor }]}>&</Text> (ampersand) operator does the same.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>set1</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'a'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'b'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'c'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>set2</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'b'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'c'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'d'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>intersection_set_method</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>set1</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>intersection</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: primaryColor }}>set2</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`intersection_set_method`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'b', 'c'}"}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>intersection_set_operator</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>set1</Text> <Text style={{ color: primaryColor }}>&</Text> <Text style={{ color: primaryColor }}>set2</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`intersection_set_operator`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'b', 'c'}"}</Text>
              </Text>
            </View>

            <View style={{ marginLeft: 15, marginTop: 10 }}>
              <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'difference()' and '-' Operator</Text>
              <Text style={[styles.sectionContent, { color: primaryColor, fontSize: 14 }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>difference()</Text> method returns a new set containing items from the first set that are not present in the second set. The <Text style={[styles.bold, { color: primaryColor }]}>-</Text> (minus) operator does the same.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>set1</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'a'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'b'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'c'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>set2</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'b'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'c'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'d'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>difference_set_method</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>set1</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>difference</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: primaryColor }}>set2</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`difference_set_method`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'a'}"}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>difference_set_operator</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>set1</Text> <Text style={{ color: primaryColor }}>-</Text> <Text style={{ color: primaryColor }}>set2</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`difference_set_operator`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'a'}"}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>difference_set_reverse</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>set2</Text> <Text style={{ color: primaryColor }}>-</Text> <Text style={{ color: primaryColor }}>set1</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`difference_set_reverse`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'d'}"}</Text>
              </Text>
            </View>

            <View style={{ marginLeft: 15, marginTop: 10 }}>
              <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'symmetric_difference()' and '^' Operator</Text>
              <Text style={[styles.sectionContent, { color: primaryColor, fontSize: 14 }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>symmetric_difference()</Text> method returns a new set containing all items from both sets except for the items that are common to both. The <Text style={[styles.bold, { color: primaryColor }]}>^</Text> (caret) operator does the same.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>set1</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'a'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'b'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'c'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>set2</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'b'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'c'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'d'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>symmetric_difference_method</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>set1</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>symmetric_difference</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: primaryColor }}>set2</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`symmetric_difference_method`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'a', 'd'}"}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>symmetric_difference_operator</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>set1</Text> <Text style={{ color: primaryColor }}>^</Text> <Text style={{ color: primaryColor }}>set2</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`symmetric_difference_operator`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'a', 'd'}"}</Text>
              </Text>
            </View>
          </View>
        </View>

        {/* <Link href="/PythonDictionariesPage" asChild>
          <NextButton title="Next: Python Dictionaries" />
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