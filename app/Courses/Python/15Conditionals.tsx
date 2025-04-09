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
        <ScreenTitle title="Python Conditionals" />

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Python Conditionals</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Conditional statements allow you to execute different blocks of code based on whether certain conditions are <Text style={[styles.bold, { color: primaryColor }]}>True</Text> or <Text style={[styles.bold, { color: primaryColor }]}>False</Text>. The primary conditional statements in Python are <Text style={[styles.bold, { color: primaryColor }]}>if</Text>, <Text style={[styles.bold, { color: primaryColor }]}>elif</Text> (else if), and <Text style={[styles.bold, { color: primaryColor }]}>else</Text>.
          </Text>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>The 'if' Statement</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              The <Text style={[styles.bold, { color: primaryColor }]}>if</Text> statement evaluates a condition. If the condition is <Text style={[styles.bold, { color: primaryColor }]}>True</Text>, the block of code indented under the <Text style={[styles.bold, { color: primaryColor }]}>if</Text> statement is executed.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={[styles.keyword, { color: primaryColor }]}>if</Text> <Text style={{ color: primaryColor }}>condition</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
              <Text style={[styles.comment, { color: secondaryColor }]}>{'  # Code to execute if the condition is True'}</Text>
            </Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Example:
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>age</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>20</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>if</Text> <Text style={{ color: primaryColor }}>age</Text> <Text style={{ color: primaryColor }}>{'>='}</Text> <Text style={{ color: secondaryColor }}>18</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
              <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`You are eligible to vote.`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: You are eligible to vote.'}</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>The 'if...else' Statement</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              The <Text style={[styles.bold, { color: primaryColor }]}>if...else</Text> statement provides an alternative block of code to execute if the <Text style={[styles.bold, { color: primaryColor }]}>if</Text> condition is <Text style={[styles.bold, { color: primaryColor }]}>False</Text>.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={[styles.keyword, { color: primaryColor }]}>if</Text> <Text style={{ color: primaryColor }}>condition</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
              <Text style={[styles.comment, { color: secondaryColor }]}>{'  # Code to execute if the condition is True'}</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>else</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
              <Text style={[styles.comment, { color: secondaryColor }]}>{'  # Code to execute if the condition is False'}</Text>
            </Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Example:
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>temperature</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>15</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>if</Text> <Text style={{ color: primaryColor }}>temperature</Text> <Text style={{ color: primaryColor }}>{'>'}</Text> <Text style={{ color: secondaryColor }}>20</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
              <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`It's a warm day.`})</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>else</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
              <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`It's a bit chilly.`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: It's a bit chilly."}</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>The 'if...elif...else' Statement</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              The <Text style={[styles.bold, { color: primaryColor }]}>if...elif...else</Text> statement allows you to check multiple conditions in sequence. <Text style={[styles.bold, { color: primaryColor }]}>elif</Text> (short for "else if") is checked if the preceding <Text style={[styles.bold, { color: primaryColor }]}>if</Text> or <Text style={[styles.bold, { color: primaryColor }]}>elif</Text> condition was <Text style={[styles.bold, { color: primaryColor }]}>False</Text>. The optional <Text style={[styles.bold, { color: primaryColor }]}>else</Text> block is executed if none of the preceding conditions are <Text style={[styles.bold, { color: primaryColor }]}>True</Text>.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={[styles.keyword, { color: primaryColor }]}>if</Text> <Text style={{ color: primaryColor }}>condition1</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
              <Text style={[styles.comment, { color: secondaryColor }]}>{'  # Code to execute if condition1 is True'}</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>elif</Text> <Text style={{ color: primaryColor }}>condition2</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
              <Text style={[styles.comment, { color: secondaryColor }]}>{'  # Code to execute if condition1 is False and condition2 is True'}</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>else</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
              <Text style={[styles.comment, { color: secondaryColor }]}>{'  # Code to execute if all preceding conditions are False'}</Text>
            </Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Example:
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>grade</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>85</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>if</Text> <Text style={{ color: primaryColor }}>grade</Text> <Text style={{ color: primaryColor }}>{'>='}</Text> <Text style={{ color: secondaryColor }}>90</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
              <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`Grade: A`})</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>elif</Text> <Text style={{ color: primaryColor }}>grade</Text> <Text style={{ color: primaryColor }}>{'>='}</Text> <Text style={{ color: secondaryColor }}>80</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
              <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`Grade: B`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: Grade: B'}</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>elif</Text> <Text style={{ color: primaryColor }}>grade</Text> <Text style={{ color: primaryColor }}>{'>='}</Text> <Text style={{ color: secondaryColor }}>70</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
              <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`Grade: C`})</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>else</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
              <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`Grade: D or lower`})</Text>
            </Text>
          </View>
        </View>

        {/* <Link href="/PythonForLoopsPage" asChild>
          <NextButton title="Next: Python For Loops" />
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