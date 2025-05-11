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
        <ScreenTitle title="Python Comparison Operators" />

        <DropdownBlock
          title="Python Comparison Operators"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Comparison operators are used to compare the values of two operands. They return a boolean value (<Text style={[styles.bold, { color: primaryColor }]}>True</Text> or <Text style={[styles.bold, { color: primaryColor }]}>False</Text>) based on the condition.
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Equal to (==)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Returns <Text style={[styles.bold, { color: primaryColor }]}>True</Text> if both operands are equal.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>y</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`x == y`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: True</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>a</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>b</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`a == b`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: False</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Not equal to (!=)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Returns <Text style={[styles.bold, { color: primaryColor }]}>True</Text> if the operands are not equal.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>y</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`x != y`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: True</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>a</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>b</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`a != b`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: False</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Greater than (>)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Returns <Text style={[styles.bold, { color: primaryColor }]}>True</Text> if the left operand is greater than the right operand.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>y</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`x > y`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: True</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>a</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>b</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>7</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`a > b`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: False</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Less than (<)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Returns <Text style={[styles.bold, { color: primaryColor }]}>True</Text> if the left operand is less than the right operand.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>y</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`x < y`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: True</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>a</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>8</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>b</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`a < b`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: False</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Greater than or equal to (>=)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Returns <Text style={[styles.bold, { color: primaryColor }]}>True</Text> if the left operand is greater than or equal to the right operand.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>y</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`x >= y`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: True</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>a</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>15</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>b</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`a >= b`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: True</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>p</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>q</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>8</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`p >= q`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: False</Text>
              </Text>
            </View>
          }
        />

        <DropdownBlock
          title="Less than or equal to (<=)"
          content={
            <View>
              <Text style={[styles.dropdownContentText, { color: primaryColor }]}>
                Returns <Text style={[styles.bold, { color: primaryColor }]}>True</Text> if the left operand is less than or equal to the right operand.
              </Text>
              <Text style={[styles.codeBlock, { backgroundColor: codeBackgroundColor }]}>
                <Text style={[styles.variable, { color: primaryColor }]}>x</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>y</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>5</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`x <= y`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: True</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>a</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>3</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>b</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>7</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`a <= b`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: True</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>p</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>10</Text>{'\n'}
                <Text style={[styles.variable, { color: primaryColor }]}>q</Text> <Text style={[styles.operator, { color: primaryColor }]}>=</Text> <Text style={[styles.value, { color: secondaryColor }]}>2</Text>{'\n'}
                <Text style={[styles.keyword, { color: primaryColor }]}>print</Text><Text style={[styles.operator, { color: primaryColor }]}>({`p <= q`})</Text> <Text style={[styles.comment, { color: secondaryColor }]}># Output: False</Text>
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