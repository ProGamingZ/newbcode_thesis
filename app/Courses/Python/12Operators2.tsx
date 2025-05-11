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
  const accentColor = theme.colors.accent; // Make sure accentColor is defined

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContentContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <View style={styles.container}>
        <BackButton style={styles.backButton} />
        <ScreenTitle title="Python Arithmetic Operators" />

        <DropdownBlock
          title="Python Arithmetic Operators"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Arithmetic operators are used to perform mathematical calculations in Python. Here's a breakdown of the common arithmetic operators:
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Addition (+)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The addition operator adds two operands together.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>num1</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>num2</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>sum</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>num1</Text> <Text style={[styles.operator, { color: primaryColor }]}>+</Text> <Text style={[styles.variable, { color: primaryColor }]}>num2</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`The sum is: ${<Text style={{ color: primaryColor }}>sum</Text>}`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: The sum is: 15</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Subtraction (-)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The subtraction operator subtracts the second operand from the first.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>num1</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>num2</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>difference</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>num1</Text> <Text style={[styles.operator, { color: primaryColor }]}>-</Text> <Text style={[styles.variable, { color: primaryColor }]}>num2</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`The difference is: ${<Text style={{ color: primaryColor }}>difference</Text>}`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: The difference is: 5</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Multiplication (*)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The multiplication operator multiplies two operands.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>num1</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>num2</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>product</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>num1</Text> <Text style={[styles.operator, { color: primaryColor }]}>*</Text> <Text style={[styles.variable, { color: primaryColor }]}>num2</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`The product is: ${<Text style={{ color: primaryColor }}>product</Text>}`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: The product is: 50</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Division (/)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The division operator divides the first operand by the second. It always returns a floating-point number.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>num1</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>num2</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>quotient</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>num1</Text> <Text style={[styles.operator, { color: primaryColor }]}>/</Text> <Text style={[styles.variable, { color: primaryColor }]}>num2</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`The quotient is: ${<Text style={{ color: primaryColor }}>quotient</Text>}`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: The quotient is: 3.3333333333333335</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Modulo (%)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The modulo operator returns the remainder of the division of the first operand by the second.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>num1</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>num2</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>remainder</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>num1</Text> <Text style={[styles.operator, { color: primaryColor }]}>%</Text> <Text style={[styles.variable, { color: primaryColor }]}>num2</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`The remainder is: ${<Text style={{ color: primaryColor }}>remainder</Text>}`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: The remainder is: 1</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Exponentiation (**)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The exponentiation operator raises the first operand to the power of the second.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>base</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>exponent</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>power</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>base</Text> <Text style={[styles.operator, { color: primaryColor }]}>**</Text> <Text style={[styles.variable, { color: primaryColor }]}>exponent</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`The result is: ${<Text style={{ color: primaryColor }}>power</Text>}`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: The result is: 8</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Floor Division (//)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The floor division operator divides the first operand by the second and rounds the result down to the nearest whole number (integer).
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>num1</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>num2</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>floor_quotient</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.variable, { color: primaryColor }]}>num1</Text> <Text style={[styles.operator, { color: primaryColor }]}>//</Text> <Text style={[styles.variable, { color: primaryColor }]}>num2</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`The floor quotient is: ${<Text style={{ color: primaryColor }}>floor_quotient</Text>}`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: The floor quotient is: 3</Text>
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