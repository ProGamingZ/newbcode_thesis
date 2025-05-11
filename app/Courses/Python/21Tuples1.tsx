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

export default function PythonTuplesPage() {
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
        <ScreenTitle title="Python Tuples (Basics and Access)" />

        <DropdownBlock
          title="What are Python Tuples?"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Tuples are ordered, <Text style={[styles.bold, { color: primaryColor }]}>immutable</Text> (cannot be changed) collections of items. They are similar to lists, but their immutability provides certain advantages, such as being hashable and usable as keys in dictionaries.
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Creating Tuples"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Tuples are created by placing items inside parentheses <Text style={[styles.bold, { color: primaryColor }]}>()</Text>, separated by commas. Although parentheses are often used, they are actually optional in some cases (except for empty tuples or when clarity is needed).
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}># An empty tuple</Text>{'\n'}
                <Text style={{ color: primaryColor }}>empty_tuple</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>()</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`empty_tuple`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: ()'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}># A tuple of integers</Text>{'\n'}
                <Text style={{ color: primaryColor }}>numbers</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>2</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>3</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`numbers`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: (1, 2, 3)'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}># A tuple of strings (parentheses optional)</Text>{'\n'}
                <Text style={{ color: primaryColor }}>fruits</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`fruits`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: ('apple', 'banana', 'cherry')"}</Text>{'\n'}
                <Text style={{ color: primaryColor }}># A tuple with a single item (note the trailing comma)</Text>{'\n'}
                <Text style={{ color: primaryColor }}>single_item_tuple</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>5</Text><Text style={{ color: primaryColor }}>,</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`type(single_item_tuple)`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: <class 'tuple'>"}</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Accessing Items (Indexing)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Similar to lists, you can access individual items in a tuple using their index, starting from 0 for the first item.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>fruits</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`fruits[0]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: apple'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`fruits[1]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: banana'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`fruits[2]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: cherry'}</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Accessing Items (Negative Indexing)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Negative indexing works the same way as with lists, allowing you to access items from the end of the tuple. <Text style={[styles.bold, { color: primaryColor }]}>-1</Text> refers to the last item, <Text style={[styles.bold, { color: primaryColor }]}>-2</Text> to the second last, and so on.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>fruits</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`fruits[-1]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: cherry'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`fruits[-2]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: banana'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`fruits[-3]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: apple'}</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Accessing Items (Slicing)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                You can also extract a sub-tuple (a slice) from a tuple using the slicing operator <Text style={[styles.bold, { color: primaryColor }]}>:</Text>. The syntax is <Text style={[styles.bold, { color: primaryColor }]}>[start:end]</Text> (note the square brackets for slicing, even though it's a tuple), where <Text style={[styles.bold, { color: primaryColor }]}>start</Text> is the index to begin the slice (inclusive) and <Text style={[styles.bold, { color: primaryColor }]}>end</Text> is the index to end the slice (exclusive). The result of slicing a tuple is another tuple.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>numbers</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>0</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>2</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>3</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>4</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>5</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`numbers[1:4]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: (1, 2, 3)'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`numbers[:3]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: (0, 1, 2)'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`numbers[3:]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: (3, 4, 5)'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`numbers[:]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: (0, 1, 2, 3, 4, 5)'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`numbers[::2]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: (0, 2, 4)'}</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Tuple Packing and Unpacking"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                **Tuple Packing:** Creating a tuple by simply assigning multiple values to a single variable (parentheses are often omitted here).
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>my_tuple</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'hello'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>3.14</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Tuple packing'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_tuple`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: (1, 'hello', 3.14)"}</Text>
              </Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                **Tuple Unpacking:** Extracting the values from a tuple into individual variables. The number of variables on the left side must match the number of items in the tuple.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>my_tuple</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>10</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>20</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>30</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={{ color: primaryColor }}>a</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>b</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>c</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>my_tuple</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Tuple unpacking'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`a`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 10'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`b`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 20'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`c`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 30'}</Text>
              </Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                You can also use the asterisk <Text style={[styles.bold, { color: primaryColor }]}>*</Text> to pack or unpack remaining elements into a list:
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>numbers</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>2</Text><Text style={{ color: primaryColor }}>3</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>4</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>5</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={{ color: primaryColor }}>first</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>*</Text><Text style={{ color: primaryColor }}>rest</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>numbers</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`first`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 1'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`rest`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: [2, 3, 4, 5]'}</Text>
              </Text>
            </View>
          }
        />
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