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
        <ScreenTitle title="Python Lists" />

        <DropdownBlock
          title="Part 3 (Looping and Comprehension)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                This section explores how to iterate through lists and introduces a concise way to create new lists called list comprehension.
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Looping Through Lists Using 'for'"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                You can easily iterate over each item in a list using a <Text style={[styles.bold, { color: primaryColor }]}>for</Text> loop.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[{ color: secondaryColor }]}>'apple'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'banana'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'cherry'</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={[styles.variable, { color: primaryColor }]}>fruit</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                <Text style={[{ color: primaryColor }]}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`fruit`})</Text>
              </Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                This loop will iterate through the <Text style={[styles.bold, { color: primaryColor }]}>fruits</Text> list, and in each iteration, the current item will be assigned to the <Text style={[styles.bold, { color: primaryColor }]}>fruit</Text> variable, which is then printed. The output will be:
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.comment, { color: secondaryColor }]}>apple</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}>banana</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}>cherry</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="List Comprehension (Basic Syntax)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                List comprehension provides a concise way to create new lists based on existing lists (or other iterables). The basic syntax is:
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[{ color: primaryColor }]}>[</Text><Text style={[styles.variable, { color: primaryColor }]}>expression</Text> <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={[styles.variable, { color: primaryColor }]}>item</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={[styles.variable, { color: primaryColor }]}>iterable</Text><Text style={[{ color: primaryColor }]}>]</Text>
              </Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Here, <Text style={[styles.bold, { color: primaryColor }]}>expression</Text> is the operation performed on each <Text style={[styles.bold, { color: primaryColor }]}>item</Text> in the <Text style={[styles.bold, { color: primaryColor }]}>iterable</Text>. The result is a new list containing the results of these expressions.
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="List Comprehension Examples"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Let's look at some examples to understand list comprehension better.
              </Text>

              <View style={{ marginLeft: 15 }}>
                <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>Squaring Numbers</Text>
                <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14 }]}>
                  Create a new list containing the square of each number in an existing list.
                </Text>
                <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                  <Text style={[styles.variable, { color: primaryColor }]}>numbers</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[styles.value, { color: secondaryColor }]}>1</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>4</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                  <Text style={[styles.variable, { color: primaryColor }]}>squares</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[styles.variable, { color: primaryColor }]}>n</Text> <Text style={[styles.operator, { color: primaryColor }]}>**</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text> <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={[styles.variable, { color: primaryColor }]}>n</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={[styles.variable, { color: primaryColor }]}>numbers</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                  <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`squares`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: [1, 4, 9, 16, 25]</Text>
                </Text>
              </View>

              <View style={{ marginLeft: 15, marginTop: 10 }}>
                <Text style={[styles.subSectionTitle, { color: primaryColor, fontSize: 16 }]}>Converting Strings to Uppercase</Text>
                <Text style={[styles.dropdownContentText, { color: primaryColor, fontSize: 14 }]}>
                  Create a new list with the uppercase version of each string in a list.
                </Text>
                <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                  <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[{ color: secondaryColor }]}>'apple'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'banana'</Text><Text style={[{ color: primaryColor }]}>,</Text> <Text style={[{ color: secondaryColor }]}>'cherry'</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                  <Text style={[styles.variable, { color: primaryColor }]}>upper_fruits</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[{ color: primaryColor }]}>[</Text><Text style={[styles.variable, { color: primaryColor }]}>fruit</Text><Text style={[styles.operator, { color: primaryColor }]}>.</Text><Text style={[styles.keyword, { color: primaryColor }]}>upper</Text><Text style={[{ color: primaryColor }]}>()</Text> <Text style={[styles.keyword, { color: primaryColor }]}>for</Text> <Text style={[styles.variable, { color: primaryColor }]}>fruit</Text> <Text style={[styles.keyword, { color: primaryColor }]}>in</Text> <Text style={[styles.variable, { color: primaryColor }]}>fruits</Text><Text style={[{ color: primaryColor }]}>]</Text>{'\n'}
                  <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`upper_fruits`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: ['APPLE', 'BANANA', 'CHERRY']</Text>
                </Text>
              </View>
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