import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

export default function PythonNumbersAndCastingPage() {
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
        <ScreenTitle title="Python Numbers and Casting" />

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Detailed Look at Numeric Types</Text>
          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>int (Integer)</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            As we introduced earlier, <Text style={[styles.keyword, { color: primaryColor }]}>int</Text> represents whole numbers. In Python 3, integers can be of any length, limited only by your machine's memory.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>positive_int</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>negative_int</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>-5</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>large_int</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>9876543210123456789</Text>
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>float (Floating-Point Number)</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            <Text style={[styles.keyword, { color: primaryColor }]}>float</Text> represents real numbers with a decimal point. They have a limited precision, and you might encounter small discrepancies due to how floating-point numbers are stored in binary.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>pi</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>3.14159</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>negative_float</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>-2.718</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>scientific_notation</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>1.6e-19</Text> <Text style={styles.comment}># Represents 1.6 * 10^-19</Text>
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>complex (Complex Numbers)</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            <Text style={[styles.keyword, { color: primaryColor }]}>complex</Text> numbers are used in mathematics and have a real part and an imaginary part. In Python, the imaginary part is denoted with a <Text style={[styles.value, { color: secondaryColor }]}>j</Text>.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>complex_num1</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text> <Text style={[styles.operator, { color: primaryColor }]}>+</Text> <Text style={[styles.value, { color: secondaryColor }]}>5j</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>complex_num2</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>-1</Text> <Text style={[styles.operator, { color: primaryColor }]}>-</Text> <Text style={[styles.value, { color: secondaryColor }]}>2j</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>complex_num1</Text><Text style={[styles.operator, { color: primaryColor }]}>.real</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: 3.0</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>complex_num1</Text><Text style={[styles.operator, { color: primaryColor }]}>.imag</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: 5.0</Text>
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Type Conversion (Casting)</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            You can convert between numeric types using built-in functions. This is called type casting.
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>int()</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            The <Text style={[styles.keyword, { color: primaryColor }]}>int()</Text> function can convert a floating-point number or a string (representing a whole number) to an integer.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>float_to_int</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>int</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.value, { color: secondaryColor }]}>3.9</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: 3 (truncates the decimal)</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>string_to_int</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>int</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}"</Text><Text style={[styles.value, { color: secondaryColor }]}>123"</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: 123</Text>{'\n'}
            <Text style={[styles.comment]}># int("3.14") would raise a ValueError</Text>
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>float()</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            The <Text style={[styles.keyword, { color: primaryColor }]}>float()</Text> function can convert an integer or a string (representing a real number) to a floating-point number.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>int_to_float</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>float</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.value, { color: secondaryColor }]}>5</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: 5.0</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>string_to_float</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>float</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}"</Text><Text style={[styles.value, { color: secondaryColor }]}>3.14"</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: 3.14</Text>
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>complex()</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            The <Text style={[styles.keyword, { color: primaryColor }]}>complex()</Text> function can create a complex number. You can pass a real part and an optional imaginary part.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>real_only</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>complex</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.value, { color: secondaryColor }]}>2</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: (2+0j)</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>real_imag</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>complex</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.value, { color: secondaryColor }]}>4</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>-3</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: (4-3j)</Text>
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Introduction to the random Module</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            The <Text style={[styles.keyword, { color: primaryColor }]}>random</Text> module provides functions for generating random numbers. Let's look at a basic example.
          </Text>
          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Basic Use of random.randint()</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            The <Text style={[styles.keyword, { color: primaryColor }]}>random.randint(a, b)</Text> function returns a random integer N such that <Text style={[styles.variable, { color: primaryColor }]}>a</Text> {'<='} N {'<='} <Text style={[styles.variable, { color: primaryColor }]}>b</Text>.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.keyword, { color: primaryColor }]}>import</Text> <Text style={[styles.keyword, { color: primaryColor }]}>random</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>random_integer</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>random</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>randint</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.value, { color: secondaryColor }]}>1</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}"Random integer between 1 and 10:",</Text> <Text style={[styles.variable, { color: primaryColor }]}>random_integer</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text>
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Explicit Casting to str()</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            You can explicitly convert numbers to strings using the <Text style={[styles.keyword, { color: primaryColor }]}>str()</Text> function. This is often necessary when you want to concatenate numbers with strings.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>number</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>100</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>string_number</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>str</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>number</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}"The number is: " + </Text><Text style={[styles.variable, { color: primaryColor }]}>string_number</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text>
          </Text>
        </View>

        {/* <Link href="/PythonStringsPart1Page" asChild>
          <NextButton title="Next: Python Strings - Part 1" />
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