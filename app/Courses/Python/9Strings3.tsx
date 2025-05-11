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

export default function PythonStringsPart3Page() {
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
        <ScreenTitle title="Python Strings - Part 3" />

        <DropdownBlock
          title="String Concatenation"
          content={
            <View>
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
                <Text style={[styles.variable, { color: primaryColor }]}>message</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>"My age is "</Text> <Text style={[styles.operator, { color: primaryColor }]}>+</Text> <Text style={[styles.keyword, { color: primaryColor }]}>str</Text><Text style={[styles.operator, { color: primaryColor }]}>{'('}</Text><Text style={[styles.variable, { color: primaryColor }]}>age</Text><Text style={[styles.operator, { color: primaryColor }]}>{')'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>{'('}</Text><Text style={[styles.variable, { color: primaryColor }]}>message</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: "My age is 30"</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="String Formatting with f-strings (Formatted String Literals)"
          content={
            <View>
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
            </View>
          }
        />

        <DropdownBlock
          title="String Formatting with the .format() Method"
          content={
            <View>
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
  sectionContent: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 8,
    color: '#000', // Fallback color
    textAlign: 'justify',
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