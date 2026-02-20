import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

export default function PythonBooleansAndOperatorsPage() {
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
        <ScreenTitle title="Python Booleans and Operators" />

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Python Booleans</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Booleans represent one of two values: <Text style={[styles.bold, { color: primaryColor }]}>True</Text> or <Text style={[styles.bold, { color: primaryColor }]}>False</Text>. They are fundamental in programming for making decisions and controlling the flow of execution.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>is_valid</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>True</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>is_empty</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>False</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>is_valid</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: True</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>is_empty</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: False</Text>
          </Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Boolean values often result from comparisons.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>y</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>is_greater</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>{'>'}</Text> <Text style={[styles.variable, { color: primaryColor }]}>y</Text> <Text style={styles.comment}># True because 10 {'>'} 5</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>is_equal</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>==</Text> <Text style={[styles.variable, { color: primaryColor }]}>y</Text> <Text style={styles.comment}># False because 10 != 5</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>is_greater</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: True</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>is_equal</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: False</Text>
          </Text>

          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Python Operators</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Operators are symbols that perform operations on variables and values. Python divides the operators in the following groups:
          </Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            - Arithmetic operators
          </Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            - Assignment operators
          </Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            - Comparison operators
          </Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            - Logical operators
          </Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            - Identity operators
          </Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            - Membership operators
          </Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            - Bitwise operators
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Arithmetic Operators</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Arithmetic operators are used to perform mathematical operations.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.comment, { color: 'gray' }]}># Addition</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>sum_result</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text> <Text style={[styles.operator, { color: primaryColor }]}>+</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text> <Text style={styles.comment}># Output: 8</Text>{'\n'}
            <Text style={[styles.comment, { color: 'gray' }]}># Subtraction</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>diff_result</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text> <Text style={[styles.operator, { color: primaryColor }]}>-</Text> <Text style={[styles.value, { color: secondaryColor }]}>4</Text> <Text style={styles.comment}># Output: 6</Text>{'\n'}
            <Text style={[styles.comment, { color: 'gray' }]}># Multiplication</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>prod_result</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>6</Text> <Text style={[styles.operator, { color: primaryColor }]}>*</Text> <Text style={[styles.value, { color: secondaryColor }]}>7</Text> <Text style={styles.comment}># Output: 42</Text>{'\n'}
            <Text style={[styles.comment, { color: 'gray' }]}># Division</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>div_result</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>15</Text> <Text style={[styles.operator, { color: primaryColor }]}>/</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text> <Text style={styles.comment}># Output: 5.0 (always returns a float)</Text>{'\n'}
            <Text style={[styles.comment, { color: 'gray' }]}># Modulus (remainder)</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>mod_result</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>16</Text> <Text style={[styles.operator, { color: primaryColor }]}>%</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text> <Text style={styles.comment}># Output: 1</Text>{'\n'}
            <Text style={[styles.comment, { color: 'gray' }]}># Exponentiation (power)</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>pow_result</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text> <Text style={[styles.operator, { color: primaryColor }]}>**</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text> <Text style={styles.comment}># Output: 8</Text>{'\n'}
            <Text style={[styles.comment, { color: 'gray' }]}># Floor division (integer division)</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>floor_div_result</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>17</Text> <Text style={[styles.operator, { color: primaryColor }]}>//</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text> <Text style={styles.comment}># Output: 3</Text>
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Comparison Operators</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Comparison operators are used to compare two values.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>a</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>b</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}a == b)</Text> <Text style={styles.comment}># Output: False (Equal to)</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}a != b)</Text> <Text style={styles.comment}># Output: True (Not equal to)</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}a {'>'} b)</Text> <Text style={styles.comment}># Output: False (Greater than)</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}a {'<'}' b)</Text> <Text style={styles.comment}># Output: True (Less than)</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}a {'>='} b)</Text> <Text style={styles.comment}># Output: False (Greater than or equal to)</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}a {'<='} b)</Text> <Text style={styles.comment}># Output: True (Less than or equal to)</Text>
          </Text>
        </View>

        {/* <Link href="/PythonListsPart1Page" asChild>
          <NextButton title="Next: Python Lists - Part 1" />
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