import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

export default function PythonSyntaxBasicsPage() {
  const { theme } = useTheme();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContentContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <View style={styles.container}>
        <BackButton style={styles.backButton} />
        <ScreenTitle title="Python Syntax Basics" />

        <View style={[styles.section, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.textPrimary }]}>
            Indentation: The Cornerstone of Python
          </Text>
          <Text style={[styles.sectionContent, { color: theme.colors.textPrimary }]}>
            Unlike many other programming languages that use curly braces <Text style={styles.keyword}>{'{}'}</Text> to
            define blocks of code, Python uses <Text style={styles.bold}>indentation</Text>. Indentation refers to the
            spaces at the beginning of a code line.
          </Text>
          <Text style={[styles.sectionContent, { color: theme.colors.textPrimary }]}>
            <Text style={styles.bold}>Importance:</Text> Indentation is not just for readability in Python; it's part of
            the syntax. Blocks of code (like inside loops or conditional statements) must be indented.
          </Text>
          <Text style={[styles.sectionContent, { color: theme.colors.textPrimary }]}>
            <Text style={styles.bold}>Rule:</Text> Use the same number of spaces for all lines within a code block. The
            standard in Python is <Text style={styles.bold}>4 spaces</Text> per indentation level. Tabs can be used, but
            it's highly recommended to stick to spaces for consistency.
          </Text>

          <Text style={[styles.subSectionTitle, { color: theme.colors.textPrimary }]}>
            Example of Correct Indentation:
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: theme.colors.codeBackground }]}>
            <Text style={[styles.keyword, { color: theme.colors.textPrimary }]}>if</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}> 5 </Text><Text style={[styles.operator, { color: theme.colors.textPrimary }]}>{'>'}</Text><Text style={[styles.operator, { color: theme.colors.textPrimary }]}> 2</Text><Text style={[styles.operator, { color: theme.colors.textPrimary }]}>:</Text>{'\n'}
            <Text style={styles.codeLine}>    <Text style={[styles.keyword, { color: theme.colors.textPrimary }]}>print</Text><Text style={[styles.operator, { color: theme.colors.textPrimary }]}>("</Text><Text style={[styles.value, { color: theme.colors.textSecondary }]}>Five is greater than two!</Text><Text style={[styles.operator, { color: theme.colors.textPrimary }]}>")</Text>  <Text style={styles.comment}># This line is indented</Text></Text>
          </Text>

          <Text style={[styles.subSectionTitle, { color: theme.colors.textPrimary }]}>
            Example of Incorrect Indentation (will cause an error):
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: theme.colors.codeBackground }]}>
            <Text style={[styles.keyword, { color: theme.colors.textPrimary }]}>if</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}> 5 </Text><Text style={[styles.operator, { color: theme.colors.textPrimary }]}>{'>'}</Text><Text style={[styles.operator, { color: theme.colors.textPrimary }]}> 2</Text><Text style={[styles.operator, { color: theme.colors.textPrimary }]}>:</Text>{'\n'}
            <Text style={styles.codeLine}><Text style={[styles.keyword, { color: theme.colors.textPrimary }]}>print</Text><Text style={[styles.operator, { color: theme.colors.textPrimary }]}>("</Text><Text style={[styles.value, { color: theme.colors.textSecondary }]}>Five is greater than two!</Text><Text style={[styles.operator, { color: theme.colors.textPrimary }]}>")</Text> <Text style={styles.comment}># Error! Not indented correctly</Text></Text>
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.textPrimary }]}>
            Variables: Naming Conventions
          </Text>
          <Text style={[styles.sectionContent, { color: theme.colors.textPrimary }]}>
            Variables are used to store data in Python. Here are some rules for naming variables:
          </Text>
          <Text style={[styles.sectionContent, { color: theme.colors.textPrimary }]}>
            • A variable name must start with a letter or the underscore character <Text style={styles.bold}>_</Text>.
          </Text>
          <Text style={[styles.sectionContent, { color: theme.colors.textPrimary }]}>
            • A variable name cannot start with a number.
          </Text>
          <Text style={[styles.sectionContent, { color: theme.colors.textPrimary }]}>
            • A variable name can only contain alpha-numeric characters (a-z, A-Z, 0-9) and underscores <Text style={styles.bold}>_</Text>.
          </Text>
          <Text style={[styles.sectionContent, { color: theme.colors.textPrimary }]}>
            • Variable names are case-sensitive (<Text style={styles.bold}>age</Text>, <Text style={styles.bold}>Age</Text>,
            and <Text style={styles.bold}>AGE</Text> are three different variables).
          </Text>

          <Text style={[styles.subSectionTitle, { color: theme.colors.textPrimary }]}>
            Good Variable Name Examples:
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: theme.colors.codeBackground }]}>
            <Text style={[styles.variable, { color: theme.colors.textPrimary }]}>my_variable</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text> <Text style={[styles.value, { color: theme.colors.textSecondary }]}>10</Text>{'\n'}
            <Text style={[styles.variable, { color: theme.colors.textPrimary }]}>name</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text> <Text style={[styles.value, { color: theme.colors.textSecondary }]}>"Alice"</Text>{'\n'}
            <Text style={[styles.variable, { color: theme.colors.textPrimary }]}>user_age</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text> <Text style={[styles.value, { color: theme.colors.textSecondary }]}>30</Text>{'\n'}
            <Text style={[styles.variable, { color: theme.colors.textPrimary }]}>_count</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text> <Text style={[styles.value, { color: theme.colors.textSecondary }]}>1</Text>
          </Text>

          <Text style={[styles.subSectionTitle, { color: theme.colors.textPrimary }]}>
            Invalid Variable Name Examples:
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: theme.colors.codeBackground }]}>
            <Text style={[styles.value, { color: theme.colors.textSecondary }]}>1</Text><Text style={[styles.variable, { color: theme.colors.textPrimary }]}>st_variable</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text> <Text style={[styles.value, { color: theme.colors.textSecondary }]}>5</Text> <Text style={styles.comment}># Cannot start with a number</Text>{'\n'}
            <Text style={[styles.variable, { color: theme.colors.textPrimary }]}>my-variable</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text> <Text style={[styles.value, { color: theme.colors.textSecondary }]}>"test"</Text> <Text style={styles.comment}># Hyphens are not allowed</Text>{'\n'}
            <Text style={[styles.variable, { color: theme.colors.textPrimary }]}>user Age</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text> <Text style={[styles.value, { color: theme.colors.textSecondary }]}>25</Text> <Text style={styles.comment}># Spaces are not allowed</Text>
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.textPrimary }]}>Case Sensitivity</Text>
          <Text style={[styles.sectionContent, { color: theme.colors.textPrimary }]}>
            Remember that Python distinguishes between uppercase and lowercase letters in variable names, keywords, and
            function names.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: theme.colors.codeBackground }]}>
            <Text style={[styles.variable, { color: theme.colors.textPrimary }]}>message</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text> <Text style={[styles.value, { color: theme.colors.textSecondary }]}>"Hello"</Text>{'\n'}
            <Text style={[styles.variable, { color: theme.colors.textPrimary }]}>Message</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text> <Text style={[styles.value, { color: theme.colors.textSecondary }]}>"World"</Text>{'\n'}
            <Text style={[styles.keyword, { color: theme.colors.textPrimary }]}>print</Text><Text style={[styles.operator, { color: theme.colors.textPrimary }]}>("</Text><Text style={[styles.variable, { color: theme.colors.textPrimary }]}>message</Text><Text style={[styles.operator, { color: theme.colors.textPrimary }]}>")</Text> <Text style={styles.comment}># Output: Hello</Text>{'\n'}
            <Text style={[styles.keyword, { color: theme.colors.textPrimary }]}>print</Text><Text style={[styles.operator, { color: theme.colors.textPrimary }]}>("</Text><Text style={[styles.variable, { color: theme.colors.textPrimary }]}>Message</Text><Text style={[styles.operator, { color: theme.colors.textPrimary }]}>")</Text> <Text style={styles.comment}># Output: World</Text>
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.textPrimary }]}>Comments</Text>
          <Text style={[styles.sectionContent, { color: theme.colors.textPrimary }]}>
            Comments are used to explain your code and are ignored by the Python interpreter. You can add comments using
            the <Text style={styles.bold}>#</Text> symbol.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: theme.colors.codeBackground }]}>
            <Text style={styles.comment}># This is a single-line comment</Text>{'\n'}
            <Text style={[styles.keyword, { color: theme.colors.textPrimary }]}>print</Text><Text style={[styles.operator, { color: theme.colors.textPrimary }]}>("</Text><Text style={[styles.value, { color: theme.colors.textSecondary }]}>Hello</Text><Text style={[styles.operator, { color: theme.colors.textPrimary }]}>")</Text> <Text style={styles.comment}># This is a comment at the end of a line</Text>{'\n'}
            <Text style={styles.codeLine}></Text>{'\n'}
            <Text style={styles.comment}>'''</Text>{'\n'}
            <Text style={styles.comment}>This is a</Text>{'\n'}
            <Text style={styles.comment}>multi-line</Text>{'\n'}
            <Text style={styles.comment}>comment.</Text>{'\n'}
            <Text style={styles.comment}>'''</Text>{'\n'}
            <Text style={styles.codeLine}></Text>{'\n'}
            <Text style={styles.comment}>"""</Text>{'\n'}
            <Text style={styles.comment}>You can also use</Text>{'\n'}
            <Text style={styles.comment}>triple double quotes</Text>{'\n'}
            <Text style={styles.comment}>for multi-line comments or docstrings.</Text>{'\n'}
            <Text style={styles.comment}>"""</Text>
          </Text>
        </View>

        {/* <Link href="/PythonVariablesOutputPage" asChild>
          <NextButton title="Next: Variables & Output" />
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
  comment: {
    color: 'gray',
    fontStyle: 'italic',
  },
});