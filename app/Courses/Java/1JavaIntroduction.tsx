import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton'; // Assuming you'll have a NextButton component
import { Link } from 'expo-router';

export default function JavaIntroduction() {
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
        <ScreenTitle title="Java Basics" />

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Basic Program Structure</Text>
          <Text style={styles.syntaxContent}>
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>public class </Text>
            <Text style={[{ color: theme.colors.textSecondary }]}>ClassName </Text>
            <Text style={[{ color: theme.colors.textPrimary }]}>{`{`}</Text>
            {'\n'}
            <Text style={styles.indentedCode}>
              <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>public static void </Text>
              <Text style={[{ color: theme.colors.textSecondary }]}>main</Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>({`String[] args)`} {`{`}</Text>
              {'\n'}
              <Text style={styles.indentedCode}>
                <Text style={[styles.comment, { color: theme.colors.textTertiary, fontStyle: 'italic' }]}>
                  // Program execution starts here
                </Text>
                {'\n'}
              </Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text>
              {'\n'}
            </Text>
            <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text>
          </Text>
        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Comments</Text>
          <Text style={styles.syntaxContent}>
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Single-line comment:</Text>
            {'\n'}
            <Text style={[styles.comment, { color: theme.colors.textTertiary }]}>
              <Text style={[{ fontFamily: 'monospace' }]}>// This is a single-line comment</Text>
            </Text>
            {'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Multi-line comment:</Text>
            {'\n'}
            <Text style={[styles.comment, { color: theme.colors.textTertiary }]}>
              <Text style={[{ fontFamily: 'monospace' }]}>
                {`/*
This is a
multi-line
comment
*/`}
              </Text>
            </Text>
          </Text>
        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Output</Text>
          <Text style={styles.syntaxContent}>
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Print to console (no newline):</Text>
            {'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>System</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>out</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
            <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>print</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>("</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textTertiary }]}>text to print</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>");</Text>
            {'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Print to console (with newline):</Text>
            {'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>System</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>out</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
            <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>println</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>("</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textTertiary }]}>text to print</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>");</Text>
            {'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Formatted output:</Text>
            {'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>System</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>out</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>.</Text>
            <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>printf</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>("</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textTertiary }]}>format string</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>", </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textTertiary }]}>arguments</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textPrimary }]}>");</Text>
          </Text>
        </View>

        {/* Next Button */}
        {/* <Link href="/VariablesTypesCastingPage" asChild>
          <NextButton title="Next: Variables & Types" />
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
  comment: {
    fontStyle: 'italic',
  },
  indentedCode: {
    marginLeft: 20,
  },
});