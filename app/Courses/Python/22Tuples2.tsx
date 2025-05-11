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
        <ScreenTitle title="Python Tuples (Usage and Methods)" />

        <DropdownBlock
          title="Common Use Cases for Tuples"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Tuples are particularly useful in situations where you need to store a sequence of items that should not be modified. Here are some common use cases:
              </Text>
              <View style={{ marginLeft: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5 }}>
                  <Text style={{ color: primaryColor, marginRight: 5 }}>•</Text>
                  <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                    <Text style={[styles.bold, { color: primaryColor }]}>Representing fixed collections:</Text> Use tuples for data that should remain constant throughout the program, such as days of the week, months of the year, or coordinates.
                  </Text>
                </View>
                <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                  <Text style={{ color: primaryColor }}>days</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'Monday'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'Tuesday'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'Wednesday'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'Thursday'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'Friday'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'Saturday'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'Sunday'</Text><Text style={{ color: primaryColor }}>)</Text>
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5, marginTop: 10 }}>
                  <Text style={{ color: primaryColor, marginRight: 5 }}>•</Text>
                  <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                    <Text style={[styles.bold, { color: primaryColor }]}>Passing data that should not be changed:</Text> When you pass a sequence of values to a function and want to ensure that the function does not modify the original data, using a tuple provides that guarantee.
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5 }}>
                  <Text style={{ color: primaryColor, marginRight: 5 }}>•</Text>
                  <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                    <Text style={[styles.bold, { color: primaryColor }]}>Keys in dictionaries:</Text> Because tuples are immutable and hashable (if they contain only immutable elements), they can be used as keys in Python dictionaries, unlike lists.
                  </Text>
                </View>
                <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                  <Text style={{ color: primaryColor }}>coordinates</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>{'{('}</Text><Text style={{ color: secondaryColor }}>0</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>0</Text><Text style={{ color: primaryColor }}>{')'}</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'Origin'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>5</Text><Text style={{ color: primaryColor }}>)</Text><Text style={{ color: primaryColor }}>:</Text> <Text style={{ color: secondaryColor }}>'Point A'</Text><Text style={{ color: primaryColor }}>{'}'}</Text>
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5, marginTop: 10 }}>
                  <Text style={{ color: primaryColor, marginRight: 5 }}>•</Text>
                  <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                    <Text style={[styles.bold, { color: primaryColor }]}>Returning multiple values from a function:</Text> Functions in Python can return multiple values as a tuple.
                  </Text>
                </View>
                <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                  <Text style={[styles.keyword, { color: primaryColor }]}>def</Text> <Text style={{ color: primaryColor }}>get_coordinates</Text><Text style={{ color: primaryColor }}>():</Text>{'\n'}
                  <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>return</Text> <Text style={{ color: secondaryColor }}>10</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>20</Text>{'\n'}
                  <Text style={{ color: primaryColor }}>x</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>y</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>get_coordinates</Text><Text style={{ color: primaryColor }}>()</Text>
                </Text>
              </View>
            </View>
          }
        />

        <DropdownBlock
          title="Looping Through Tuples"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                You can iterate over the items in a tuple using a <Text style={[styles.bold, { color: primaryColor }]}>for</Text> loop, just like you do with lists.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>fruits</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={{ color: primaryColor }}>fruit</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={{ color: primaryColor }}>fruits</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
                <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`fruit`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: apple, banana, cherry (each on a new line)'}</Text>
              </Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                You can also use <Text style={[styles.bold, { color: primaryColor }]}>enumerate()</Text> to get both the index and the item:
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>fruits</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>'apple'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'banana'</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>'cherry'</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={{ color: primaryColor }}>index</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>fruit</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={[styles.keyword, { color: primaryColor }]}>enumerate</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: primaryColor }}>fruits</Text><Text style={{ color: primaryColor }}>)</Text><Text style={{ color: primaryColor }}>:</Text>{'\n'}
                <Text style={{ color: primaryColor }}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`Index:`}</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>index</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>{`, Fruit:`}</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: primaryColor }}>fruit</Text><Text style={{ color: primaryColor }}>)</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="'count()' Method"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>count()</Text> method returns the number of times a specified value appears in the tuple.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={{ color: primaryColor }}>my_tuple</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>3</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>7</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>9</Text><Text style={{ color: primaryColor }}>,</Text> <Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={{ color: primaryColor }}>count_of_1</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: primaryColor }}>my_tuple</Text><Text style={{ color: primaryColor }}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>count</Text><Text style={{ color: primaryColor }}>(</Text><Text style={{ color: secondaryColor }}>1</Text><Text style={{ color: primaryColor }}>)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`count_of_1`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# Output: 3'}</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="'index()' Method"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
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