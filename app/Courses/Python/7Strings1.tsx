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

export default function PythonStringsPart1Page() {
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
        <ScreenTitle title="Python Strings - Part 1" />

        <DropdownBlock
          title="Python Strings - Part 1 (Fundamentals)"
          content={
            <View>
              <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Creating Strings</Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                As we touched upon earlier, strings in Python are sequences of characters used to represent text. You can create strings using single quotes <Text style={[styles.operator, { color: primaryColor }]}>'...'</Text>, double quotes <Text style={[styles.operator, { color: primaryColor }]}>"..."</Text>, or triple quotes <Text style={[styles.operator, { color: primaryColor }]}>'''...'''</Text> or <Text style={[styles.operator, { color: primaryColor }]}>"""..."""</Text>.
              </Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The choice between single and double quotes is often a matter of style or convenience, especially when the string itself contains one of the quote types. Triple quotes are used for multiline strings or docstrings.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>single_quoted</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>'Hello Python'</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>double_quoted</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"Learning strings"</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>mixed_quotes</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"He said, 'Hello!'"</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>another_mixed</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>'It\'s fun!'</Text> <Text style={styles.comment}># Using escape character</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>multi_line</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>'''This is a</Text>{'\n'}
                <Text style={[styles.value, { color: secondaryColor }]}>multiline</Text>{'\n'}
                <Text style={[styles.value, { color: secondaryColor }]}>string.'''</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>another_multi</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"""Using double</Text>{'\n'}
                <Text style={[styles.value, { color: secondaryColor }]}>quotes for</Text>{'\n'}
                <Text style={[styles.value, { color: secondaryColor }]}>multiline."""</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Strings as Arrays (Indexing)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                In Python, strings are treated as arrays of bytes representing Unicode characters. This means you can access individual characters in a string using their index (position). The index starts from 0 for the first character.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>my_string</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"Python"</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>first_char</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>my_string</Text><Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>0</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text> <Text style={styles.comment}># Output: 'P'</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>second_char</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>my_string</Text><Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>1</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text> <Text style={styles.comment}># Output: 'y'</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>last_char</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>my_string</Text><Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>5</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text> <Text style={styles.comment}># Output: 'n'</Text>
              </Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                You can also use negative indexing to access characters from the end of the string. -1 refers to the last character, -2 to the second to last, and so on.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>last_char_neg</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>my_string</Text><Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>-1</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text> <Text style={styles.comment}># Output: 'n'</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>second_last_char</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>my_string</Text><Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>-2</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text> <Text style={styles.comment}># Output: 'o'</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="String Slicing"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Slicing allows you to extract a range of characters from a string. You specify the start and end index (exclusive) separated by a colon <Text style={[styles.operator, { color: primaryColor }]}>:</Text>.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>my_string</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"Hello World"</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>substring1</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>my_string</Text><Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>0</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text><Text style={[styles.value, { color: secondaryColor }]}>5</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text> <Text style={styles.comment}># Output: 'Hello'</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>substring2</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>my_string</Text><Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>6</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text><Text style={[styles.value, { color: secondaryColor }]}>11</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text> <Text style={styles.comment}># Output: 'World'</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>from_start</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>my_string</Text><Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text><Text style={[styles.value, { color: secondaryColor }]}>5</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text> <Text style={styles.comment}># Output: 'Hello' (from the beginning)</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>to_end</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>my_string</Text><Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>6</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text> <Text style={styles.comment}># Output: 'World' (to the end)</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>step</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>my_string</Text><Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>0</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text><Text style={[styles.value, { color: secondaryColor }]}>11</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text><Text style={[styles.value, { color: secondaryColor }]}>2</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text> <Text style={styles.comment}># Output: 'HloWrd' (every second character)</Text>
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