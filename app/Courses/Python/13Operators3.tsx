import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

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
        <ScreenTitle title="Python Assignment Operators" />

        <View style={[styles.section, { backgroundColor: accentColor }]}>
          <Text style={[styles.sectionTitle, { color: primaryColor }]}>Python Assignment Operators</Text>
          <Text style={[styles.sectionContent, { color: primaryColor }]}>
            Assignment operators are used to assign values to variables. Python provides several shorthand assignment operators that combine an arithmetic or bitwise operation with assignment.
          </Text>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Simple Assignment (=)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              The simple assignment operator assigns the value on the right to the variable on the left.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>10</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 10</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Add and Assign (+=)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Adds the right operand to the left operand and assigns the result to the left operand (equivalent to <Text style={{ color: primaryColor }}>x = x + y</Text>).
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>5</Text>{'\n'}
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>+=</Text> <Text style={{ color: secondaryColor }}>3</Text> <Text style={[styles.comment, { color: secondaryColor }]}># x is now 8 (5 + 3)</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 8</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Subtract and Assign (-=)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Subtracts the right operand from the left operand and assigns the result to the left operand (equivalent to <Text style={{ color: primaryColor }}>x = x - y</Text>).
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>10</Text>{'\n'}
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>-=</Text> <Text style={{ color: secondaryColor }}>4</Text> <Text style={[styles.comment, { color: secondaryColor }]}># x is now 6 (10 - 4)</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 6</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Multiply and Assign (*=)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Multiplies the left operand by the right operand and assigns the result to the left operand (equivalent to <Text style={{ color: primaryColor }}>x = x * y</Text>).
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>5</Text>{'\n'}
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>*=</Text> <Text style={{ color: secondaryColor }}>6</Text> <Text style={[styles.comment, { color: secondaryColor }]}># x is now 30 (5 * 6)</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 30</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Divide and Assign (/=)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Divides the left operand by the right operand and assigns the result to the left operand (equivalent to <Text style={{ color: primaryColor }}>x = x / y</Text>). The result is always a float.
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>10</Text>{'\n'}
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>/=</Text> <Text style={{ color: secondaryColor }}>2</Text> <Text style={[styles.comment, { color: secondaryColor }]}># x is now 5.0 (10 / 2)</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 5.0</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Modulo and Assign (%=)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Performs modulo on the left operand by the right operand and assigns the remainder to the left operand (equivalent to <Text style={{ color: primaryColor }}>x = x % y</Text>).
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>7</Text>{'\n'}
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>%=</Text> <Text style={{ color: secondaryColor }}>3</Text> <Text style={[styles.comment, { color: secondaryColor }]}># x is now 1 (7 % 3)</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 1</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Exponentiate and Assign (**=)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Raises the left operand to the power of the right operand and assigns the result to the left operand (equivalent to <Text style={{ color: primaryColor }}>x = x ** y</Text>).
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>2</Text>{'\n'}
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>**=</Text> <Text style={{ color: secondaryColor }}>4</Text> <Text style={[styles.comment, { color: secondaryColor }]}># x is now 16 (2 ** 4)</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 16</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Floor Divide and Assign (//=)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Performs floor division on the left operand by the right operand and assigns the integer result to the left operand (equivalent to <Text style={{ color: primaryColor }}>x = x // y</Text>).
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>11</Text>{'\n'}
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>//=</Text> <Text style={{ color: secondaryColor }}>3</Text> <Text style={[styles.comment, { color: secondaryColor }]}># x is now 3 (11 // 3)</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 3</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Bitwise AND and Assign (&=)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Performs a bitwise AND operation on the left and right operands and assigns the result to the left operand (equivalent to <Text style={{ color: primaryColor }}>x = x & y</Text>).
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>5</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Binary: 0101</Text>{'\n'}
              <Text style={{ color: primaryColor }}>y</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>3</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Binary: 0011</Text>{'\n'}
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>&=</Text> <Text style={{ color: primaryColor }}>y</Text> <Text style={[styles.comment, { color: secondaryColor }]}># x is now 1 (0101 & 0011 = 0001)</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 1</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Bitwise OR and Assign (|=)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Performs a bitwise OR operation on the left and right operands and assigns the result to the left operand (equivalent to <Text style={{ color: primaryColor }}>x = x | y</Text>).
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>5</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Binary: 0101</Text>{'\n'}
              <Text style={{ color: primaryColor }}>y</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>3</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Binary: 0011</Text>{'\n'}
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>|=</Text> <Text style={{ color: primaryColor }}>y</Text> <Text style={[styles.comment, { color: secondaryColor }]}># x is now 7 (0101 | 0011 = 0111)</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 7</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>Bitwise XOR and Assign (^=)</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Performs a bitwise XOR operation on the left and right operands and assigns the result to the left operand (equivalent to <Text style={{ color: primaryColor }}>x = x ^ y</Text>).
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>5</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Binary: 0101</Text>{'\n'}
              <Text style={{ color: primaryColor }}>y</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>3</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Binary: 0011</Text>{'\n'}
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>^=</Text> <Text style={{ color: primaryColor }}>y</Text> <Text style={[styles.comment, { color: secondaryColor }]}># x is now 6 (0101 ^ 0011 = 0110)</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 6</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>{'Right Shift and Assign (>>=)'}</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Performs a right bit shift on the left operand by the right operand and assigns the result to the left operand (equivalent to <Text style={{ color: primaryColor }}>{'x = x >> y'}</Text>).
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: secondaryColor }}>{'='}</Text> <Text style={{ color: secondaryColor }}>8</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Binary: 1000</Text>{'\n'}
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>{'>>='}</Text> <Text style={{ color: secondaryColor }}>2</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# x is now 2 (1000 >> 2 = 0010)'}</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 2</Text>
            </Text>
          </View>

          <View>
            <Text style={[styles.subSectionTitle, { color: primaryColor }]}>{'Left Shift and Assign (<<=)'}</Text>
            <Text style={[styles.sectionContent, { color: primaryColor }]}>
              Performs a left bit shift on the left operand by the right operand and assigns the result to the left operand (equivalent to <Text style={{ color: primaryColor }}>{'x = x << y'}</Text>).
            </Text>
            <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: secondaryColor }}>=</Text> <Text style={{ color: secondaryColor }}>1</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Binary: 0001</Text>{'\n'}
              <Text style={{ color: primaryColor }}>x</Text> <Text style={{ color: primaryColor }}>{'<<='}</Text> <Text style={{ color: secondaryColor }}>3</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# x is now 8 (0001 << 3 = 1000)'}</Text>{'\n'}
              <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={{ color: primaryColor }}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 8</Text>
            </Text>
          </View>
        </View>

        {/* <Link href="/PythonComparisonOperatorsPage" asChild>
          <NextButton title="Next: Python Comparison Operators" />
        </Link> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContentContainer: {
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    marginBottom: 10,
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
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
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
    lineHeight: 20,
  },
  comment: {
    color: 'gray',
    fontSize: 14,
    fontStyle: 'italic',
  },
  keyword: {
    fontWeight: 'bold',
  },

});