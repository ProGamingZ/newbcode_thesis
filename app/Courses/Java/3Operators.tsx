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
          <Text style={styles.syntaxContent}>{content}</Text>
        </View>
      )}
    </View>
  );
};

export default function OperatorsPage() {
  const { theme } = useTheme();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContentContainer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <View style={styles.container}>
        <BackButton style={styles.backButton} />
        <ScreenTitle title="Operators" />

        <DropdownBlock
          title="Arithmetic Operators"
          content={
            <Text style={styles.syntaxContent}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>+</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Addition (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a + b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>-</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Subtraction (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a - b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>*</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Multiplication (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a * b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>/</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Division (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a / b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>%</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Modulo (remainder of division, e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a % b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>++</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Increment (increases the value by 1, e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a++</Text> <Text style={{ color: theme.colors.textPrimary }}>or </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>++a</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>--</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Decrement (decreases the value by 1, e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a--</Text> <Text style={{ color: theme.colors.textPrimary }}>or </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>--a</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>
            </Text>
          }
        />

        <DropdownBlock
          title="Assignment Operators"
          content={
            <Text style={styles.syntaxContent}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>=</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Simple assignment (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a = b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>+=</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Add and assign (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a += b</Text> <Text style={{ color: theme.colors.textPrimary }}>is the same as </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a = a + b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>-=</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Subtract and assign (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a -= b</Text> <Text style={{ color: theme.colors.textPrimary }}>is the same as </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a = a - b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>*=</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Multiply and assign (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a *= b</Text> <Text style={{ color: theme.colors.textPrimary }}>is the same as </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a = a * b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>/=</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Divide and assign (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a /= b</Text> <Text style={{ color: theme.colors.textPrimary }}>is the same as </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a = a / b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>%=</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Modulo and assign (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a %= b</Text> <Text style={{ color: theme.colors.textPrimary }}>is the same as </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a = a % b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>
            </Text>
          }
        />

        <DropdownBlock
          title="Comparison Operators"
          content={
            <Text style={styles.syntaxContent}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>==</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Equal to (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a == b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>!=</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Not equal to (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a != b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>{'>'}</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Greater than (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a {'>'} b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>{'<'}</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Less than (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a < Text>{'<'}</Text> b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>{'>='}</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Greater than or equal to (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a {'>='} b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>{'<='}</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Less than or equal to (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a {'<='} b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>
            </Text>
          }
        />

        <DropdownBlock
          title="Logical Operators"
          content={
            <Text style={styles.syntaxContent}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>&&</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Logical AND (returns true if both operands are true, e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a && b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}

              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>||</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Logical OR (returns true if either operand is true, e.g., </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a || b</Text>
              <Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}

              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>!</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Logical NOT (reverses the result, returns false if the operand is true, e.g., </Text>
              <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>!a</Text>
              <Text style={{ color: theme.colors.textPrimary }}>)</Text>
            </Text>
          }
        />

        <DropdownBlock
          title="Bitwise Operators"
          content={
            <Text style={styles.syntaxContent}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>&</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Bitwise AND (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a & b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>|</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Bitwise OR (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a | b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>^</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Bitwise XOR (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a ^ b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>~</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Bitwise NOT (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>~a</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>&lt;&lt;</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Left shift (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a < Text>{'<'}</Text>< Text>{'<'}</Text> b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>&gt;&gt;</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Right shift (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a {'>>'} b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>{'\n\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>&gt;&gt;&gt;</Text>{'\n'}
              <Text style={{ color: theme.colors.textPrimary }}>Unsigned right shift (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a {'>>>'} b</Text><Text style={{ color: theme.colors.textPrimary }}>)</Text>
            </Text>
          }
        />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContentContainer: {
    flexGrow: 1,
    paddingVertical: 40,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '90%',
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  dropdownBlock: {
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
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  dropdownTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Will be overridden by theme
  },
  dropdownContent: {
    paddingTop: 10,
  },
  syntaxBlock: {
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
  syntaxTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Will be overridden by theme
    marginBottom: 10,
  },
  syntaxContent: {fontSize: 16,
    lineHeight: 22,
  },
  keyword: {
    fontWeight: 'bold',
  },
  comment: {
    fontStyle: 'italic',
  },
  indentedCode: {
    marginLeft: 20,
  },
});