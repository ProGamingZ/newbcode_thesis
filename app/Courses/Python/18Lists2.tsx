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

export default function PythonListsPart2Page() {
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
        <ScreenTitle title="Python Lists - Part 2" />

        <DropdownBlock
          title="Modifying Lists"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Lists are mutable, meaning you can change their contents after they are created.
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Changing Item Value"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                You can change the value of a specific item in a list by referring to its index.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[{ color: secondaryColor }]}>'apple'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'banana'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'cherry'</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[{ color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>1</Text><Text style={[{ color: primaryColor }]}>]</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: secondaryColor }]}>'grape'</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`fruits`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: ['apple', 'grape', 'cherry']</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Adding Items to a List"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Python provides several methods to add items to a list:
              </Text>
              <Text style={[{ color: primaryColor }]}>• <Text style={[styles.keyword, { color: primaryColor }]}>append()</Text>: Adds an item to the end of the list.</Text>
              <Text style={[{ color: primaryColor }]}>• <Text style={[styles.keyword, { color: primaryColor }]}>insert()</Text>: Adds an item at a specified index.</Text>
              <Text style={[{ color: primaryColor }]}>• <Text style={[styles.keyword, { color: primaryColor }]}>extend()</Text>: Adds all the elements of an iterable (like another list, tuple, or string) to the end of the list.</Text>

              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.comment, { color: secondaryColor }]}># append()</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[{ color: secondaryColor }]}>'apple'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'banana'</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>append</Text><Text style={[{ color: primaryColor }]}>({<Text style={[{ color: secondaryColor }]}>'orange'</Text>})</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`fruits`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: ['apple', 'banana', 'orange']</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}># insert()</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[{ color: secondaryColor }]}>'apple'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'banana'</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>insert</Text><Text style={[{ color: primaryColor }]}>{'({'}<Text style={[styles.value, { color: secondaryColor }]}>1</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>{'mango'}</Text>{'})'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`fruits`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: ['apple', 'mango', 'banana']</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}># extend() with another list</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>more_fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[{ color: secondaryColor }]}>'cherry'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'kiwi'</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[{ color: secondaryColor }]}>'apple'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'banana'</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>extend</Text><Text style={[{ color: primaryColor }]}>({<Text style={[styles.variable, { color: primaryColor }]}>more_fruits</Text>})</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`fruits`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: ['apple', 'banana', 'cherry', 'kiwi']</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}># extend() with a string (iterable)</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>my_list</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>1</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>my_list</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>extend</Text><Text style={[{ color: primaryColor }]}>({<Text style={[{ color: secondaryColor }]}>"abc"</Text>})</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`my_list`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: [1, 2, 'a', 'b', 'c']</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Removing Items from a List"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                You can remove items from a list using these methods:
              </Text>
              <Text style={[{ color: primaryColor }]}>• <Text style={[styles.keyword, { color: primaryColor }]}>remove()</Text>: Removes the first occurrence of the specified value.</Text>
              <Text style={[{ color: primaryColor }]}>• <Text style={[styles.keyword, { color: primaryColor }]}>pop()</Text>: Removes the item at the specified index (or the last item if no index is specified) and returns it.</Text>
              <Text style={[{ color: primaryColor }]}>• <Text style={[styles.keyword, { color: primaryColor }]}>del</Text> keyword: Can be used to delete an item at a specific index or the entire list.</Text>
              <Text style={[{ color: primaryColor }]}>• <Text style={[styles.keyword, { color: primaryColor }]}>clear()</Text>: Removes all items from the list.</Text>

              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.comment, { color: secondaryColor }]}># remove()</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[{ color: secondaryColor }]}>'apple'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'banana'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'cherry'</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>remove</Text><Text style={[{ color: primaryColor }]}>({<Text style={[{ color: secondaryColor }]}>'banana'</Text>})</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`fruits`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: ['apple', 'cherry']</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}># pop()</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[{ color: secondaryColor }]}>'apple'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'banana'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'cherry'</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>popped_fruit</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>pop</Text><Text style={[{ color: primaryColor }]}>({<Text style={[styles.value, { color: secondaryColor }]}>1</Text>})</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`fruits`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: ['apple', 'cherry']</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`popped_fruit`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 'banana'</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}># del keyword (remove by index)</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[{ color: secondaryColor }]}>'apple'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'banana'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'cherry'</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>del</Text> <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[{ color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>0</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`fruits`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: ['banana', 'cherry']</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}># del keyword (remove a slice)</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>numbers</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>1</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>4</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>del</Text> <Text style={[styles.variable, { color: primaryColor }]}>numbers</Text><Text style={[{ color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>1</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text><Text style={[styles.value, { color: secondaryColor }]}>4</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`numbers`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: [1, 5]</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}># del keyword (delete the entire list)</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>my_list</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[{ color: secondaryColor }]}>'a'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'b'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'c'</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>del</Text> <Text style={[styles.variable, { color: primaryColor }]}>my_list</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}># Trying to print my_list now will result in an error</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}># clear()</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>colors</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[{ color: secondaryColor }]}>'red'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'green'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'blue'</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>colors</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>clear</Text><Text style={[{ color: primaryColor }]}>()</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`colors`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: []</Text>
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