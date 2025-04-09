import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

export default function PythonVariablesOutputPage() {
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
        <ScreenTitle title="Python Variables and Output" />

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Assigning Values to Variables</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            In Python, you don't need to declare the data type of a variable explicitly. You assign a value to a variable,
            and Python automatically infers its type. This is known as dynamic typing. The equals sign (<Text style={[styles.operator, { color: primaryColor }]}>=</Text>) is used to
            assign values to variables.
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Examples:</Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>x</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>5</Text>
            <Text style={styles.comment}> # x is now an integer</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>y</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>"Hello"</Text>
            <Text style={styles.comment}> # y is now a string</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>z</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>3.14</Text>
            <Text style={styles.comment}> # z is now a float</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>is_true</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>True</Text>
            <Text style={styles.comment}> # is_true is now a boolean</Text>
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Outputting Variables with <Text style={[styles.keyword, { color: primaryColor }]}>print()</Text></Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            To display the value of a variable (or any other text or expression) on the screen, you use the built-in{' '}
            <Text style={[styles.keyword, { color: primaryColor }]}>print()</Text> function.
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Printing Single Variables:</Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>name</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>"Bob"</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>age</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>28</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
            <Text style={[styles.variable, { color: primaryColor }]}>name</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>)</Text>
            <Text style={styles.comment}> # Output: Bob</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
            <Text style={[styles.variable, { color: primaryColor }]}>age</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>)</Text>
            <Text style={styles.comment}> # Output: 28</Text>
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Printing Multiple Items:</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            You can print multiple items in a single <Text style={[styles.keyword, { color: primaryColor }]}>print()</Text> statement by separating them with commas. By default,
            Python will separate these items with a space.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>name</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>"Charlie"</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>age</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>35</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>("</Text>
            <Text style={[styles.value, { color: secondaryColor }]}>Name:</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>", </Text>
            <Text style={[styles.variable, { color: primaryColor }]}>name</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>, "</Text>
            <Text style={[styles.value, { color: secondaryColor }]}>Age:</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>", </Text>
            <Text style={[styles.variable, { color: primaryColor }]}>age</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>)</Text>
            <Text style={styles.comment}> # Output: Name: Charlie Age: 35</Text>
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Using f-strings for Formatting:</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            A more modern and convenient way to embed expressions inside string literals for formatting is using
            f-strings (formatted string literals). You prefix the string with an <Text style={[styles.value, { color: secondaryColor }]}>f</Text> or <Text style={[styles.value, { color: secondaryColor }]}>F</Text> and then enclose variables
            or expressions in curly braces <Text style={[styles.operator, { color: primaryColor }]}>{'{}'}</Text>.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>name</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>"Diana"</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>age</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>22</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>({')'}f"</Text>
            <Text style={[styles.value, { color: secondaryColor }]}>My name is </Text>
            <Text style={[styles.operator, { color: primaryColor }]}>{'\{'}</Text>
            <Text style={[styles.variable, { color: primaryColor }]}>name</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>{'\}'}</Text>
            <Text style={[styles.value, { color: secondaryColor }]}> and I am </Text>
            <Text style={[styles.operator, { color: primaryColor }]}>{'\{'}</Text>
            <Text style={[styles.variable, { color: primaryColor }]}>age</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>{'\}'}</Text>
            <Text style={[styles.value, { color: secondaryColor }]}> years old."</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>)</Text>{'\n'}
            <Text style={styles.codeLine}>
              <Text style={styles.comment}># Output: My name is Diana and I am 22 years old.</Text>
            </Text>
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Variable Types (Dynamic Typing)</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            As mentioned earlier, Python is dynamically typed, which means you don't need to declare the data type of a
            variable when you assign a value to it. The type is determined at runtime. You can even change the type of a
            variable by assigning a new value of a different type.
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Example of Changing Variable Type:</Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>x</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>10</Text>
            <Text style={styles.comment}> # x is an integer</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>({')'}type</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
            <Text style={[styles.variable, { color: primaryColor }]}>x</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>))</Text>
            <Text style={styles.comment}> # Output: {'<class \'int\'>'}</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>x</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>"Hello"</Text>
            <Text style={styles.comment}> # x is now a string</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>({')'}type</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
            <Text style={[styles.variable, { color: primaryColor }]}>x</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>))</Text>
            <Text style={styles.comment}> # Output: {'<class \'str\'>'}</Text>
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Getting the Variable Type with <Text style={[styles.keyword, { color: primaryColor }]}>type()</Text>:</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            You can use the built-in <Text style={[styles.keyword, { color: primaryColor }]}>type()</Text> function to find out the data type of a
            variable.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>age</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>30</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>({')'}type</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
            <Text style={[styles.variable, { color: primaryColor }]}>age</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>))</Text>
            <Text style={styles.comment}> # Output: {'<class \'int\'>'}</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>name</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>"Eve"</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>({')'}type</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
            <Text style={[styles.variable, { color: primaryColor }]}>name</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>))</Text>
            <Text style={styles.comment}> # Output: {'<class \'str\'>'}</Text>
          </Text>
        </View>

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Global vs. Local Variables (Brief Intro)</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            The scope of a variable refers to the region of the code where a variable is accessible. Variables defined
            outside of any function are called <Text style={styles.bold}>global variables</Text>, and they can be accessed
            from anywhere in the program. Variables defined inside a function are called <Text style={styles.bold}>local
            variables</Text>, and they are only accessible within that function. We will explore this in more detail later
            when we discuss functions.
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Example:</Text>

          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.variable, { color: primaryColor }]}>global_var</Text>
            <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
            <Text style={[styles.value, { color: secondaryColor }]}>"I am global"</Text>{'\n'}
            <Text style={styles.codeLine}></Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>def</Text>
            <Text style={[styles.variable, { color: primaryColor }]}> my_function</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>():</Text>{'\n'}
            <Text style={styles.codeLine}>
              <Text style={[styles.variable, { color: primaryColor }]}>  local_var</Text>
              <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
              <Text style={[styles.value, { color: secondaryColor }]}>"I am local"</Text>{'\n'}
            </Text>
            <Text style={styles.codeLine}>
              <Text style={[styles.keyword, { color: primaryColor }]}>  print</Text>
              <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
              <Text style={[styles.variable, { color: primaryColor }]}>local_var</Text>
              <Text style={[styles.operator, { color: primaryColor }]}>)</Text>
              <Text style={styles.comment}> # Accessible here</Text>{'\n'}
            </Text>
            <Text style={styles.codeLine}></Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>my_function</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>()</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
            <Text style={[styles.variable, { color: primaryColor }]}>global_var</Text>
            <Text style={[styles.operator, { color: primaryColor }]}>)</Text>
            <Text style={styles.comment}> # Accessible here</Text>{'\n'}
            <Text style={styles.codeLine}>
              <Text style={styles.comment}># print(local_var) # This would cause an error</Text>
            </Text>
          </Text>
        </View>

        {/* <Link href="/PythonDataTypesPart1Page" asChild>
          <NextButton title="Next: Data Types - Part 1" />
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