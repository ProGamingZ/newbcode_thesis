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

export default function PythonBooleansAndOperatorsPage() {
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
        <ScreenTitle title="Python Booleans and Operators" />

        <DropdownBlock
          title="Python Booleans"
          content={
            <View>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                Booleans represent one of two values: <Text style={[styles.bold, { color: primaryColor }]}>True</Text> or <Text style={[styles.bold, { color: primaryColor }]}>False</Text>. They are fundamental in programming for making decisions and controlling the flow of execution.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>is_valid</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>True</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>is_empty</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>False</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>is_valid</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: True</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>is_empty</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: False</Text>
              </Text>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                Boolean values often result from comparisons.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>y</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>is_greater</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>{'>'}</Text> <Text style={[styles.variable, { color: primaryColor }]}>y</Text> <Text style={styles.comment}># True because 10 {'>'} 5</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>is_equal</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>==</Text> <Text style={[styles.variable, { color: primaryColor }]}>y</Text> <Text style={styles.comment}># False because 10 != 5</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>is_greater</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: True</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({')'}</Text><Text style={[styles.variable, { color: primaryColor }]}>is_equal</Text><Text style={[styles.operator, { color: primaryColor }]}>)</Text> <Text style={styles.comment}># Output: False</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Python Operators"
          content={
            <View>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                Operators are symbols that perform operations on variables and values. Python divides the operators in the following groups:
              </Text>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                - Arithmetic operators
              </Text>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                - Logical operators
              </Text>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                - Assignment operators
              </Text>
              <Text style={[styles.sectionContent, { color: primaryColor }]}>
                - Comparison operators
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
  sectionContent: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 8,
    color: '#000', // Fallback color
    textAlign: 'justify',
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