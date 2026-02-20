import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

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
        <ScreenTitle title="Python Lists - Part 4 (Methods)" />

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Python Lists - Part 4 (Methods)</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Python lists come with several built-in methods that allow you to perform common operations on them. Here, we'll explore some essential methods for sorting, reversing, copying, counting, and finding the index of elements.
          </Text>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>'sort()'</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              The <Text style={[styles.bold, { color: primaryColor }]}>sort()</Text> method sorts the elements of the list in-place (it modifies the original list). By default, it sorts in ascending order. You can use the <Text style={[styles.bold, { color: primaryColor }]}>reverse</Text> parameter to sort in descending order.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>numbers</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>3</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>4</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>5</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>9</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
              <Text style={{ color: primaryColor }}>numbers</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>sort</Text><Text style={{ color: primaryColor }}>()</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`numbers`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: [1, 1, 3, 4, 5, 9]'}</Text>{'\n'}
              <Text style={{ color: primaryColor }}>fruits</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
              <Text style={{ color: primaryColor }}>fruits</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>sort</Text><Text style={{ color: primaryColor }}>(reverse</Text><Text style={{ color: primaryColor }}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>True</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`fruits`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: ['cherry', 'banana', 'apple']"}</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>'reverse()'</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              The <Text style={[styles.bold, { color: primaryColor }]}>reverse()</Text> method reverses the elements of the list in-place.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>my_list</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>'one'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'two'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'three'</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
              <Text style={{ color: primaryColor }}>my_list</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>reverse</Text><Text style={{ color: primaryColor }}>()</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`my_list`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{"# Output: ['three', 'two', 'one']"}</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>'copy()'</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              The <Text style={[styles.bold, { color: primaryColor }]}>copy()</Text> method returns a shallow copy of the list. This means that a new list object is created, but if the original list contains mutable objects (like other lists), the copy will still refer to the same inner objects. To create a deep copy (where all nested objects are also copied), you can use the <Text style={[styles.bold, { color: primaryColor }]}>copy.deepcopy()</Text> function from the <Text style={[styles.bold, { color: primaryColor }]}>copy</Text> module.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>original_list</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>2</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>[</Text><Text style={{ color: secondaryColor }}>3</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>4</Text><Text style={{ color: primaryColor }}>]</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
              <Text style={{ color: primaryColor }}>copied_list</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>original_list</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>copy</Text><Text style={{ color: primaryColor }}>()</Text>{'\n'}
              <Text style={{ color: primaryColor }}>original_list</Text><Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>0</Text><Text style={{ color: primaryColor }}>]</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>100</Text>{'\n'}
              <Text style={{ color: primaryColor }}>original_list</Text><Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>2</Text><Text style={{ color: primaryColor }}>]</Text><Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>0</Text><Text style={{ color: primaryColor }}>]</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>300</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`original_list`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: [100, 2, [300, 4]]'}</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`copied_list`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: [1, 2, [300, 4]]'}</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>'count()'</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              The <Text style={[styles.bold, { color: primaryColor }]}>count()</Text> method returns the number of times a specified value appears in the list.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>numbers</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>3</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>7</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>9</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
              <Text style={{ color: primaryColor }}>count_of_1</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>numbers</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>count</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`count_of_1`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 3'}</Text>{'\n'}
              <Text style={{ color: primaryColor }}>fruits</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
              <Text style={{ color: primaryColor }}>count_of_banana</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>fruits</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>count</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`count_of_banana`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 2'}</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>'index()'</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              The <Text style={[styles.bold, { color: primaryColor }]}>index()</Text> method returns the index of the first occurrence of a specified value in the list. If the value is not found, it raises a <Text style={[styles.bold, { color: primaryColor }]}>ValueError</Text>. You can also specify optional <Text style={[styles.bold, { color: primaryColor }]}>start</Text> and <Text style={[styles.bold, { color: primaryColor }]}>end</Text> parameters to search within a specific range of the list.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>fruits</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
              <Text style={{ color: primaryColor }}>index_of_banana</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>fruits</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>index</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`index_of_banana`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 1'}</Text>{'\n'}
              <Text style={{ color: primaryColor }}>numbers</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>[</Text><Text style={{ color: secondaryColor }}>10</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>20</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>10</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>30</Text><Text style={{ color: primaryColor }}>]</Text>{'\n'}
              <Text style={{ color: primaryColor }}>index_of_10</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>numbers</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>index</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>10</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`index_of_10`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 0'}</Text>{'\n'}
              <Text style={{ color: primaryColor }}>index_of_10_from_1</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>numbers</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>index</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>10</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`index_of_10_from_1`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 2'}</Text>
              </Text>
          </View>
        </View>

        {/* <Link href="/PythonTuplesPage" asChild>
          <NextButton title="Next: Python Tuples" />
        </Link> */}
        <BackButton style={styles.backButton} />
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
    comment: {
      color: 'gray',
      fontStyle: 'italic',
    },
  });