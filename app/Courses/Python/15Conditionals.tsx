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

export default function PythonArithmeticOperatorsPage() {
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
        <ScreenTitle title="Python Conditionals" />

        <DropdownBlock
          title="Python Conditionals"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Conditional statements allow you to execute different blocks of code based on whether certain conditions are <Text style={[styles.bold, { color: primaryColor }]}>True</Text> or <Text style={[styles.bold, { color: primaryColor }]}>False</Text>. The primary conditional statements in Python are <Text style={[styles.bold, { color: primaryColor }]}>if</Text>, <Text style={[styles.bold, { color: primaryColor }]}>elif</Text> (else if), and <Text style={[styles.bold, { color: primaryColor }]}>else</Text>.
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="The 'if' Statement"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>if</Text> statement evaluates a condition. If the condition is <Text style={[styles.bold, { color: primaryColor }]}>True</Text>, the block of code indented under the <Text style={[styles.bold, { color: primaryColor }]}>if</Text> statement is executed.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.keyword, { color: primaryColor }]}>if</Text> <Text style={[styles.variable, { color: primaryColor }]}>condition</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}>  # Code to execute if the condition is True</Text>
              </Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Example:
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>age</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>20</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>if</Text> <Text style={[styles.variable, { color: primaryColor }]}>age</Text> <Text style={[styles.operator, { color: primaryColor }]}>&gt;=</Text> <Text style={[styles.value, { color: secondaryColor }]}>18</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                <Text style={[{ color: primaryColor }]}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`You are eligible to vote.`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: You are eligible to vote.</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="The 'if...else' Statement"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>if...else</Text> statement provides an alternative block of code to execute if the <Text style={[styles.bold, { color: primaryColor }]}>if</Text> condition is <Text style={[styles.bold, { color: primaryColor }]}>False</Text>.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.keyword, { color: primaryColor }]}>if</Text> <Text style={[styles.variable, { color: primaryColor }]}>condition</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}>  # Code to execute if the condition is True</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>else</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}>  # Code to execute if the condition is False</Text>
              </Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Example:
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>temperature</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>15</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>if</Text> <Text style={[styles.variable, { color: primaryColor }]}>temperature</Text> <Text style={[styles.operator, { color: primaryColor }]}>&gt;</Text> <Text style={[styles.value, { color: secondaryColor }]}>20</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                <Text style={[{ color: primaryColor }]}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`It's a warm day.`})</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>else</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                <Text style={[{ color: primaryColor }]}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`It's a bit chilly.`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: It's a bit chilly.</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="The 'if...elif...else' Statement"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>if...elif...else</Text> statement allows you to check multiple conditions in sequence. <Text style={[styles.bold, { color: primaryColor }]}>elif</Text> (short for "else if") is checked if the preceding <Text style={[styles.bold, { color: primaryColor }]}>if</Text> or <Text style={[styles.bold, { color: primaryColor }]}>elif</Text> condition was <Text style={[styles.bold, { color: primaryColor }]}>False</Text>. The optional <Text style={[styles.bold, { color: primaryColor }]}>else</Text> block is executed if none of the preceding conditions are <Text style={[styles.bold, { color: primaryColor }]}>True</Text>.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.keyword, { color: primaryColor }]}>if</Text> <Text style={[styles.variable, { color: primaryColor }]}>condition1</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}>  # Code to execute if condition1 is True</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>elif</Text> <Text style={[styles.variable, { color: primaryColor }]}>condition2</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}>  # Code to execute if condition1 is False and condition2 is True</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>else</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                <Text style={[styles.comment, { color: secondaryColor }]}>  # Code to execute if all preceding conditions are False</Text>
              </Text>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Example:
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>grade</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>85</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>if</Text> <Text style={[styles.variable, { color: primaryColor }]}>grade</Text> <Text style={[styles.operator, { color: primaryColor }]}>&gt;=</Text> <Text style={[styles.value, { color: secondaryColor }]}>90</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                <Text style={[{ color: primaryColor }]}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`Grade: A`})</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>elif</Text> <Text style={[styles.variable, { color: primaryColor }]}>grade</Text> <Text style={[styles.operator, { color: primaryColor }]}>&gt;=</Text> <Text style={[styles.value, { color: secondaryColor }]}>80</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                <Text style={[{ color: primaryColor }]}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`Grade: B`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: Grade: B</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>elif</Text> <Text style={[styles.variable, { color: primaryColor }]}>grade</Text> <Text style={[styles.operator, { color: primaryColor }]}>&gt;=</Text> <Text style={[styles.value, { color: secondaryColor }]}>70</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                <Text style={[{ color: primaryColor }]}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`Grade: C`})</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>else</Text><Text style={[styles.operator, { color: primaryColor }]}>:</Text>{'\n'}
                <Text style={[{ color: primaryColor }]}>  </Text><Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`Grade: D or lower`})</Text>
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