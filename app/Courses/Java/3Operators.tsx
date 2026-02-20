import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

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

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Arithmetic Operators</Text>
          <Text style={styles.syntaxContent}>
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>+</Text>{'\n'}
            <Text>Addition (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a + b</Text><Text>)</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>-</Text>{'\n'}
            <Text>Subtraction (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a - b</Text><Text>)</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>*</Text>{'\n'}
            <Text>Multiplication (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a * b</Text><Text>)</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>/</Text>{'\n'}
            <Text>Division (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a / b</Text><Text>)</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>%</Text>{'\n'}
            <Text>Modulo (remainder of division, e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a % b</Text><Text>)</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>++</Text>{'\n'}
            <Text>Increment (increases the value by 1, e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a++</Text> <Text>or </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>++a</Text><Text>)</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>--</Text>{'\n'}
            <Text>Decrement (decreases the value by 1, e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a--</Text> <Text>or </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>--a</Text><Text>)</Text>
          </Text>
        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Assignment Operators</Text>
          <Text style={styles.syntaxContent}>
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>=</Text>{'\n'}
            <Text>Simple assignment (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a = b</Text><Text>)</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>+=</Text>{'\n'}
            <Text>Add and assign (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a += b</Text> <Text>is the same as </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a = a + b</Text><Text>)</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>-=</Text>{'\n'}
            <Text>Subtract and assign (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a -= b</Text> <Text>is the same as </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a = a - b</Text><Text>)</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>*=</Text>{'\n'}
            <Text>Multiply and assign (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a *= b</Text> <Text>is the same as </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a = a * b</Text><Text>)</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>/=</Text>{'\n'}
            <Text>Divide and assign (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a /= b</Text> <Text>is the same as </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a = a / b</Text><Text>)</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>%=</Text>{'\n'}
            <Text>Modulo and assign (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a %= b</Text> <Text>is the same as </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a = a % b</Text><Text>)</Text>
          </Text>
        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Comparison Operators</Text>
          <Text style={styles.syntaxContent}>
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>==</Text>{'\n'}
            <Text>Equal to (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a == b</Text><Text>)</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>!=</Text>{'\n'}
            <Text>Not equal to (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a != b</Text><Text>)</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>{'>'}</Text>{'\n'}
            <Text>Greater than (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a {'>'} b</Text><Text>)</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>{'<'}</Text>{'\n'}
            <Text>Less than (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a < Text>{'<'}</Text> b</Text><Text>)</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>{'>='}</Text>{'\n'}
            <Text>Greater than or equal to (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a {'>='} b</Text><Text>)</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>{'<='}</Text>{'\n'}
            <Text>Less than or equal to (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a {'<='} b</Text><Text>)</Text>
          </Text>
        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Logical Operators</Text>
          
          <Text style={styles.syntaxContent}>
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>&&</Text>{'\n'}
            <Text>Logical AND (returns true if both operands are true, e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a && b</Text><Text>)</Text>{'\n\n'}

            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>||</Text>{'\n'}
            <Text>Logical OR (returns true if either operand is true, e.g., </Text> 
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a || b</Text>
            <Text>)</Text>{'\n\n'}
            
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>!</Text>{'\n'}
            <Text>Logical NOT (reverses the result, returns false if the operand is true, e.g., </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>!a</Text>
            <Text>)</Text>
          </Text>

        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Bitwise Operators</Text>
          <Text style={styles.syntaxContent}>
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>&</Text>{'\n'}
            <Text>Bitwise AND (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a & b</Text><Text>)</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>|</Text>{'\n'}
            <Text>Bitwise OR (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a | b</Text><Text>)</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>^</Text>{'\n'}
            <Text>Bitwise XOR (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a ^ b</Text><Text>)</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>~</Text>{'\n'}
            <Text>Bitwise NOT (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>~a</Text><Text>)</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>&lt;&lt;</Text>{'\n'}
            <Text>Left shift (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a < Text>{'<'}</Text>< Text>{'<'}</Text> b</Text><Text>)</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>&gt;&gt;</Text>{'\n'}
            <Text>Right shift (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a {'>>'} b</Text><Text>)</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>&gt;&gt;&gt;</Text>{'\n'}
            <Text>Unsigned right shift (e.g., </Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>a {'>>>'} b</Text><Text>)</Text>
          </Text>
        </View>

        {/* Next Button */}
        {/* <Link href="/StringsMathPage" asChild>
          <NextButton title="Next: Strings & Math" />
        </Link> */}
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
  syntaxContent: {
    fontSize: 16,
    lineHeight: 22,
  },
  keyword: {
    fontWeight: 'bold',
  },
});