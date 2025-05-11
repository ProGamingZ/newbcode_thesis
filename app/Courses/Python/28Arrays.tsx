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
        <ScreenTitle title="Python Arrays (The array Module)" />

        <DropdownBlock
          title="Introduction to the 'array' Module"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                To use arrays in Python, you first need to import the <Text style={[styles.bold, { color: primaryColor }]}>array</Text> module. Arrays created using this module are more memory-efficient than lists for storing large numbers of the same data type because the type of the elements is constrained.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.keyword, { color: primaryColor }]}>import</Text> <Text style={{ color: primaryColor }}>array</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Creating Arrays with Specific Type Codes"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                When creating an array using the <Text style={[styles.bold, { color: primaryColor }]}>array.array(typecode, initializer)</Text> constructor, you need to specify a <Text style={[styles.bold, { color: primaryColor }]}>type code</Text> as the first argument. This type code determines the data type of the elements that the array will hold. The second argument is an <Text style={[styles.bold, { color: primaryColor }]}>initializer</Text>, which is typically a list or other iterable containing the initial values for the array.
              </Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Here are some common type codes:
              </Text>
              <View style={{ marginLeft: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5 }}>
                  <Text style={{ color: primaryColor, marginRight: 5 }}>•</Text>
                  <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14 }]}>
                    <Text style={[styles.bold, { color: primaryColor }]}>'b'</Text> - signed char (1 byte)
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5 }}>
                  <Text style={{ color: primaryColor, marginRight: 5 }}>•</Text>
                  <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14 }]}>
                    <Text style={[styles.bold, { color: primaryColor }]}>'B'</Text> - unsigned char (1 byte)
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5 }}>
                  <Text style={{ color: primaryColor, marginRight: 5 }}>•</Text>
                  <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14 }]}>
                    <Text style={[styles.bold, { color: primaryColor }]}>'h'</Text> - signed short (2 bytes)
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5 }}>
                  <Text style={{ color: primaryColor, marginRight: 5 }}>•</Text>
                  <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14 }]}>
                    <Text style={[styles.bold, { color: primaryColor }]}>'H'</Text> - unsigned short (2 bytes)
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5 }}>
                  <Text style={{ color: primaryColor, marginRight: 5 }}>•</Text>
                  <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14 }]}>
                    <Text style={[styles.bold, { color: primaryColor }]}>'i'</Text> - signed int (usually 4 bytes)
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5 }}>
                  <Text style={{ color: primaryColor, marginRight: 5 }}>•</Text>
                  <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14 }]}>
                    <Text style={[styles.bold, { color: primaryColor }]}>'I'</Text> - unsigned int (usually 4 bytes)
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5 }}>
                  <Text style={{ color: primaryColor, marginRight: 5 }}>•</Text>
                  <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14 }]}>
                    <Text style={[styles.bold, { color: primaryColor }]}>'l'</Text> - signed long (usually 4 or 8 bytes)
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5 }}>
                  <Text style={{ color: primaryColor, marginRight: 5 }}>•</Text>
                  <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14 }]}>
                    <Text style={[styles.bold, { color: primaryColor }]}>'L'</Text> - unsigned long (usually 4 or 8 bytes)
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5 }}>
                  <Text style={{ color: primaryColor, marginRight: 5 }}>•</Text>
                  <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14 }]}>
                    <Text style={[styles.bold, { color: primaryColor }]}>'f'</Text> - float (4 bytes)
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5 }}>
                  <Text style={{ color: primaryColor, marginRight: 5 }}>•</Text>
                  <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14 }]}>
                    <Text style={[styles.bold, { color: primaryColor }]}>'d'</Text> - double (8 bytes)
                  </Text>
                </View>
              </View>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>import</Text> <Text style={{ color: primaryColor }}>array</Text>{'\n'}
                <Text style={{ color: primaryColor }}># Create an array of integers</Text>{'\n'}
                <Text style={{ color: primaryColor }}>int_array</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>array</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>array</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'i'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>2</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>3</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>4</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>5</Text><Text style={{ color: primaryColor }}>]</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`int_array`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: array('i', [1, 2, 3, 4, 5])"}</Text>{'\n'}
                <Text style={{ color: primaryColor }}># Create an array of doubles</Text>{'\n'}
                <Text style={{ color: primaryColor }}>float_array</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>array</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>array</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'d'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>1.0</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>2.5</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>3.7</Text><Text style={{ color: primaryColor }}>]</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`float_array`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: array('d', [1.0, 2.5, 3.7])"}</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Accessing Array Elements"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                You can access individual elements in an array using their index, just like with lists. Indexing starts from 0 for the first element. Negative indexing is also supported to access elements from the end of the array.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>import</Text> <Text style={{ color: primaryColor }}>array</Text>{'\n'}
                <Text style={{ color: primaryColor }}>my_array</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>array</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>array</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'i'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>10</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>20</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>30</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>40</Text><Text style={{ color: primaryColor }}>]</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_array[0]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 10'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_array[2]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 30'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_array[-1]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 40'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_array[-3]`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 20'}</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Basic Array Methods"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>array</Text> object provides several methods for modifying its contents. Here are some basic ones:
              </Text>
              <View style={{ marginLeft: 15 }}>
                <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'append(x)'</Text>
                <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14 }]}>
                  Appends a new element <Text style={[styles.bold, { color: primaryColor }]}>x</Text> to the end of the array. The type of <Text style={[styles.bold, { color: primaryColor }]}>x</Text> must match the array's type code.
                </Text>
                <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                  <Text style={{ color: primaryColor }}>import</Text> <Text style={{ color: primaryColor }}>array</Text>{'\n'}
                  <Text style={{ color: primaryColor }}>my_array</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>array</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>array</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'i'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>2</Text><Text style={{ color: primaryColor }}>]</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                  <Text style={{ color: primaryColor }}>my_array</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>append</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>3</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                  <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_array`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: array('i', [1, 2, 3])"}</Text>
                </Text>
              </View>

              <View style={{ marginLeft: 15, marginTop: 10 }}>
                <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'insert(i, x)'</Text>
                <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14 }]}>
                  Inserts a new element <Text style={[styles.bold, { color: primaryColor }]}>x</Text> into the array at a given position <Text style={[styles.bold, { color: primaryColor }]}>i</Text>. The type of <Text style={[styles.bold, { color: primaryColor }]}>x</Text> must match the array's type code.
                </Text>
                <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                  <Text style={{ color: primaryColor }}>import</Text> <Text style={{ color: primaryColor }}>array</Text>{'\n'}
                  <Text style={{ color: primaryColor }}>my_array</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>array</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>array</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'i'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>3</Text><Text style={{ color: primaryColor }}>]</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                  <Text style={{ color: primaryColor }}>my_array</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>insert</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>2</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                  <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_array`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: array('i', [1, 2, 3])"}</Text>
                </Text>
              </View>

              <View style={{ marginLeft: 15, marginTop: 10 }}>
                <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'pop(i)'</Text>
                <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14 }]}>
                  Removes and returns the element at the index <Text style={[styles.bold, { color: primaryColor }]}>i</Text>. If no index is specified, it removes and returns the last element.
                </Text>
                <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                  <Text style={{ color: primaryColor }}>import</Text> <Text style={{ color: primaryColor }}>array</Text>{'\n'}
                  <Text style={{ color: primaryColor }}>my_array</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>array</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>array</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'i'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>10</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>20</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>30</Text><Text style={{ color: primaryColor }}>]</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                  <Text style={{ color: primaryColor }}>popped_element</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>my_array</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>pop</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                  <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`popped_element`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 20'}</Text>{'\n'}
                  <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_array`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: array('i', [10, 30])"}</Text>{'\n'}
                  <Text style={{ color: primaryColor }}>last_element</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>my_array</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>pop</Text><Text style={{ color: primaryColor }}>()</Text>{'\n'}
                  <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`last_element`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 30'}</Text>{'\n'}
                  <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_array`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: array('i', [10])"}</Text>
                </Text>
              </View>

              <View style={{ marginLeft: 15, marginTop: 10 }}>
                <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>'remove(x)'</Text>
                <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14 }]}>
                  Removes the first occurrence of the element with the value <Text style={[styles.bold, { color: primaryColor }]}>x</Text> from the array. If the element is not found, it raises a <Text style={[styles.bold, { color: primaryColor }]}>ValueError</Text>.
                </Text>
                <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                  <Text style={{ color: primaryColor }}>import</Text> <Text style={{ color: primaryColor }}>array</Text>{'\n'}
                  <Text style={{ color: primaryColor }}>my_array</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>array</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>array</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'i'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>2</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>2</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>3</Text><Text style={{ color: primaryColor }}>]</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                  <Text style={{ color: primaryColor }}>my_array</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>remove</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>2</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                  <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_array`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: array('i', [1, 2, 3])"}</Text>{'\n'}
                  {/* <Text style={{ color: primaryColor }}>my_array.remove(4)</Text> {/* This would raise a ValueError */}
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