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

export default function PythonAssignmentOperatorsPage() {
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

        <DropdownBlock
          title="Python Assignment Operators"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Assignment operators are used to assign values to variables. Python provides several shorthand assignment operators that combine an arithmetic or bitwise operation with assignment.
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Simple Assignment (=)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                The simple assignment operator assigns the value on the right to the variable on the left.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 10</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Add and Assign (+=)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Adds the right operand to the left operand and assigns the result to the left operand (equivalent to <Text style={{ color: primaryColor }}>x = x + y</Text>).
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>+=</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text> <Text style={[styles.comment, { color: secondaryColor }]}># x is now 8 (5 + 3)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 8</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Subtract and Assign (-=)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Subtracts the right operand from the left operand and assigns the result to the left operand (equivalent to <Text style={{ color: primaryColor }}>x = x - y</Text>).
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>-=</Text> <Text style={[styles.value, { color: secondaryColor }]}>4</Text> <Text style={[styles.comment, { color: secondaryColor }]}># x is now 6 (10 - 4)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 6</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Multiply and Assign (*=)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Multiplies the left operand by the right operand and assigns the result to the left operand (equivalent to <Text style={{ color: primaryColor }}>x = x * y</Text>).
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>*=</Text> <Text style={[styles.value, { color: secondaryColor }]}>6</Text> <Text style={[styles.comment, { color: secondaryColor }]}># x is now 30 (5 * 6)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 30</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Divide and Assign (/=)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Divides the left operand by the right operand and assigns the result to the left operand (equivalent to <Text style={{ color: primaryColor }}>x = x / y</Text>). The result is always a float.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>/=</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text> <Text style={[styles.comment, { color: secondaryColor }]}># x is now 5.0 (10 / 2)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 5.0</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Modulo and Assign (%=)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Performs modulo on the left operand by the right operand and assigns the remainder to the left operand (equivalent to <Text style={{ color: primaryColor }}>x = x % y</Text>).
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>7</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>%=</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text> <Text style={[styles.comment, { color: secondaryColor }]}># x is now 1 (7 % 3)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 1</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Exponentiate and Assign (**=)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Raises the left operand to the power of the right operand and assigns the result to the left operand (equivalent to <Text style={{ color: primaryColor }}>x = x ** y</Text>).
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>**=</Text> <Text style={[styles.value, { color: secondaryColor }]}>4</Text> <Text style={[styles.comment, { color: secondaryColor }]}># x is now 16 (2 ** 4)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 16</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Floor Divide and Assign (//=)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Performs floor division on the left operand by the right operand and assigns the integer result to the left operand (equivalent to <Text style={{ color: primaryColor }}>x = x // y</Text>).
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>11</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>//=</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text> <Text style={[styles.comment, { color: secondaryColor }]}># x is now 3 (11 // 3)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 3</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Bitwise AND and Assign (&=)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Performs a bitwise AND operation on the left and right operands and assigns the result to the left operand (equivalent to <Text style={{ color: primaryColor }}>x = x & y</Text>).
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Binary: 0101</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>y</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Binary: 0011</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>&=</Text> <Text style={[styles.variable, { color: primaryColor }]}>y</Text> <Text style={[styles.comment, { color: secondaryColor }]}># x is now 1 (0101 & 0011 = 0001)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 1</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Bitwise OR and Assign (|=)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Performs a bitwise OR operation on the left and right operands and assigns the result to the left operand (equivalent to <Text style={{ color: primaryColor }}>x = x | y</Text>).
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Binary: 0101</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>y</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Binary: 0011</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>|=</Text> <Text style={[styles.variable, { color: primaryColor }]}>y</Text> <Text style={[styles.comment, { color: secondaryColor }]}># x is now 7 (0101 | 0011 = 0111)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 7</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Bitwise XOR and Assign (^=)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Performs a bitwise XOR operation on the left and right operands and assigns the result to the left operand (equivalent to <Text style={{ color: primaryColor }}>x = x ^ y</Text>).
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Binary: 0101</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>y</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Binary: 0011</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>^=</Text> <Text style={[styles.variable, { color: primaryColor }]}>y</Text> <Text style={[styles.comment, { color: secondaryColor }]}># x is now 6 (0101 ^ 0011 = 0110)</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 6</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Right Shift and Assign (>>=)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Performs a right bit shift on the left operand by the right operand and assigns the result to the left operand (equivalent to <Text style={{ color: primaryColor }}>{'x = x >> y'}</Text>).
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>8</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Binary: 1000</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>{'>>='}</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# x is now 2 (1000 >> 2 = 0010)'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 2</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Left Shift and Assign (<<=)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Performs a left bit shift on the left operand by the right operand and assigns the result to the left operand (equivalent to <Text style={{ color: primaryColor }}>{'x = x << y'}</Text>).
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>1</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Binary: 0001</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>&lt;&lt;=</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text> <Text style={[styles.comment, { color: secondaryColor }]}>{'# x is now 8 (0001 << 3 = 1000)'}</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`x`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: 8</Text>
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