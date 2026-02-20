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
          <ScreenTitle title="Python Tuples (Usage and Methods)" />
  
          <View style={[styles.section, { backgroundColor: accentColor }]}>
            <Text style={[styles.sectionTitle, { color: primaryColor }]}>Python Tuples (Usage and Methods)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              This page explores common use cases for tuples and introduces the primary methods available for working with them.
            </Text>
  
            <View>
              <Text style={[styles.subSectionTitle, { color: primaryColor }]}>When to Use Tuples</Text>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                Tuples are particularly useful in situations where you need to store a sequence of items that should not be modified. Here are some common use cases:
              </Text>
              <View style={{ marginLeft: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5 }}>
                  <Text style={{ color: primaryColor, marginRight: 5 }}>•</Text>
                  <Text style={[styles.sectionContent, { color: primaryColor }]}>
                    <Text style={[styles.bold, { color: primaryColor }]}>Representing fixed collections:</Text> Use tuples for data that should remain constant throughout the program, such as days of the week, months of the year, or coordinates.
                  </Text>
                </View>
                <View style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                  <Text style={{ color: primaryColor }}>days</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'Monday'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'Tuesday'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'Wednesday'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'Thursday'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'Friday'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'Saturday'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'Sunday'</Text><Text style={{ color: primaryColor }}>)</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5, marginTop: 10 }}>
                  <Text style={{ color: primaryColor, marginRight: 5 }}>•</Text>
                  <Text style={[styles.sectionContent, { color: primaryColor }]}>
                    <Text style={[styles.bold, { color: primaryColor }]}>Passing data that should not be changed:</Text> When you pass a sequence of values to a function and want to ensure that the function does not modify the original data, using a tuple provides that guarantee.
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5 }}>
                  <Text style={{ color: primaryColor, marginRight: 5 }}>•</Text>
                  <Text style={[styles.sectionContent, { color: primaryColor }]}>
                    <Text style={[styles.bold, { color: primaryColor }]}>Keys in dictionaries:</Text> Because tuples are immutable and hashable (if they contain only immutable elements), they can be used as keys in Python dictionaries, unlike lists.
                  </Text>
                </View>
                <View style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                  <Text style={{ color: primaryColor }}>coordinates</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{('}</Text><Text style={{ color: secondaryColor }}>0</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>0</Text><Text style={{ color: primaryColor }}>{')'}</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'Origin'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>5</Text><Text style={{ color: primaryColor }}>)</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'Point A'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5, marginTop: 10 }}>
                  <Text style={{ color: primaryColor, marginRight: 5 }}>•</Text>
                  <Text style={[styles.sectionContent, { color: primaryColor }]}>
                    <Text style={[styles.bold, { color: primaryColor }]}>Returning multiple values from a function:</Text> Functions in Python can return multiple values as a tuple.
                  </Text>
                </View>
                <View style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                  <Text style={[styles.keyword, { color: primaryColor }]}>def</Text> <Text style={{ color: primaryColor }}>get_coordinates</Text><Text style={{ color: primaryColor }}>():</Text>{'\n'}
                  <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>return</Text> <Text style={{ color: secondaryColor }}>10</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>20</Text>{'\n'}
                  <Text style={{ color: primaryColor }}>x</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>y</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>get_coordinates</Text><Text style={{ color: primaryColor }}>()</Text>
                </View>
              </View>
            </View>
  
            <View>
              <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Looping Through Tuples</Text>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                You can iterate over the items in a tuple using a <Text style={[styles.bold, { color: primaryColor }]}>for</Text> loop, just like you do with lists.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>fruits</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={{ color: primaryColor }}>fruit</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={{ color: primaryColor }}>fruits</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
                <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`fruit`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: apple, banana, cherry (each on a new line)'}</Text>
              </Text>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                You can also use <Text style={[styles.bold, { color: primaryColor }]}>enumerate()</Text> to get both the index and the item:
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>fruits</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={{ color: primaryColor }}>index</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>fruit</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={[styles.keyword, { color: primaryColor }]}>enumerate</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: primaryColor }}>fruits</Text><Text style={{ color: primaryColor }}>)</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
                <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`Index:`}</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>index</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>{`, Fruit:`}</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>fruit</Text><Text style={{ color: primaryColor }}>)</Text>
              </Text>
            </View>
  
            <View>
              <Text style={[styles.subSectionTitle, { color: primaryColor }]}>'count()' Method</Text>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>count()</Text> method returns the number of times a specified value appears in the tuple.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>my_tuple</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>3</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>7</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>9</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={{ color: primaryColor }}>count_of_1</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>my_tuple</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>count</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`count_of_1`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 3'}</Text>
              </Text>
            </View>
  
            <View>
              <Text style={[styles.subSectionTitle, { color: primaryColor }]}>'index()' Method</Text>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>index()</Text> method returns the index of the first occurrence of a specified value in the tuple. If the value is not found, it raises a <Text style={[styles.bold, { color: primaryColor }]}>ValueError</Text>. You can also specify optional <Text style={[styles.bold, { color: primaryColor }]}>start</Text> and <Text style={[styles.bold, { color: primaryColor }]}>end</Text> parameters to search within a specific range.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>fruits</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={{ color: primaryColor }}>index_of_banana</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>fruits</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>index</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`index_of_banana`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 1'}</Text>{'\n'}
                <Text style={{ color: primaryColor }}>numbers</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>10</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>20</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>10</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>30</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={{ color: primaryColor }}>index_of_10_second</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>numbers</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>index</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>10</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`index_of_10_second`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 2'}</Text>
              </Text>
            </View>
          </View>
  
          {/* <Link href="/PythonDictionariesPage" asChild>
            <NextButton title="Next: Python Dictionaries" />
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