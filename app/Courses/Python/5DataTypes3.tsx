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

export default function PythonDataTypesPart3Page() {
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
        <ScreenTitle title="Python Data Types - Part 3" />

        <DropdownBlock
          title="Mapping Type: dict"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Dictionaries (<Text style={[styles.keyword, { color: primaryColor }]}>dict</Text>) in Python are ordered collections of key-value pairs. As of Python 3.7, dictionaries are guaranteed to be ordered. Keys are unique within a dictionary, and they are used to access the corresponding values. Dictionaries are mutable, meaning you can change their contents.
              </Text>

              <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Creating Dictionaries:</Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Dictionaries are created using curly braces <Text style={[styles.operator, { color: primaryColor }]}>{'{}'}</Text>, with key-value pairs separated by colons <Text style={[styles.operator, { color: primaryColor }]}>:</Text>. Items are separated by commas <Text style={[styles.operator, { color: primaryColor }]}>,</Text>.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>my_dict</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.operator, { color: primaryColor }]}>{'{}'}</Text> <Text style={styles.comment}># Empty dictionary</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>person</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.operator, { color: primaryColor }]}>{'\{'}</Text>
                  <Text style={[styles.value, { color: secondaryColor }]}>"name"</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text> <Text style={[styles.value, { color: secondaryColor }]}>"Alice"</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text>{'\n'}
                  <Text style={[styles.value, { color: secondaryColor }]}>"age"</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text> <Text style={[styles.value, { color: secondaryColor }]}>30</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text>{'\n'}
                  <Text style={[styles.value, { color: secondaryColor }]}>"city"</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text> <Text style={[styles.value, { color: secondaryColor }]}>"New York"</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>{'\}'}</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Set Types: set"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                A <Text style={[styles.keyword, { color: primaryColor }]}>set</Text> is an unordered collection of unique elements. This means that each item in a set must be unique, and sets do not retain the order in which elements were added. Sets are mutable.
              </Text>

              <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Creating Sets:</Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Sets are created using curly braces <Text style={[styles.operator, { color: primaryColor }]}>{'{}'}</Text> or the <Text style={[styles.keyword, { color: primaryColor }]}>set()</Text> constructor. Note that to create an empty set, you must use <Text style={[styles.keyword, { color: primaryColor }]}>set()</Text>, as <Text style={[styles.operator, { color: primaryColor }]}>{'{}'}</Text> creates an empty dictionary.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>my_set1</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.operator, { color: primaryColor }]}>{'\{'}</Text><Text style={[styles.value, { color: secondaryColor }]}>1</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text><Text style={[styles.operator, { color: primaryColor }]}>{'\}'}</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>my_set2</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>set</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}[</Text><Text style={[styles.value, { color: secondaryColor }]}>4</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text><Text style={[styles.operator, { color: primaryColor }]}>]</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Note the duplicate 5</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>empty_set</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>set</Text><Text style={[styles.operator, { color: primaryColor }]}>()</Text>
              </Text>

              <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Uniqueness in Sets:</Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                When you create a set with duplicate elements, Python automatically removes the duplicates, ensuring that the set contains only unique items.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>numbers</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.operator, { color: primaryColor }]}>{'\{'}</Text><Text style={[styles.value, { color: secondaryColor }]}>1</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text><Text style={[styles.operator, { color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text><Text style={[styles.operator, { color: primaryColor }]}>{'\}'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>numbers</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: {`{1, 2, 3}`} (order may vary)</Text>
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