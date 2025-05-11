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

export default function PythonDataTypesPart2Page() {
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
        <ScreenTitle title="Python Data Types - Part 2" />

        <DropdownBlock
          title="Sequence Types: list, tuple, range"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Sequence types are ordered collections of items. Python has three built-in sequence types:
              </Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>• <Text style={styles.bold}><Text style={[styles.keyword, { color: primaryColor }]}>list</Text></Text>: Ordered, mutable (changeable) collection that can contain items of different types.</Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>• <Text style={styles.bold}><Text style={[styles.keyword, { color: primaryColor }]}>tuple</Text></Text>: Ordered, immutable (unchangeable) collection. Typically used for fixed collections of items.</Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>• <Text style={styles.bold}><Text style={[styles.keyword, { color: primaryColor }]}>range</Text></Text>: Represents an immutable sequence of numbers, often used for looping a specific number of times.</Text>
            </View>
          }
        />

        <DropdownBlock
          title="list"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Lists are created using square brackets <Text style={[styles.operator, { color: primaryColor }]}>[]</Text> and items are separated by commas <Text style={[styles.operator, { color: primaryColor }]}>,</Text>.
              </Text>
              <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Examples:</Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>my_list</Text>
                <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
                <Text style={[styles.operator, { color: primaryColor }]}>[</Text>
                <Text style={[styles.value, { color: secondaryColor }]}>1</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>, </Text>
                <Text style={[styles.value, { color: secondaryColor }]}>2</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>, </Text>
                <Text style={[styles.value, { color: secondaryColor }]}>3</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>mixed_list</Text>
                <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
                <Text style={[styles.operator, { color: primaryColor }]}>[</Text>
                <Text style={[styles.value, { color: secondaryColor }]}>1</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>, "</Text>
                <Text style={[styles.value, { color: secondaryColor }]}>hello</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>", </Text>
                <Text style={[styles.value, { color: secondaryColor }]}>3.14</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>, </Text>
                <Text style={[styles.value, { color: secondaryColor }]}>True</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>empty_list</Text>
                <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
                <Text style={[styles.operator, { color: primaryColor }]}>[]</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="tuple"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Tuples are created using parentheses <Text style={[styles.operator, { color: primaryColor }]}>()</Text> and items are separated by commas <Text style={[styles.operator, { color: primaryColor }]}>,</Text>.
              </Text>
              <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Examples:</Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>my_tuple</Text>
                <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
                <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
                <Text style={[styles.value, { color: secondaryColor }]}>1</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>, </Text>
                <Text style={[styles.value, { color: secondaryColor }]}>2</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>, </Text>
                <Text style={[styles.value, { color: secondaryColor }]}>3</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>)</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>mixed_tuple</Text>
                <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
                <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
                <Text style={[styles.value, { color: secondaryColor }]}>1</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>, "</Text>
                <Text style={[styles.value, { color: secondaryColor }]}>hello</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>", </Text>
                <Text style={[styles.value, { color: secondaryColor }]}>3.14</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>, </Text>
                <Text style={[styles.value, { color: secondaryColor }]}>True</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>)</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>empty_tuple</Text>
                <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
                <Text style={[styles.operator, { color: primaryColor }]}>()</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>single_item_tuple</Text>
                <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
                <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
                <Text style={[styles.value, { color: secondaryColor }]}>5</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>,</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>)</Text>
                <Text style={styles.comment}> # Note the trailing comma</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="range"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The <Text style={[styles.keyword, { color: primaryColor }]}>range()</Text> function creates a sequence of numbers. It's often used in <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> loops.
              </Text>
              <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Syntax:</Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.keyword, { color: primaryColor }]}>range</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
                <Text style={[styles.variable, { color: primaryColor }]}>stop</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>)</Text>
                <Text style={styles.comment}> # Starts from 0 up to stop (exclusive)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>range</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
                <Text style={[styles.variable, { color: primaryColor }]}>start</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>, </Text>
                <Text style={[styles.variable, { color: primaryColor }]}>stop</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>)</Text>
                <Text style={styles.comment}> # From start up to stop (exclusive)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>range</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
                <Text style={[styles.variable, { color: primaryColor }]}>start</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>, </Text>
                <Text style={[styles.variable, { color: primaryColor }]}>stop</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>, </Text>
                <Text style={[styles.variable, { color: primaryColor }]}>step</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>)</Text>
                <Text style={styles.comment}> # From start up to stop (exclusive), with a step</Text>
              </Text>
              <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Examples:</Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>numbers</Text>
                <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
                <Text style={[styles.keyword, { color: primaryColor }]}>range</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
                <Text style={[styles.value, { color: secondaryColor }]}>5</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>)</Text>
                <Text style={styles.comment}> # 0, 1, 2, 3, 4</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>even_numbers</Text>
                <Text style={[styles.operator, { color: primaryColor }]}> = </Text>
                <Text style={[styles.keyword, { color: primaryColor }]}>range</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text>
                <Text style={[styles.value, { color: secondaryColor }]}>0</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>, </Text>
                <Text style={[styles.value, { color: secondaryColor }]}>10</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>, </Text>
                <Text style={[styles.value, { color: secondaryColor }]}>2</Text>
                <Text style={[styles.operator, { color: primaryColor }]}>)</Text>
                <Text style={styles.comment}> # 0, 2, 4, 6, 8</Text>
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