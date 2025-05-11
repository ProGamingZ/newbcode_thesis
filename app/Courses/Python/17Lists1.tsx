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

export default function PythonListsPart1Page() {
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
        <ScreenTitle title="Python Lists - Part 1 (Basics)" />

        <DropdownBlock
          title="Python Lists - Basics"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Lists are ordered, mutable (changeable) collections of items. They are one of the most frequently used data types in Python.
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Creating Lists"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Lists are created by placing items inside square brackets <Text style={[styles.bold, { color: primaryColor }]}>[]</Text>, separated by commas.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.comment, { color: secondaryColor }]}># An empty list</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>my_list</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[]</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`my_list`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: []</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}># A list of integers</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>numbers</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>1</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`numbers`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: [1, 2, 3]</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}># A list of strings</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[{ color: secondaryColor }]}>'apple'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'banana'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'cherry'</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`fruits`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: ['apple', 'banana', 'cherry']</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}># A list with mixed data types</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>mixed_list</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>1</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'hello'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>3.14</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`mixed_list`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: [1, 'hello', 3.14]</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Accessing Items (Indexing)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                You can access individual items in a list using their index. Indices start from 0 for the first item.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[{ color: secondaryColor }]}>'apple'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'banana'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'cherry'</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`fruits[0]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: apple</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`fruits[1]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: banana</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`fruits[2]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: cherry</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Accessing Items (Negative Indexing)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Negative indexing allows you to access items from the end of the list. <Text style={[styles.bold, { color: primaryColor }]}>-1</Text> refers to the last item, <Text style={[styles.bold, { color: primaryColor }]}>-2</Text> to the second last, and so on.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[{ color: secondaryColor }]}>'apple'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'banana'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'cherry'</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`fruits[-1]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: cherry</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`fruits[-2]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: banana</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`fruits[-3]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: apple</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Slicing Lists"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                You can extract a sublist (a slice) from a list using the slicing operator <Text style={[styles.bold, { color: primaryColor }]}>:</Text>. The syntax is <Text style={[styles.bold, { color: primaryColor }]}>[start:end]</Text>, where <Text style={[styles.bold, { color: primaryColor }]}>start</Text> is the index to begin the slice (inclusive) and <Text style={[styles.bold, { color: primaryColor }]}>end</Text> is the index to end the slice (exclusive).
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>numbers</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>0</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>1</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>4</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`numbers[1:4]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: [1, 2, 3]</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`numbers[:3]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: [0, 1, 2]</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`numbers[3:]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: [3, 4, 5]</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`numbers[:]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: [0, 1, 2, 3, 4, 5]</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`numbers[::2]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: [0, 2, 4]</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Changing Item Values"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Because lists are mutable, you can change the value of specific items by assigning a new value to its index.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[{ color: secondaryColor }]}>'apple'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'banana'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'cherry'</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[{ color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>1</Text><Text style={[{ color: primaryColor }]}>]</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: secondaryColor }]}>'grape'</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`fruits`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: ['apple', 'grape', 'cherry']</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>numbers</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor}]}>1</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>numbers</Text><Text style={[{ color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>0</Text><Text style={[{ color: primaryColor }]}>]</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>100</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`numbers`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: [100, 2, 3]</Text>
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