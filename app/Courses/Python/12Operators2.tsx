import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

export default function PythonArithmeticOperatorsPage() {
  const { theme } = useTheme();

  const primaryColor = theme.colors.textPrimary;
  const secondaryColor = theme.colors.textSecondary;
  const codeBackgroundColor = theme.colors.codeBackground;
  const accentColor = theme.colors.accent; // Make sure accentColor is defined

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContentContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <View style={styles.container}>
        <BackButton style={styles.backButton} />
        <ScreenTitle title="Python Arithmetic Operators" />

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Python Arithmetic Operators</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Arithmetic operators are used to perform mathematical calculations in Python. Here's a breakdown of the common arithmetic operators:
          </Text>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Addition (+)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              The addition operator adds two operands together.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>num1</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>10</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`The sum is: ${<Text style={{ color: primaryColor }}>sum</Text>}`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: The sum is: 15</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Subtraction (-)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              The subtraction operator subtracts the second operand from the first.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>num1</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>10</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`The difference is: ${<Text style={{ color: primaryColor }}>difference</Text>}`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: The difference is: 5</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Multiplication (*)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              The multiplication operator multiplies two operands.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>num1</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>10</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`The product is: ${<Text style={{ color: primaryColor }}>product</Text>}`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: The product is: 50</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Division (/)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              The division operator divides the first operand by the second. It always returns a floating-point number.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>num1</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>10</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`The quotient is: ${<Text style={{ color: primaryColor }}>quotient</Text>}`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: The quotient is: 3.3333333333333335</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Modulo (%)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              The modulo operator returns the remainder of the division of the first operand by the second.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>num1</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>10</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`The remainder is: ${<Text style={{ color: primaryColor }}>remainder</Text>}`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: The remainder is: 1</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Exponentiation (**)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              The exponentiation operator raises the first operand to the power of the second.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>base</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>2</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`The result is: ${<Text style={{ color: primaryColor }}>power</Text>}`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: The result is: 8</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Floor Division (//)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              The floor division operator divides the first operand by the second and rounds the result down to the nearest whole number (integer).
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>num1</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>10</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`The floor quotient is: ${<Text style={{ color: primaryColor }}>floor_quotient</Text>}`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: The floor quotient is: 3</Text>
            </Text>
          </View>
        </View>

        {/* <Link href="/PythonAssignmentOperatorsPage" asChild>
          <NextButton title="Next: Python Assignment Operators" />
        </Link> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContentContainer: {
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    marginBottom: 10,
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
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
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
    lineHeight: 20,
  },
  comment: {
    color: 'gray',
    fontSize: 14,
    fontStyle: 'italic',
  },
  keyword: {
    fontWeight: 'bold',
  },

});