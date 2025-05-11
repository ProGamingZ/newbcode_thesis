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

export default function PythonLogicalOperatorsPage() {
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
        <ScreenTitle title="Python Logical Operators" />

        <DropdownBlock
          title="Python Logical Operators"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Logical operators are used to combine or modify conditional statements. Python has three main logical operators: <Text style={[styles.bold, { color: primaryColor }]}>and</Text>, <Text style={[styles.bold, { color: primaryColor }]}>or</Text>, and <Text style={[styles.bold, { color: primaryColor }]}>not</Text>. They are essential for creating more complex decision-making logic in your programs.
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="The 'and' Operator"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>and</Text> operator returns <Text style={[styles.bold, { color: primaryColor }]}>True</Text> if and only if both of the conditions being evaluated are <Text style={[styles.bold, { color: primaryColor }]}>True</Text>. Otherwise, it returns <Text style={[styles.bold, { color: primaryColor }]}>False</Text>.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`x > 0 ${'and'} x < 10`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: True (both conditions are true)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`x > 0 ${'and'} x < 3`})</Text>  <Text style={[styles.comment, { color: secondaryColor }]}># Output: False (the second condition is false)</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="The 'or' Operator"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>or</Text> operator returns <Text style={[styles.bold, { color: primaryColor }]}>True</Text> if at least one of the conditions being evaluated is <Text style={[styles.bold, { color: primaryColor }]}>True</Text>. It returns <Text style={[styles.bold, { color: primaryColor }]}>False</Text> only if both conditions are <Text style={[styles.bold, { color: primaryColor }]}>False</Text>.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>y</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`y > 5 ${'or'} y < 5`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: True (the second condition is true)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`y > 5 ${'or'} y < 1`})</Text>  <Text style={[styles.comment, { color: secondaryColor }]}># Output: False (both conditions are false)</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="The 'not' Operator"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The <Text style={[styles.bold, { color: primaryColor }]}>not</Text> operator is a unary operator that negates the truth value of a condition. If a condition is <Text style={[styles.bold, { color: primaryColor }]}>True</Text>, <Text style={[styles.bold, { color: primaryColor }]}>not</Text> will make it <Text style={[styles.bold, { color: primaryColor }]}>False</Text>, and vice versa.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>z</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>True</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`not z`})</Text>    <Text style={[styles.comment, { color: secondaryColor }]}># Output: False (negation of True)</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>flag</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>False</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`not flag`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: True (negation of False)</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Combining Logical Operators"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                You can combine multiple logical operators to create more complex conditions. Python evaluates these expressions based on operator precedence, with <Text style={[styles.bold, { color: primaryColor }]}>not</Text> having the highest precedence, followed by <Text style={[styles.bold, { color: primaryColor }]}>and</Text>, and then <Text style={[styles.bold, { color: primaryColor }]}>or</Text>. You can use parentheses <Text style={[{ color: primaryColor }]}>()</Text> to override this precedence and control the order of evaluation.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>a</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>True</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>b</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>False</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>c</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.keyword, { color: primaryColor }]}>True</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`a ${'and'} b ${'or'} c`})</Text>   <Text style={[styles.comment, { color: secondaryColor }]}># Output: True (and is evaluated before or)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`(a ${'and'} b) ${'or'} c`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: True</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`a ${'and'} (b ${'or'} c)`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: True (parentheses change the order)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`not a ${'and'} c`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: False (not a is False)</Text>
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