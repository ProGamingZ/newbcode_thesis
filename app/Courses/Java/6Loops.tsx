import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton';
import { Link } from 'expo-router';

export default function LoopsControlFlowPage() {
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
        <ScreenTitle title="Loops & Control Flow" />

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>while Loop</Text>
          <Text style={styles.syntaxContent}>
            <Text>The </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>while</Text><Text> loop executes a block of code as long as a specified condition is true.</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Syntax:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace' }]}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>while </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`("condition") {`}</Text>{'\n'}
              <Text style={styles.indentedCode}>
                <Text style={[{ color: theme.colors.textTertiary }]}>// block of code to be executed</Text>{'\n'}
              </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text>
            </Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Example:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace' }]}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>int </Text>
              <Text style={[{ color: theme.colors.textSecondary }]}>i </Text>
              <Text style={[{ color: theme.colors.textSecondary }]}>= </Text>
              <Text style={[{ color: theme.colors.textTertiary }]}>0</Text><Text style={[{ color: theme.colors.textSecondary }]}>;</Text>{'\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>while </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`(i < 5) {`}</Text>{'\n'}
              <Text style={styles.indentedCode}>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>System</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>out</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>println</Text>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>({`i`});</Text>{'\n'}
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>i++</Text><Text style={[{ color: theme.colors.textSecondary }]}>;</Text>{'\n'}
              </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text>
            </Text>
          </Text>
        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>do-while Loop</Text>
          <Text style={styles.syntaxContent}>
            <Text>The </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>do-while</Text><Text> loop executes a block of code once, before checking if the condition is true, and then repeats the loop as long as the condition is true.</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Syntax:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace' }]}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>do </Text>{`{`}{'\n'}
              <Text style={styles.indentedCode}>
                <Text style={[{ color: theme.colors.textTertiary }]}>// block of code to be executed</Text>{'\n'}
              </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text> <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>while </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`("condition");`}</Text>
            </Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Example:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace' }]}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>int </Text>
              <Text style={[{ color: theme.colors.textSecondary }]}>i </Text>
              <Text style={[{ color: theme.colors.textSecondary }]}>= </Text>
              <Text style={[{ color: theme.colors.textTertiary }]}>0</Text><Text style={[{ color: theme.colors.textSecondary }]}>;</Text>{'\n'}
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>do </Text>{`{`}{'\n'}
              <Text style={styles.indentedCode}>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>System</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>out</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>println</Text>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>({`i`});</Text>{'\n'}
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>i++</Text><Text style={[{ color: theme.colors.textSecondary }]}>;</Text>{'\n'}
              </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text> <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>while </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`(i < 5);`}</Text>
            </Text>
          </Text>
        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>for Loop</Text>
          <Text style={styles.syntaxContent}>
            <Text>The </Text><Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>for</Text><Text> loop executes a block of code a specific number of times.</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Syntax:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace' }]}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>for </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`("initialization; condition; increment/decrement") {`}</Text>{'\n'}
              <Text style={styles.indentedCode}>
                <Text style={[{ color: theme.colors.textTertiary }]}>// block of code to be executed</Text>{'\n'}
              </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text>
            </Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Example:</Text>{'\n'}
            <Text style={[{ fontFamily: 'monospace' }]}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>for </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`(int i = 0; i < 5; i++) {`}</Text>{'\n'}
              <Text style={styles.indentedCode}>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>System</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>out</Text><Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
                <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>println</Text>
                <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>({`i`});</Text>{'\n'}
              </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text>
            </Text>
          </Text>
        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Control Flow Statements</Text>
          <Text style={styles.syntaxContent}>
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>break:</Text> <Text>Terminates the loop or switch statement and transfers execution to the statement immediately following the loop or switch.</Text>{'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>continue:</Text> <Text>Skips the current iteration of a loop and continues with the next iteration.</Text>{'\n\n'}
          </Text>
        </View>

        {/* Next Button */}
        {/* <Link href="/ArraysPage" asChild>
          <NextButton title="Next: Arrays" />
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