import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

export default function PythonDictionariesPart1Page() {
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
          <ScreenTitle title="Python Dictionaries - Part 2 (Methods)" />
  
          <View style={[styles.section, { backgroundColor: accentColor }]}>
            <Text style={[styles.sectionTitle, { color: primaryColor }]}>Python Dictionary Methods</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Python dictionaries provide several built-in methods to efficiently manipulate and access their data. Here, we'll explore some essential methods for viewing keys, values, items, accessing elements safely, updating, removing, and copying dictionaries.
            </Text>
  
            <View>
              <Text style={[styles.subSectionTitle, { color: primaryColor }]}>'keys()', 'values()', 'items()'</Text>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                These methods provide view objects that display a dynamic list of the dictionary's keys, values, and key-value pairs (as tuples), respectively. Changes to the dictionary will be reflected in these view objects.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>my_dict</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'name'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'Alice'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'age'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>30</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'city'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'New York'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>keys</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>keys</Text><Text style={{ color: primaryColor }}>()</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`keys`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: dict_keys(['name', 'age', 'city'])"}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>values</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>values</Text><Text style={{ color: primaryColor }}>()</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`values`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: dict_values(['Alice', 30, 'New York'])"}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>items</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>items</Text><Text style={{ color: primaryColor }}>()</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`items`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: dict_items([('name', 'Alice'), ('age', 30), ('city', 'New York')])"}</Text>{'\n'}
                <Text style={{ color: primaryColor }}># Demonstrating dynamic view</Text>{'\n'}
                <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>'job'</Text><Text style={{ color: primaryColor }}>]</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>'Engineer'</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`keys`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: dict_keys(['name', 'age', 'city', 'job'])"}</Text>
              </Text>
            </View>
  
            <View>
              <Text style={[styles.subSectionTitle, { color: primaryColor }]}>'get()'</Text>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>get()</Text> method provides a safe way to access the value of a specified key. If the key exists, it returns the corresponding value. If the key is not found, it returns <Text style={[styles.bold, { color: primaryColor }]}>None</Text> (by default) instead of raising a <Text style={[styles.bold, { color: primaryColor }]}>KeyError</Text>. You can also provide an optional second argument to specify a default value to return if the key is not found.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>my_dict</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'name'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'Alice'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'age'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>30</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>name</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>get</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'name'</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`name`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: Alice'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>city</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>get</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'city'</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`city`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: None'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>country</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>get</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'country'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'USA'</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`country`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: USA'}</Text>
              </Text>
            </View>
  
            <View>
              <Text style={[styles.subSectionTitle, { color: primaryColor }]}>'update()'</Text>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>update()</Text> method allows you to merge another dictionary or an iterable of key-value pairs into the current dictionary. If a key exists in both, the value from the dictionary being updated will overwrite the existing value.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>my_dict</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'name'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'Alice'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'age'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>30</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>other_dict</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'city'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'New York'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'job'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'Engineer'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>update</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: primaryColor }}>other_dict</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_dict`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'name': 'Alice', 'age': 30, 'city': 'New York', 'job': 'Engineer'}"}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>another_update</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'age'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>31</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'country'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'USA'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>update</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: primaryColor }}>another_update</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_dict`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'name': 'Alice', 'age': 31, 'city': 'New York', 'job': 'Engineer', 'country': 'USA'}"}</Text>
              </Text>
            </View>
  
            <View>
              <Text style={[styles.subSectionTitle, { color: primaryColor }]}>'pop()', 'popitem()'</Text>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                These methods are used to remove items from a dictionary.
              </Text>
              <View style={{ marginLeft: 15 }}>
                <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'pop()'</Text>
                <Text style={[styles.sectionContent, { color: primaryColor, fontSize: 14 }]}>
                  The <Text style={[styles.bold, { color: primaryColor }]}>pop(key)</Text> method removes the item with the specified <Text style={[styles.bold, { color: primaryColor }]}>key</Text> and returns its value. If the key is not found, it raises a <Text style={[styles.bold, { color: primaryColor }]}>KeyError</Text> (unless a default value is provided as the second argument).
                </Text>
                <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                  <Text style={{ color: primaryColor }}>my_dict</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'name'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'Alice'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'age'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>30</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                  <Text style={{ color: primaryColor }}>removed_age</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>pop</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'age'</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                  <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`removed_age`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 30'}</Text>{'\n'}
                  <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_dict`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'name': 'Alice'}"}</Text>{'\n'}
                  <Text style={{ color: primaryColor }}>{/* Trying to pop a non-existent key raises KeyError */}</Text>
                  {/* <Text style={{ color: primaryColor }}>my_dict.pop('city')</Text> */}
                  <Text style={{ color: primaryColor }}>city</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>pop</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'city'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'Not Found'</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                  <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`city`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: Not Found'}</Text>
                </Text>
              </View>
              <View style={{ marginLeft: 15, marginTop: 10 }}>
                <Text style={[styles.subSectionTitle, { color: primaryColor,fontSize: 16 }]}>'popitem()'</Text>
              <Text style={[styles.sectionContent, { color: primaryColor, fontSize: 14 }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>popitem()</Text> method removes and returns the last inserted key-value pair from the dictionary as a tuple. In Python versions before 3.7, the order of items in a dictionary was not guaranteed, so <Text style={[styles.bold, { color: primaryColor }]}>popitem()</Text> would remove an arbitrary item.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>my_dict</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'name'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'Alice'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'age'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>30</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>removed_item</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>popitem</Text><Text style={{ color: primaryColor }}>()</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`removed_item`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: ('age', 30)"}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_dict`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'name': 'Alice'}"}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>empty_dict</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{}</Text>{'\n'}
                {/* <Text style={{ color: primaryColor }}>empty_dict.popitem()</Text> {/* This would raise a KeyError */}
              </Text>
            </View>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>'clear()', 'copy()'</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              These methods are used for clearing and copying dictionaries.
            </Text>
            <View style={{ marginLeft: 15 }}>
              <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'clear()'</Text>
              <Text style={[styles.sectionContent, { color: primaryColor, fontSize: 14 }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>clear()</Text> method removes all items from the dictionary, making it an empty dictionary.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>my_dict</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'name'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'Alice'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'age'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>30</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>clear</Text><Text style={{ color: primaryColor }}>()</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_dict`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: {}'}</Text>
              </Text>
            </View>
            <View style={{ marginLeft: 15, marginTop: 10 }}>
              <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'copy()'</Text>
              <Text style={[styles.sectionContent, { color: primaryColor, fontSize: 14 }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>copy()</Text> method returns a shallow copy of the dictionary. Like with lists, a shallow copy means that a new dictionary object is created, but if the original dictionary contains mutable objects (like lists), the copy will still refer to the same inner objects. For a deep copy, you would use <Text style={[styles.bold, { color: primaryColor }]}>copy.deepcopy()</Text> from the <Text style={[styles.bold, { color: primaryColor }]}>copy</Text> module.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>original_dict</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'name'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'Alice'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'details'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>30</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'New York'</Text><Text style={{ color: primaryColor }}>]</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>copied_dict</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>original_dict</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>copy</Text><Text style={{ color: primaryColor }}>()</Text>{'\n'}
                <Text style={{ color: primaryColor }}>original_dict</Text><Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>'name'</Text><Text style={{ color: primaryColor }}>]</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>'Bob'</Text>{'\n'}
                <Text style={{ color: primaryColor }}>original_dict</Text><Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>'details'</Text><Text style={{ color: primaryColor }}>]</Text><Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>0</Text><Text style={{ color: primaryColor }}>]</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>31</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`original_dict`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'name': 'Bob', 'details': [31, 'New York']}"}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`copied_dict`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'name': 'Alice', 'details': [31, 'New York']}"}</Text>
              </Text>
            </View>
          </View>
        </View>

        {/* <Link href="/PythonComprehensionsPage" asChild>
          <NextButton title="Next: Python Comprehensions" />
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