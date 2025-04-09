import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ScreenTitle from '@/components/PageTitle';
import { useTheme } from '@/theme/ThemeContext'; // Import the useTheme hook
import BackButton from '@/components/BackButton'; // Use the themed BackButton

export default function SyntaxesScreen() {
  const { theme } = useTheme(); // Access the current theme

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContentContainer,
        { backgroundColor: theme.colors.background }, // Apply background from theme
      ]}
    >
      <View style={styles.container}>
        {/* Back Button */}
        <BackButton style={styles.backButton} />

        {/* Title */}
        <ScreenTitle title="Syntaxes" />

        {/* Syntax Blocks */}
        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>

          <Text style={[styles.syntaxTitle,{ color: theme.colors.textPrimary }]}>Variables</Text>
          <Text style={styles.syntaxContent}>
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>"Data Type"</Text>{' '}
            <Text style={[{ color: theme.colors.textSecondary }]}>"Identifier"</Text>{' '}
            <Text style={[{ color: theme.colors.textSecondary }]}>=</Text>{' '}
            <Text style={[{color: theme.colors.textTertiary }]}>"value"</Text>
            <Text style={[{ color: theme.colors.textSecondary }]}>;</Text>
          </Text>
        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Conditionals</Text>
          <Text style={styles.syntaxContent}>
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>"if/else if" </Text>
            <Text style={[{ color: theme.colors.textPrimary }]}>
              (<Text style={[{ color: theme.colors.textSecondary }]}>"Condition"</Text>)
            </Text>{' '}
            <Text style={[{ color: theme.colors.textPrimary }]}>{`{`}</Text>
            {'\n'}
            <Text style={styles.indentedCode}>
              {' '}
              <Text style={[styles.comment, { color: theme.colors.textTertiary, fontStyle: 'italic' }]}>
                // Condition true
              </Text>
            </Text>
            {'\n'}
            <Text style={styles.indentedCode}>
              {' '}
              <Text style={[styles.comment, { color: theme.colors.textTertiary, fontStyle: 'italic' }]}>
                // execute code
              </Text>
            </Text>
            {'\n'}
            <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text>
          </Text>
        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Loops</Text>
          <Text style={styles.syntaxContent}>
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>"while"</Text>
            <Text style={[{ color: theme.colors.textPrimary }]}>
              (<Text style={[{ color: theme.colors.textSecondary }]}>"Condition"</Text>)
            </Text>{' '}
            <Text style={[{ color: theme.colors.textPrimary }]}>{`{`}</Text>
            {'\n'}
            <Text style={styles.indentedCode}>
              {' '}
              <Text style={[styles.comment, { color: theme.colors.textTertiary, fontStyle: 'italic' }]}>
                // Condition true
              </Text>
            </Text>
            {'\n'}
            <Text style={styles.indentedCode}>
              {' '}
              <Text style={[styles.comment, { color: theme.colors.textTertiary, fontStyle: 'italic' }]}>
                // execute code
              </Text>
            </Text>
            {'\n'}
            <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text>
            {'\n\n'}

            <Text style={[styles.keyword, { color: theme.colors.textPrimary }]}>"do"</Text>{' '}
            <Text style={[{ color: theme.colors.textPrimary }]}>{`{`}</Text>
            {'\n'}
            <Text style={styles.indentedCode}>
              {' '}
              <Text style={[styles.comment, { color: theme.colors.textTertiary, fontStyle: 'italic' }]}>
                // Condition true
              </Text>
            </Text>
            {'\n'}
            <Text style={styles.indentedCode}>
              {' '}
              <Text style={[styles.comment, { color: theme.colors.textTertiary, fontStyle: 'italic' }]}>
                // execute code
              </Text>
            </Text>
            {'\n'}
            <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text>{' '}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>"while"</Text>
            <Text style={[{ color: theme.colors.textPrimary }]}>
              (<Text style={[{ color: theme.colors.textSecondary }]}>"Condition"</Text>)
            </Text>
            <Text style={[{ color: theme.colors.textPrimary }]}>;</Text>
            {'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textPrimary }]}>"for"</Text>
            <Text style={[{ color: theme.colors.textPrimary }]}>
              (<Text style={[{ color: theme.colors.textSecondary }]}>"variable"</Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>;</Text>{' '}
              <Text style={[{ color: theme.colors.textSecondary }]}>"condition"</Text>
              <Text style={[{ color: theme.colors.textPrimary }]}>;</Text>{' '}
              <Text style={[{ color: theme.colors.textSecondary }]}>"incrementor"</Text>)
            </Text>{' '}
            <Text style={[{ color: theme.colors.textPrimary }]}>{`{`}</Text>
            {'\n'}
            <Text style={styles.indentedCode}>
              {' '}
              <Text style={[styles.comment, { color: theme.colors.textTertiary, fontStyle: 'italic' }]}>
                // Condition true
              </Text>
            </Text>
            {'\n'}
            <Text style={styles.indentedCode}>
              {' '}
              <Text style={[styles.comment, { color: theme.colors.textTertiary, fontStyle: 'italic' }]}>
                // execute code
              </Text>
            </Text>
            {'\n'}
            <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text>
          </Text>
        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textSecondary }]}>Arrays</Text>
          <Text style={styles.syntaxContent}>
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>"Data Type"</Text>{' '}
            <Text style={[{ color: theme.colors.textSecondary }]}>"Identifier"</Text>{' '}
            <Text style={[{ color: theme.colors.textSecondary }]}>=</Text>{' '}
            <Text style={[{ color: theme.colors.textPrimary }]}>{`{`}</Text>{' '}
            <Text style={[{ color: theme.colors.textTertiary }]}>"value"</Text>
            <Text style={[{ color: theme.colors.textPrimary }]}>,</Text>{' '}
            <Text style={[{ color: theme.colors.textTertiary }]}>"value"</Text>
            <Text style={[{ color: theme.colors.textPrimary }]}>,</Text>{' '}
            <Text style={[{ color: theme.colors.textTertiary }]}>"value"</Text>{' '}
            <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text>
            <Text style={[{ color: theme.colors.textPrimary }]}>;</Text>
          </Text>
        </View>
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
  condition: {
    fontWeight: 'bold',
  },
});