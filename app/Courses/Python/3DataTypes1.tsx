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

export default function PythonDataTypesPart1Page() {
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
        <ScreenTitle title="Python Data Types - Part 1" />

        <DropdownBlock
          title="Introduction to Data Types"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: theme.colors.textPrimary }]}>
                Data types are classifications of data items. They represent the kind of value that tells what operations can
                be performed on a particular piece of data. Python has several built-in data types, which we will explore
                over the next few pages.
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Text Type: str"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: theme.colors.textPrimary }]}>
                The <Text style={[styles.keyword, { color: theme.colors.textPrimary }]}>str</Text> (string) data type is used to represent sequences of characters.
                Strings in Python are immutable, meaning that once a string is created, its contents cannot be changed.
              </Text>

              <Text style={[styles.subSectionTitle, { color: theme.colors.textPrimary }]}>Creating Strings:</Text>
              <Text style={[styles.dropdownContentText, { color: theme.colors.textPrimary }]}>
                Strings can be created by enclosing characters in single quotes (<Text style={[styles.operator, { color: theme.colors.textPrimary }]}>'...'</Text>), double quotes (<Text style={[styles.operator, { color: theme.colors.textPrimary }]}>"..."</Text>), or triple
                quotes (<Text style={[styles.operator, { color: theme.colors.textPrimary }]}>'''...'''</Text> or <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>"""..."""</Text>). Triple quotes are often used for multiline strings or docstrings.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: theme.colors.codeBackground }]}>
                <Text style={[styles.variable, { color: theme.colors.textPrimary }]}>single_quoted</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text> <Text style={[styles.value, { color: theme.colors.textSecondary }]}>'Hello'</Text>{'\n'}
                <Text style={[styles.variable, { color: theme.colors.textPrimary }]}>double_quoted</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text> <Text style={[styles.value, { color: theme.colors.textSecondary }]}>"World"</Text>{'\n'}
                <Text style={[styles.variable, { color: theme.colors.textPrimary }]}>multi_line_single</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text>{'\n'}
                <Text style={[styles.value, { color: theme.colors.textSecondary }]}>'''This is a</Text>{'\n'}
                <Text style={[styles.value, { color: theme.colors.textSecondary }]}>multi-line string</Text>{'\n'}
                <Text style={[styles.value, { color: theme.colors.textSecondary }]}>using single quotes.'''</Text>{'\n'}
                <Text style={[styles.variable, { color: theme.colors.textPrimary }]}>multi_line_double</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text>{'\n'}
                <Text style={[styles.value, { color: theme.colors.textSecondary }]}>"""This is also a</Text>{'\n'}
                <Text style={[styles.value, { color: theme.colors.textSecondary }]}>multi-line string</Text>{'\n'}
                <Text style={[styles.value, { color: theme.colors.textSecondary }]}>using double quotes."""</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Numeric Types: int, float"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: theme.colors.textPrimary }]}>
                Python has three built-in numeric types:
              </Text>
              <Text style={[styles.dropdownContentText, { color: theme.colors.textPrimary }]}>
                • <Text style={styles.bold}><Text style={[styles.keyword, { color: theme.colors.textPrimary }]}>int</Text></Text> (integer): Represents whole numbers, positive or negative, without
                decimals, of unlimited length.
              </Text>
              <Text style={[styles.dropdownContentText, { color: theme.colors.textPrimary }]}>
                • <Text style={styles.bold}><Text style={[styles.keyword, { color: theme.colors.textPrimary }]}>float</Text></Text> (floating-point number): Represents real numbers with a decimal
                point. Floats can also be in scientific notation with an "e" to indicate the power of 10.
              </Text>
              {/* complex numbers will be on another page */}

              <Text style={[styles.subSectionTitle, { color: theme.colors.textPrimary }]}>Examples of int and float:</Text>
              <Text style={[styles.codeBlock, { backgroundColor: theme.colors.codeBackground }]}>
                <Text style={[styles.variable, { color: theme.colors.textPrimary }]}>integer_num</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text> <Text style={[styles.value, { color: theme.colors.textSecondary }]}>123</Text>{'\n'}
                <Text style={[styles.variable, { color: theme.colors.textPrimary }]}>negative_int</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text> <Text style={[styles.value, { color: theme.colors.textSecondary }]}>-45</Text>{'\n'}
                <Text style={[styles.variable, { color: theme.colors.textPrimary }]}>large_int</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text> <Text style={[styles.value, { color: theme.colors.textSecondary }]}>12345678901234567890</Text>{'\n'}
                <Text style={[styles.variable, { color: theme.colors.textPrimary }]}>float_num</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text> <Text style={[styles.value, { color: theme.colors.textSecondary }]}>3.14</Text>{'\n'}
                <Text style={[styles.variable, { color: theme.colors.textPrimary }]}>negative_float</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text> <Text style={[styles.value, { color: theme.colors.textSecondary }]}>-0.005</Text>{'\n'}
                <Text style={[styles.variable, { color: theme.colors.textPrimary }]}>scientific_float</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text> <Text style={[styles.value, { color: theme.colors.textSecondary }]}>2.5</Text><Text style={[styles.operator, { color: theme.colors.textPrimary }]}>e</Text><Text style={[styles.value, { color: theme.colors.textSecondary }]}>6</Text> <Text style={styles.comment}># 2.5 * 10^6 = 2500000.0</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Boolean Type: bool"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: theme.colors.textPrimary }]}>
                The <Text style={[styles.keyword, { color: theme.colors.textPrimary }]}>bool</Text> (boolean) data type represents one of two possible values:
                <Text style={[styles.value, { color: theme.colors.textSecondary }]}>True</Text> or <Text style={[styles.value, { color: theme.colors.textSecondary }]}>False</Text>. Boolean values are often the
                result of logical operations or comparisons.
              </Text>

              <Text style={[styles.subSectionTitle, { color: theme.colors.textPrimary }]}>Examples of bool:</Text>
              <Text style={[styles.codeBlock, { backgroundColor: theme.colors.codeBackground }]}>
                <Text style={[styles.variable, { color: theme.colors.textPrimary }]}>is_python_fun</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text> <Text style={[styles.value, { color: theme.colors.textSecondary }]}>True</Text>{'\n'}
                <Text style={[styles.variable, { color: theme.colors.textPrimary }]}>is_java_easier</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text> <Text style={[styles.value, { color: theme.colors.textSecondary }]}>False</Text>{'\n'}
                <Text style={[styles.variable, { color: theme.colors.textPrimary }]}>result</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>({'>'}5 </Text><Text style={[styles.operator, { color: theme.colors.textPrimary }]}>)</Text> <Text style={styles.comment}># result will be True</Text>{'\n'}
                <Text style={[styles.variable, { color: theme.colors.textPrimary }]}>check</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>=</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>({'>'}10 </Text><Text style={[styles.operator, { color: theme.colors.textPrimary }]}>==</Text> <Text style={[styles.operator, { color: theme.colors.textPrimary }]}>5</Text><Text style={[styles.operator, { color: theme.colors.textPrimary }]}>)</Text> <Text style={styles.comment}># check will be False</Text>
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