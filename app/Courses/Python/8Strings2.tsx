import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
import { FontAwesome } from '@expo/vector-icons';

interface DropdownProps {
  title: string;
  content: React.ReactNode;
}

const DropdownBlock: React.FC<DropdownProps> = ({ title, content }) => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={[styles.dropdownBlock, { backgroundColor: theme.colors.accent }]}>
      <TouchableOpacity style={styles.dropdownHeader} onPress={toggleVisibility}>
        <Text style={[styles.dropdownTitle, { color: theme.colors.textPrimary }]}>{title}</Text>
        <FontAwesome
          name={isVisible ? 'chevron-up' : 'chevron-down'}
          size={18}
          color={theme.colors.textPrimary}
        />
      </TouchableOpacity>
      {isVisible && (
        <View style={styles.dropdownContent}>
          {content}
        </View>
      )}
    </View>
  );
};

export default function PythonStringsPart2Page() {
  const { theme } = useTheme();

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
        <ScreenTitle title="Python Strings - Part 2" />

        <DropdownBlock
          title="replace() Method"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The <Text style={[styles.keyword, { color: primaryColor }]}>replace()</Text> method replaces all occurrences of a specified substring with another substring.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>original_text</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"Hello World"</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>replaced_text</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>original_text</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>replace</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}"World", "Python")</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>replaced_text</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: "Hello Python"</Text>
              </Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                You can also specify the number of replacements to make as a third argument (optional).
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>text_with_many</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"apple banana apple cherry apple"</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>replace_once</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>text_with_many</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>replace</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}"apple", "orange", 1)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>replace_once</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: "orange banana apple cherry apple"</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="split() Method"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The <Text style={[styles.keyword, { color: primaryColor }]}>split()</Text> method splits a string into a list of substrings based on a specified delimiter. If no delimiter is specified, it defaults to whitespace.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>sentence</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"Hello,World,Python"</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>split_comma</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>sentence</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>split</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}",")</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>split_comma</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: ['Hello', 'World', 'Python']</Text>
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>paragraph</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"This is a sentence. Another sentence."</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>split_space</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>paragraph</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>split</Text><Text style={[styles.operator, { color: primaryColor }]}>()</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>split_space</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: ['This', 'is', 'a', 'sentence.', 'Another', 'sentence.']</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="lower() Method"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The <Text style={[styles.keyword, { color: primaryColor }]}>lower()</Text> method returns a new string where all characters in the original string are converted to lowercase.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>mixed_case</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"PyThOn"</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>lower_case</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>mixed_case</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>lower</Text><Text style={[styles.operator, { color: primaryColor }]}>()</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>lower_case</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: "python"</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="upper() Method"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The <Text style={[styles.keyword, { color: primaryColor }]}>upper()</Text> method returns a new string where all characters in the original string are converted to uppercase.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>lower_case_text</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"python"</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>upper_case_text</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>lower_case_text</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>upper</Text><Text style={[styles.operator, { color: primaryColor }]}>()</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>upper_case_text</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: "PYTHON"</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="strip() Method"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The <Text style={[styles.keyword, { color: primaryColor }]}>strip()</Text> method removes leading and trailing whitespace (spaces, tabs, newlines) from a string.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>text_with_space</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"   Hello World   "</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>stripped_text</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>text_with_space</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>strip</Text><Text style={[styles.operator, { color: primaryColor }]}>()</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>stripped_text</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: "Hello World"</Text>
              </Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                You can also specify characters to remove by passing them as an argument to the <Text style={[styles.keyword, { color: primaryColor }]}>strip()</Text> method.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>text_with_chars</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>",,,Python!!!"</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>stripped_chars</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>text_with_chars</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>strip</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}",!")</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>stripped_chars</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: "Python"</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="find() Method"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The <Text style={[styles.keyword, { color: primaryColor }]}>find()</Text> method returns the index of the first occurrence of a specified substring. If the substring is not found, it returns -1.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>my_string</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"Hello Python"</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>index</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>my_string</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>find</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}"Python")</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>index</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: 6</Text>
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>not_found</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>my_string</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>find</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}"Java")</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>not_found</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: -1</Text>
              </Text>
            </View>
          }
        />

        <BackButton style={styles.backButton} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContentContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '90%',
    paddingHorizontal: 15,
    alignItems: 'flex-start',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 10,
  },
  dropdownBlock: {
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
    overflow: 'hidden',
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  dropdownTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  dropdownContent: {
    padding: 12,
    paddingTop: 0,
  },
  dropdownContentText: {
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 6,
    textAlign: 'justify',
  },
  subSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
  codeBlock: {
    borderRadius: 6,
    padding: 8,
    marginVertical: 6,
    fontFamily: 'monospace',
    fontSize: 13,
  },
  codeLine: {
    lineHeight: 18,
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
    fontSize: 13,
  },
});