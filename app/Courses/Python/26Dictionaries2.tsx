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

export default function PythonDictionariesPart1Page() {
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
        <ScreenTitle title="Python Dictionaries - Part 2 (Methods)" />

        <DropdownBlock
          title="'keys()', 'values()', 'items()'"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
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
          }
        />

        <DropdownBlock
          title="'get()'"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
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
          }
        />

        <DropdownBlock
          title="'update()'"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
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
          }
        />

        <DropdownBlock
          title="'pop()' and 'popitem()'"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                These methods are used to remove items from a dictionary.
              </Text>
              <View style={{ marginLeft: 15 }}>
                <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'pop()''</Text>
                <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14 }]}>
                  The <Text style={[styles.bold, { color: primaryColor }]}>pop(key)</Text> method removes the item with the specified <Text style={[styles.bold, { color: primaryColor }]}>key</Text> and returns its value. If the key is not found, it raises a <Text style={[styles.bold, { color: primaryColor }]}>KeyError</Text> (unless a default value is provided as the second argument).
                </Text>
                <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                  <Text style={{ color: primaryColor }}>my_dict</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'name'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'Alice'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'age'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>30</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                  <Text style={{ color: primaryColor }}>removed_age</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>pop</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'age'</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                  <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`removed_age`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 30'}</Text>{'\n'}
                  <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_dict`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: {'name': 'Alice'}"}</Text>{'\n'}
                  <Text style={{ color: primaryColor }}>{/* Trying to pop a non-existent key raises KeyError */}</Text>{/* <Text style={{ color: primaryColor }}>my_dict.pop('city')</Text> */}
                  <Text style={{ color: primaryColor }}>city</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>pop</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'city'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'Not Found'</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                  <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`city`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: Not Found'}</Text>
                </Text>
              </View>
              <View style={{ marginLeft: 15, marginTop: 10 }}>
                <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'popitem()''</Text>
                <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14 }]}>
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
          }
        />

        <DropdownBlock
          title="'clear()' and 'copy()'"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                These methods are used for clearing and copying dictionaries.
              </Text>
              <View style={{ marginLeft: 15 }}>
                <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'clear()''</Text>
                <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14 }]}>
                  The <Text style={[styles.bold, { color: primaryColor }]}>clear()</Text> method removes all items from the dictionary, making it an empty dictionary.
                </Text>
                <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                  <Text style={{ color: primaryColor }}>my_dict</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{'}</Text><Text style={{ color: secondaryColor }}>'name'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'Alice'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'age'</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>30</Text><Text style={{ color: primaryColor }}>{'}'}</Text>{'\n'}
                  <Text style={{ color: primaryColor }}>my_dict</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>clear</Text><Text style={{ color: primaryColor }}>()</Text>{'\n'}
                  <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_dict`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: {}'}</Text>
                </Text>
              </View>
              <View style={{ marginLeft: 15, marginTop: 10 }}>
                <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'copy()''</Text>
                <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14 }]}>
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