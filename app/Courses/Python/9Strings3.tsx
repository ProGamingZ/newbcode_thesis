import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

export default function PythonStringsPart3Page() {
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
        <ScreenTitle title="Python Strings - Part 3" />

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Python Strings - Part 3 (Concatenation and Formatting)</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            In this section, we'll explore how to combine strings together (concatenation) and how to format strings to include variables and expressions in a readable way.
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>String Concatenation</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            You can concatenate (combine) strings using the <Text style={[styles.operator, { color: primaryColor }]}>+</Text> operator.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>greeting</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"Hello"</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>name</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"Alice"</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>full_greeting</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>greeting</Text> <Text style={[styles.operator, { color: primaryColor }]}>+</Text> <Text style={[styles.value, { color: secondaryColor }]}>" "</Text> <Text style={[styles.operator, { color: primaryColor }]}>+</Text> <Text style={[styles.variable, { color: primaryColor }]}>name</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>full_greeting</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: "Hello Alice"</Text>
          </Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Remember that you can only concatenate strings with other strings. If you want to concatenate a string with a number, you'll need to convert the number to a string first using <Text style={[styles.keyword, { color: primaryColor }]}>str()</Text>.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>age</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>30</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>message</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"My age is "</Text> <Text style={[styles.operator, { color: primaryColor }]}>+</Text> <Text style={[styles.keyword, { color: primaryColor }]}>str</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>age</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>message</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: "My age is 30"</Text>
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>String Formatting with f-strings (Formatted String Literals)</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            f-strings provide a concise and readable way to embed expressions inside string literals for formatting. To use an f-string, prefix the string with the letter <Text style={[styles.value, { color: secondaryColor }]}>f</Text> or <Text style={[styles.value, { color: secondaryColor }]}>F</Text>, and then place variables or expressions inside curly braces <Text style={[styles.operator, { color: primaryColor }]}>{}</Text> within the string.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>name</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"Bob"</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>age</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>25</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>formatted_string</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>f"My name is </Text><Text style={[styles.operator, { color: primaryColor }]}>{'\{'}</Text><Text style={[styles.variable, { color: primaryColor }]}>name</Text><Text style={[styles.operator, { color: primaryColor }]}>{'\}'}</Text><Text style={[styles.value, { color: secondaryColor }]}> and I am </Text><Text style={[styles.operator, { color: primaryColor }]}>{'\{'}</Text><Text style={[styles.variable, { color: primaryColor }]}>age</Text><Text style={[styles.operator, { color: primaryColor }]}>{'\}'}</Text><Text style={[styles.value, { color: secondaryColor }]}> years old."</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>formatted_string</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: "My name is Bob and I am 25 years old."</Text>
          </Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            You can also include expressions directly within the curly braces:
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>num1</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>num2</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>result</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>f"The sum of </Text><Text style={[styles.operator, { color: primaryColor }]}>{'\{'}</Text><Text style={[styles.variable, { color: primaryColor }]}>num1</Text><Text style={[styles.operator, { color: primaryColor }]}>{'\}'}</Text> <Text style={[styles.operator, { color: primaryColor }]}>+</Text> <Text style={[styles.operator, { color: primaryColor }]}>{'\{'}</Text><Text style={[styles.variable, { color: primaryColor }]}>num2</Text><Text style={[styles.operator, { color: primaryColor }]}>{'\}'}</Text> <Text style={[styles.value, { color: secondaryColor }]}> is </Text><Text style={[styles.operator, { color: primaryColor }]}>{'\{'}</Text><Text style={[styles.variable, { color: primaryColor }]}>num1</Text> <Text style={[styles.operator, { color: primaryColor }]}>+</Text> <Text style={[styles.variable, { color: primaryColor }]}>num2</Text><Text style={[styles.operator, { color: primaryColor }]}>{'\}'}</Text><Text style={[styles.value, { color: secondaryColor }]}>."</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>result</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: "The sum of 10 + 5 is 15."</Text>
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>String Formatting with the .format() Method</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            The <Text style={[styles.keyword, { color: primaryColor }]}>.format()</Text> method is another powerful way to format strings. You use curly braces <Text style={[styles.operator, { color: primaryColor }]}>{}</Text> as placeholders in the string, which are then replaced by the arguments passed to the <Text style={[styles.keyword, { color: primaryColor }]}>.format()</Text> method.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>name</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"Charlie"</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>age</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>35</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>formatted_string</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"My name is {} and I am {} years old."</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>format</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>name</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.variable, { color: primaryColor }]}>age</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>formatted_string</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: "My name is Charlie and I am 35 years old."</Text>
          </Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            You can also use positional or keyword arguments within the curly braces for more control:
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>product</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"widget"</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>price</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>29.99</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>formatted_string_pos</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"The price of a {0} is {'${1:.2f}'}."</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>format</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>product</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.variable, { color: primaryColor }]}>price</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>formatted_string_kw</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"Product: {'{item}'}, Cost: {'{cost:.2f}'}"</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>format</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}item=</Text><Text style={[styles.variable, { color: primaryColor }]}>product</Text><Text style={[styles.operator, { color: primaryColor }]}>, cost=</Text><Text style={[styles.variable, { color: primaryColor }]}>price</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>formatted_string_pos</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: "The price of a widget is $29.99."</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>formatted_string_kw</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: "Product: widget, Cost: 29.99"</Text>
          </Text>
        </View>

        {/* <Link href="/PythonBooleansAndOperatorsPage" asChild>
          <NextButton title="Next: Python Booleans and Operators" />
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