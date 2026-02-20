import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
// import NextButton from '@/components/NextButton'; // Assuming you have this component
import { Link } from 'expo-router';

export default function VariablesTypesCastingPage() {
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
        <ScreenTitle title="Variables & Data Types" />

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Variables</Text>
          <Text style={styles.syntaxContent}>
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Declaration and Initialization:</Text>
            {'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>type </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>identifier </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>= </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textTertiary }]}>value</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>;</Text>
            {'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Example:</Text>
            {'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>int </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>age </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>= </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textTertiary }]}>30</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>;</Text>
            {'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>String </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>name </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>= </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textTertiary }]}>"Alice"</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>;</Text>
          </Text>
        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Primitive Data Types</Text>
          <Text style={styles.syntaxContent}>
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>byte:</Text> <Text>Stores whole numbers from -128 to 127</Text>{'\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>short:</Text> <Text>Stores whole numbers from -32,768 to 32,767</Text>{'\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>int:</Text> <Text>Stores whole numbers from -2,147,483,648 to 2,147,483,647</Text>{'\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>long:</Text> <Text>Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</Text>{'\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>float:</Text> <Text>Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits</Text>{'\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>double:</Text> <Text>Stores fractional numbers. Sufficient for storing 15 decimal digits</Text>{'\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>boolean:</Text> <Text>Stores true or false values</Text>{'\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>char:</Text> <Text>Stores a single character/letter or ASCII values</Text>
          </Text>
        </View>

        <View style={[styles.syntaxBlock, { backgroundColor: theme.colors.accent }]}>
          <Text style={[styles.syntaxTitle, { color: theme.colors.textPrimary }]}>Type Casting</Text>
          <Text style={styles.syntaxContent}>
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Widening Casting (implicit):</Text>
            {'\n'}
            <Text style={[styles.comment, { color: theme.colors.textTertiary }]}>
              <Text style={[{ fontFamily: 'monospace' }]}>byte <Text>{'->'}</Text> short <Text>{'->'}</Text> char <Text>{'->'}</Text> int <Text>{'->'}</Text> long <Text>{'->'}</Text> float <Text>{'->'}</Text> double</Text>
            </Text>
            {'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>int </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>myInt </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>= </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textTertiary }]}>9</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>;</Text>
            {'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>double </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>myDouble </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>= </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>myInt</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>;</Text>
            {'\n\n'}
            <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Narrowing Casting (explicit):</Text>
            {'\n'}
            <Text style={[styles.comment, { color: theme.colors.textTertiary }]}>
              <Text style={[{ fontFamily: 'monospace' }]}>double <Text>{'->'}</Text> float <Text>{'->'}</Text> long <Text>{'->'}</Text> int <Text>{'->'}</Text> char <Text>{'->'}</Text> short <Text>{'->'}</Text> byte</Text>
            </Text>
            {'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>double </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>myDouble2 </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>= </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textTertiary }]}>9.78</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>;</Text>
            {'\n'}
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>int </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>myInt2 </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>= (</Text>
            <Text style={[styles.keyword, { fontFamily: 'monospace', color: theme.colors.textSecondary }]}>int</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>) </Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>myDouble2</Text>
            <Text style={[{ fontFamily: 'monospace', color: theme.colors.textSecondary }]}>;</Text>
          </Text>
        </View>

        {/* Next Button */}
        {/* <Link href="/OperatorsPage" asChild>
          <NextButton title="Next: Operators" />
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