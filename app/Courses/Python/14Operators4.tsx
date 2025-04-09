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
        <ScreenTitle title="Python Comparison Operators" />

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Python Comparison Operators</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Comparison operators are used to compare the values of two operands. They return a boolean value (<Text style={[styles.bold, { color: primaryColor }]}>True</Text> or <Text style={[styles.bold, { color: primaryColor }]}>False</Text>) based on the condition.
          </Text>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>{'Equal to (==)'}</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Returns <Text style={[styles.bold, { color: primaryColor }]}>True</Text> if both operands are equal.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>5</Text>{'\n'}
              <Text style={{ color: primaryColor }}>y</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>5</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`x == y`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: True'}</Text>{'\n'}
              <Text style={{ color: primaryColor }}>a</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>5</Text>{'\n'}
              <Text style={{ color: primaryColor }}>b</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>10</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`a == b`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: False'}</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>{'Not equal to (!=)'}</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Returns <Text style={[styles.bold, { color: primaryColor }]}>True</Text> if the operands are not equal.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>5</Text>{'\n'}
              <Text style={{ color: primaryColor }}>y</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>10</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`x != y`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: True'}</Text>{'\n'}
              <Text style={{ color: primaryColor }}>a</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>5</Text>{'\n'}
              <Text style={{ color: primaryColor }}>b</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>5</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`a != b`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: False'}</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>{'Greater than (>)'}</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Returns <Text style={[styles.bold, { color: primaryColor }]}>True</Text> if the left operand is greater than the right operand.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>10</Text>{'\n'}
              <Text style={{ color: primaryColor }}>y</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>5</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`x > y`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: True'}</Text>{'\n'}
              <Text style={{ color: primaryColor }}>a</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>3</Text>{'\n'}
              <Text style={{ color: primaryColor }}>b</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>7</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`a > b`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: False'}</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>{'Less than (<)'}</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Returns <Text style={[styles.bold, { color: primaryColor }]}>True</Text> if the left operand is less than the right operand.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>5</Text>{'\n'}
              <Text style={{ color: primaryColor }}>y</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>10</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`x < y`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: True'}</Text>{'\n'}
              <Text style={{ color: primaryColor }}>a</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>8</Text>{'\n'}
              <Text style={{ color: primaryColor }}>b</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>2</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`a < b`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: False'}</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>{'Greater than or equal to (>=)'}</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Returns <Text style={[styles.bold, { color: primaryColor }]}>True</Text> if the left operand is greater than or equal to the right operand.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>10</Text>{'\n'}
              <Text style={{ color: primaryColor }}>y</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>10</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`x >= y`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: True'}</Text>{'\n'}
              <Text style={{ color: primaryColor }}>a</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>15</Text>{'\n'}
              <Text style={{ color: primaryColor }}>b</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>10</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`a >= b`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: True'}</Text>{'\n'}
              <Text style={{ color: primaryColor }}>p</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>5</Text>{'\n'}
              <Text style={{ color: primaryColor }}>q</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>8</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`p >= q`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: False'}</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>{'Less than or equal to (<=)'}</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Returns <Text style={[styles.bold, { color: primaryColor }]}>True</Text> if the left operand is less than or equal to the right operand.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>5</Text>{'\n'}
              <Text style={{ color: primaryColor }}>y</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>5</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`x <= y`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: True'}</Text>{'\n'}
              <Text style={{ color: primaryColor }}>a</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>3</Text>{'\n'}
              <Text style={{ color: primaryColor }}>b</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>7</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`a <= b`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: True'}</Text>{'\n'}
              <Text style={{ color: primaryColor }}>p</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>10</Text>{'\n'}
              <Text style={{ color: primaryColor }}>q</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>2</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`p <= q`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: False'}</Text>
            </Text>
          </View>
        </View>

        {/* <Link href="/PythonIfStatementsPage" asChild>
          <NextButton title="Next: Python If Statements" />
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