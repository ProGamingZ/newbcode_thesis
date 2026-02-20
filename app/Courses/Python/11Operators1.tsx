import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

export default function PythonLogicalOperatorsPage() {
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
        <ScreenTitle title="Python Logical Operators" />

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Python Logical Operators</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Logical operators are used to combine or modify conditional statements. Python has three main logical operators: <Text style={[styles.bold, { color: primaryColor }]}>and</Text>, <Text style={[styles.bold, { color: primaryColor }]}>or</Text>, and <Text style={[styles.bold, { color: primaryColor }]}>not</Text>. They are essential for creating more complex decision-making logic in your programs.
          </Text>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>The 'and' Operator</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              The <Text style={[styles.bold, { color: primaryColor }]}>and</Text> operator returns <Text style={[styles.bold, { color: primaryColor }]}>True</Text> if and only if both of the conditions being evaluated are <Text style={[styles.bold, { color: primaryColor }]}>True</Text>. Otherwise, it returns <Text style={[styles.bold, { color: primaryColor }]}>False</Text>.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>5</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`x > 0 ${'and'} x < 10`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: True (both conditions are true)</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`x > 0 ${'and'} x < 3`})</Text>  <Text style={[styles.comment, { color: secondaryColor }]}># Output: False (the second condition is false)</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>The 'or' Operator</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              The <Text style={[styles.bold, { color: primaryColor }]}>or</Text> operator returns <Text style={[styles.bold, { color: primaryColor }]}>True</Text> if at least one of the conditions being evaluated is <Text style={[styles.bold, { color: primaryColor }]}>True</Text>. It returns <Text style={[styles.bold, { color: primaryColor }]}>False</Text> only if both conditions are <Text style={[styles.bold, { color: primaryColor }]}>False</Text>.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>y</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>2</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`y > 5 ${'or'} y < 5`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: True (the second condition is true)</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`y > 5 ${'or'} y < 1`})</Text>  <Text style={[styles.comment, { color: secondaryColor }]}># Output: False (both conditions are false)</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>The 'not' Operator</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              The <Text style={[styles.bold, { color: primaryColor }]}>not</Text> operator is a unary operator that negates the truth value of a condition. If a condition is <Text style={[styles.bold, { color: primaryColor }]}>True</Text>, <Text style={[styles.bold, { color: primaryColor }]}>not</Text> will make it <Text style={[styles.bold, { color: primaryColor }]}>False</Text>, and vice versa.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>z</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>True</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`not z`})</Text>     <Text style={[styles.comment, { color: secondaryColor }]}># Output: False (negation of True)</Text>{'\n'}
              <Text style={{ color: primaryColor }}>flag</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>False</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`not flag`})</Text>  <Text style={[styles.comment, { color: secondaryColor }]}># Output: True (negation of False)</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Combining Logical Operators</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              You can combine multiple logical operators to create more complex conditions. Python evaluates these expressions based on operator precedence, with <Text style={[styles.bold, { color: primaryColor }]}>not</Text> having the highest precedence, followed by <Text style={[styles.bold, { color: primaryColor }]}>and</Text>, and then <Text style={[styles.bold, { color: primaryColor }]}>or</Text>. You can use parentheses <Text style={[{ color: primaryColor }]}>()</Text> to override this precedence and control the order of evaluation.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>a</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>True</Text>{'\n'}
              <Text style={{ color: primaryColor }}>b</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>False</Text>{'\n'}
              <Text style={{ color: primaryColor }}>c</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>True</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`a ${'and'} b ${'or'} c`})</Text>   <Text style={[styles.comment, { color: secondaryColor }]}># Output: True (and is evaluated before or)</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`(a ${'and'} b) ${'or'} c`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: True</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`a ${'and'} (b ${'or'} c)`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: True (parentheses change the order)</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`not a ${'and'} c`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: False (not a is False)</Text>
            </Text>
          </View>
        </View>

        {/* <Link href="/PythonArithmeticOperatorsPage" asChild>
          <NextButton title="Next: Python Arithmetic Operators" />
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