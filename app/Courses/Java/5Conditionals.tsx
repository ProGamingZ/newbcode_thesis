import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

export default function ConditionalsPage() {
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
        <ScreenTitle title="Conditionals" />

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>if Statement</Text>
          <Text style={styles.syntaxContent}>
            <Text>The </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>if</Text><Text> statement executes a block of code if a specified condition is true.</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Syntax:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace' }]}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>if </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}> {`("condition") {`} </Text>{'\n'}
              <Text style={styles.indentedCode}>
                <Text style={[{ color: theme.colors.textTertiary }]}>// block of code to be executed if the condition is true</Text>{'\n'}
              </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text>
            </Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Example:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace' }]}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>int </Text>
              <Text style={[{ color: theme.colors.textSecondary }]}>x </Text>
              <Text style={[{ color: theme.colors.textSecondary }]}>= </Text>
              <Text style={[{ color: theme.colors.textTertiary }]}>20</Text><Text style={[{ color: theme.colors.textSecondary }]}>;</Text>{'\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>if </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`(x > 10) {`}</Text>{'\n'}
              <Text style={styles.indentedCode}>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>System</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>out</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>println</Text>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>("x is greater than 10");</Text>{'\n'}
              </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text>
            </Text>
          </Text>
        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>else Statement</Text>
          <Text style={styles.syntaxContent}>
            <Text>The </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>else</Text><Text> statement executes a block of code if the condition in the </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>if</Text><Text> statement is false.</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Syntax:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace' }]}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>if </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`("condition") {`}</Text>{'\n'}
              <Text style={styles.indentedCode}>
                <Text style={[{ color: theme.colors.textTertiary }]}>// block of code to be executed if the condition is true</Text>{'\n'}
              </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text> <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>else</Text> <Text style={[{ color: theme.colors.textPrimary }]}>{`{`}</Text>{'\n'}
              <Text style={styles.indentedCode}>
                <Text style={[{ color: theme.colors.textTertiary }]}>// block of code to be executed if the condition is false</Text>{'\n'}
              </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text>
            </Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Example:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace' }]}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>int </Text>
              <Text style={[{ color: theme.colors.textSecondary }]}>x </Text>
              <Text style={[{ color: theme.colors.textSecondary }]}>= </Text>
              <Text style={[{ color: theme.colors.textTertiary }]}>5</Text><Text style={[{ color: theme.colors.textSecondary }]}>;</Text>{'\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>if </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`(x > 10) {`}</Text>{'\n'}
              <Text style={styles.indentedCode}>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>System</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>out</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>println</Text>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>("x is greater than 10");</Text>{'\n'}
              </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text> <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>else</Text> <Text style={[{ color: theme.colors.textPrimary }]}>{`{`}</Text>{'\n'}
              <Text style={styles.indentedCode}>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>System</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>out</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>println</Text>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>("x is not greater than 10");</Text>{'\n'}
              </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text>
            </Text>
          </Text>
        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>else if Statement</Text>
          <Text style={styles.syntaxContent}>
            <Text>The </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>else if</Text><Text> statement allows you to check multiple conditions in sequence.</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Syntax:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace' }]}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>if </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`("condition1") {`}</Text>{'\n'}
              <Text style={styles.indentedCode}>
                <Text style={[{ color: theme.colors.textTertiary }]}>// block of code to be executed if condition1 is true</Text>{'\n'}
              </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text> <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>else if </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`("condition2") {`}</Text>{'\n'}
              <Text style={styles.indentedCode}>
                <Text style={[{ color: theme.colors.textTertiary }]}>// block of code to be executed if condition1 is false and condition2 is true</Text>{'\n'}
              </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text> <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>else</Text> <Text style={[{ color: theme.colors.textPrimary }]}>{`{`}</Text>{'\n'}
              <Text style={styles.indentedCode}>
                <Text style={[{ color: theme.colors.textTertiary }]}>// block of code to be executed if all conditions are false</Text>{'\n'}
              </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text>
            </Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Example:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace' }]}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>int </Text>
              <Text style={[{ color: theme.colors.textSecondary }]}>time </Text>
              <Text style={[{ color: theme.colors.textSecondary }]}>= </Text>
              <Text style={[{ color: theme.colors.textTertiary }]}>20</Text><Text style={[{ color: theme.colors.textSecondary }]}>;</Text>{'\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>if </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`(time < 10) {`}</Text>{'\n'}
              <Text style={styles.indentedCode}>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>System</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>out</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>println</Text>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>("Good morning.");</Text>{'\n'}
              </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text> <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>else if </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`(time < 20) {`}</Text>{'\n'}
              <Text style={styles.indentedCode}>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>System</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>out</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>println</Text>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>("Good day.");</Text>{'\n'}
              </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text> <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>else</Text> <Text style={[{ color: theme.colors.textPrimary }]}>{`{`}</Text>{'\n'}
              <Text style={styles.indentedCode}>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>System</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>out</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>println</Text>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>("Good evening.");</Text>{'\n'}
              </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text>
            </Text>
          </Text>
        </View>

        {/* Next Button */}
         {/* <Link href="/LoopsControlFlowPage" asChild>
           <NextButton title="Next: Loops & Control Flow" />
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
  indentedCode: {
    marginLeft: 20,
  },
});