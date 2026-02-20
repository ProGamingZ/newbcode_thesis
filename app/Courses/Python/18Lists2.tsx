import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

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

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Modifying Lists</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Lists are mutable, meaning you can change their contents after they are created.
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Changing Item Value</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            You can change the value of a specific item in a list by referring to its index.
          </Text>
          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.keyword, { color: primaryColor }]}>fruits = </Text> 
            <Text style={{ color: secondaryColor}}>{'["apple","banana","cherry",]'}</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>{'fruits[1] = '}</Text>
            <Text style={{ color: secondaryColor }}>'grape'</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text>
            <Text style={{ color: secondaryColor }}>{'(fruits)'}</Text>
            <Text style={styles.comment}># Output: ['apple', 'grape', 'cherry']</Text>
            {'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>'apple'</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>'banana'</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>'cherry'</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>1</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>'grape'</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: ['apple', 'grape', 'cherry']</Text>

          </Text>
          

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Adding Items to a List</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Python provides several methods to add items to a list:
          </Text>
          <Text style={[styles.listBullet, { color: primaryColor }]}>• <Text style={[styles.keyword, { color: primaryColor }]}>append()</Text>: Adds an item to the end of the list.</Text>
          <Text style={[styles.listBullet, { color: primaryColor }]}>• <Text style={[styles.keyword, { color: primaryColor }]}>insert()</Text>: Adds an item at a specified index.</Text>
          <Text style={[styles.listBullet, { color: primaryColor }]}>• <Text style={[styles.keyword, { color: primaryColor }]}>extend()</Text>: Adds all the elements of an iterable (like another list, tuple, or string) to the end of the list.</Text>

          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.comment, { color: 'gray' }]}># append()</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>'apple'</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>'banana'</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>append</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}'orange')</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: ['apple', 'banana', 'orange']</Text>{'\n'}
            <Text style={[styles.comment, { color: 'gray' }]}># insert()</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>'apple'</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>'banana'</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>insert</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}1, 'mango')</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: ['apple', 'mango', 'banana']</Text>{'\n'}
            <Text style={[styles.comment, { color: 'gray' }]}># extend() with another list</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>more_fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>'cherry'</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>'kiwi'</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>'apple'</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>'banana'</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>extend</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>more_fruits</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: ['apple', 'banana', 'cherry', 'kiwi']</Text>{'\n'}
            <Text style={[styles.comment, { color: 'gray' }]}># extend() with a string (iterable)</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>my_list</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>1</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>my_list</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>extend</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}"abc")</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>my_list</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: [1, 2, 'a', 'b', 'c']</Text>
          </Text>

          <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Removing Items from a List</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            You can remove items from a list using these methods:
          </Text>
          <Text style={[styles.listBullet, { color: primaryColor }]}>• <Text style={[styles.keyword, { color: primaryColor }]}>remove()</Text>: Removes the first occurrence of the specified value.</Text>
          <Text style={[styles.listBullet, { color: primaryColor }]}>• <Text style={[styles.keyword, { color: primaryColor }]}>pop()</Text>: Removes the item at the specified index (or the last item if no index is specified) and returns it.</Text>
          <Text style={[styles.listBullet, { color: primaryColor }]}>• <Text style={[styles.keyword, { color: primaryColor }]}>del</Text> keyword: Can be used to delete an item at a specific index or the entire list.</Text>
          <Text style={[styles.listBullet, { color: primaryColor }]}>• <Text style={[styles.keyword, { color: primaryColor }]}>clear()</Text>: Removes all items from the list.</Text>

          <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
            <Text style={[styles.comment, { color: 'gray' }]}># remove()</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>'apple'</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>'banana'</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>'cherry'</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>remove</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}'banana')</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: ['apple', 'cherry']</Text>{'\n'}
            <Text style={[styles.comment, { color: 'gray' }]}># pop()</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>'apple'</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>'banana'</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>'cherry'</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>popped_fruit</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>pop</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}1)</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: ['apple', 'cherry']</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>popped_fruit</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: 'banana'</Text>{'\n'}
            <Text style={[styles.comment, { color: 'gray' }]}># del keyword (remove by index)</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>'apple'</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>'banana'</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>'cherry'</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>del</Text> <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>0</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: ['banana', 'cherry']</Text>{'\n'}
            <Text style={[styles.comment, { color: 'gray' }]}># del keyword (remove a slice)</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>numbers</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>1</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>4</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>del</Text> <Text style={[styles.variable, { color: primaryColor }]}>numbers</Text><Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>1</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text><Text style={[styles.value, { color: secondaryColor }]}>4</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>numbers</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: [1, 5]</Text>{'\n'}
            <Text style={[styles.comment, { color: 'gray' }]}># del keyword (delete the entire list)</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>my_list</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>'a'</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>'b'</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>'c'</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>del</Text> <Text style={[styles.variable, { color: primaryColor }]}>my_list</Text>{'\n'}
            <Text style={[styles.comment, { color: 'gray' }]}># Trying to print my_list now will result in an error</Text>{'\n'}
            <Text style={[styles.comment, { color: 'gray' }]}># clear()</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>colors</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.operator, { color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>'red'</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>'green'</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>'blue'</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text>{'\n'}
            <Text style={[styles.variable, { color: primaryColor }]}>colors</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>clear</Text><Text style={[styles.operator, { color: primaryColor }]}>()</Text>{'\n'}
            <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>colors</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: []</Text>
          </Text>
        </View>

        {/* <Link href="/PythonTuplesPage" asChild>
          <NextButton title="Next: Python Tuples" />
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
    listBullet: {
        marginLeft: 20,
        marginBottom: 5,
      },
    comment: {
      color: 'gray',
      fontStyle: 'italic',
    },
  });