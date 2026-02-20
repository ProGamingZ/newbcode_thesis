import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

export default function PythonTuplesPage() {
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
        <ScreenTitle title="Python Sets (Basics and Operations)" />

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Python Sets</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Sets are unordered collections of <Text style={[styles.bold, { color: primaryColor }]}>unique</Text> elements. This means that duplicate values are automatically removed. Sets are also mutable (changeable).
          </Text>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Creating Sets</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Sets are created by placing items inside curly braces <Text style={[styles.bold, { color: primaryColor }]}>{}</Text>, separated by commas. You can also use the <Text style={[styles.bold, { color: primaryColor }]}>set()</Text> constructor to create a set from other iterable objects.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}># Creating a set with curly braces</Text>{'\n'}
              <Text style={{ color: primaryColor }}>my_set</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_set`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'apple', 'banana', 'cherry'} (order may vary)"}</Text>{'\n'}
              <Text style={{ color: primaryColor }}># Creating a set from a list using the set() constructor</Text>{'\n'}
              <Text style={{ color: primaryColor }}>my_list</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
              <Text style={{ color: primaryColor }}>new_set</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>set</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: primaryColor }}>my_list</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`new_set`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'apple', 'banana', 'cherry'} (duplicates removed)"}</Text>{'\n'}
              <Text style={{ color: primaryColor }}># Creating an empty set (cannot use {} as it creates an empty dictionary)</Text>{'\n'}
              <Text style={{ color: primaryColor }}>empty_set</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>set</Text><Text style={{ color: primaryColor }}>()</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`empty_set`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: set()'}</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Accessing Items (Looping)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Since sets are unordered, you cannot access items by index. However, you can iterate through the items in a set using a <Text style={[styles.bold, { color: primaryColor }]}>for</Text> loop. The order of items during iteration is not guaranteed.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>my_set</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={{ color: primaryColor }}>fruit</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={{ color: primaryColor }}>my_set</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
              <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`fruit`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: apple, banana, cherry (in no particular order)'}</Text>
            </Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              You can also use the <Text style={[styles.bold, { color: primaryColor }]}>in</Text> keyword to check if a specific item is present in a set.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>my_set</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`'banana' in my_set`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: True'}</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`'grape' in my_set`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: False'}</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Adding Items</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              You can add new items to a set using the <Text style={[styles.bold, { color: primaryColor }]}>add()</Text> and <Text style={[styles.bold, { color: primaryColor }]}>update()</Text> methods.
            </Text>
            <View style={{ marginLeft: 15 }}>
              <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'add()'</Text>
              <Text style={[styles.sectionContent, { color: primaryColor, fontSize: 14 }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>add()</Text> method adds a single element to the set. If the element is already present, the set remains unchanged.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>my_set</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>my_set</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>add</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_set`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'apple', 'banana', 'cherry'} (order may vary)"}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>my_set</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>add</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>)</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Adding a duplicate has no effect'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_set`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'apple', 'banana', 'cherry'} (still)"}</Text>
              </Text>
            </View>
            <View style={{ marginLeft: 15, marginTop: 10 }}>
              <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'update()'</Text>
              <Text style={[styles.sectionContent, { color: primaryColor, fontSize: 14 }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>update()</Text> method allows you to add multiple items to a set from another iterable (like a list, tuple, or another set). Duplicate items from the iterable are ignored.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>my_set</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>more_fruits</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'grape'</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
                <Text style={{ color: primaryColor }}>my_set</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>update</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: primaryColor }}>more_fruits</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_set`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'apple', 'banana', 'cherry', 'grape'} (order may vary)"}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>another_set</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'kiwi'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>my_set</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>update</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: primaryColor }}>another_set</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_set`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'apple', 'banana', 'cherry', 'grape', 'kiwi'} (duplicate 'banana' ignored)"}</Text>
              </Text>
            </View>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Removing Items</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              You can remove items from a set using the <Text style={[styles.bold, { color: primaryColor }]}>remove()</Text>, <Text style={[styles.bold, { color: primaryColor }]}>discard()</Text>, and <Text style={[styles.bold, { color: primaryColor }]}>pop()</Text> methods.
            </Text>
            <View style={{ marginLeft: 15 }}>
              <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'remove()'</Text>
              <Text style={[styles.sectionContent, { color: primaryColor, fontSize: 14 }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>remove()</Text> method removes a specified element from the set. If the element is not present in the set, it raises a <Text style={[styles.bold, { color: primaryColor }]}>KeyError</Text>.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>my_set</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>my_set</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>remove</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_set`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'apple', 'cherry'} (order may vary)"}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>{/* Try to remove an element that doesn't exist (will raise KeyError) */}</Text>
                {/* <Text style={{ color: primaryColor }}>my_set.remove('grape')</Text> */}
              </Text>
            </View>
            <View style={{ marginLeft: 15, marginTop: 10 }}>
              <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'discard()'</Text>
              <Text style={[styles.sectionContent, { color: primaryColor, fontSize: 14 }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>discard()</Text> method also removes a specified element from the set. However, if the element is not present, it does <Text style={[styles.bold, { color: primaryColor }]}>not</Text> raise an error.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>my_set</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>my_set</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>discard</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_set`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'apple', 'cherry'} (order may vary)"}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>my_set</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>discard</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'grape'</Text><Text style={{ color: primaryColor }}>)</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# No error raised'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_set`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'apple', 'cherry'} (still)"}</Text>
              </Text>
            </View>
            <View style={{ marginLeft: 15, marginTop: 10 }}>
              <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'pop()'</Text>
              <Text style={[styles.sectionContent, { color: primaryColor, fontSize: 14 }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>pop()</Text> method removes and returns an arbitrary element from the set. Since sets are unordered, you cannot predict which element will be removed. If the set is empty, calling <Text style={[styles.bold, { color: primaryColor }]}>pop()</Text> will raise a <Text style={[styles.bold, { color: primaryColor }]}>KeyError</Text>.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>my_set</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>removed_item</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>my_set</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>pop</Text><Text style={{ color: primaryColor }}>()</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`removed_item`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: (e.g., 'apple', 'banana', or 'cherry')"}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_set`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: (e.g., {'banana', 'cherry'})"}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>empty_set</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>set</Text><Text style={{ color: primaryColor }}>()</Text>{'\n'}
                {/* <Text style={{ color: primaryColor }}>empty_set.pop()</Text> {/* This would raise a KeyError */}
              </Text>
            </View>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>'clear()' and 'del'</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Similar to lists, you can use <Text style={[styles.bold, { color: primaryColor }]}>clear()</Text> to remove all elements from a set, and <Text style={[styles.bold, { color: primaryColor }]}>del</Text> to delete the entire set.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>my_set</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
              <Text style={{ color: primaryColor }}>my_set</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>clear</Text><Text style={{ color: primaryColor }}>()</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_set`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: set()'}</Text>{'\n'}
              <Text style={{ color: primaryColor }}>another_set</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'grape'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>del</Text> <Text style={{ color: primaryColor }}>another_set</Text>{'\n'}
              {/* <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`another_set`})</Text> {/* This would raise a NameError */}
            </Text>
          </View>
        </View>

        {/* <Link href="/PythonSetOperationsPage" asChild>
          <NextButton title="Next: Python Set Operations" />
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