import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import ScreenTitle from '@/components/PageTitle';
import BackButton from '@/components/BackButton';
import { FontAwesome } from '@expo/vector-icons';

export default function JavaIntroduction() {
  const { theme } = useTheme();
  const [isBasicProgramStructureVisible, setIsBasicProgramStructureVisible] = useState(false);
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const [isOutputVisible, setIsOutputVisible] = useState(false);
  const [isVariablesVisible, setIsVariablesVisible] = useState(false);
  const [isOperatorsVisible, setIsOperatorsVisible] = useState(false);

  const toggleBasicProgramStructure = () => {
    setIsBasicProgramStructureVisible(!isBasicProgramStructureVisible);
  };

  const toggleCommentsVisibility = () => {
    setIsCommentsVisible(!isCommentsVisible);
  };

  const toggleOutputVisibility = () => {
    setIsOutputVisible(!isOutputVisible);
  };

  const toggleVariablesVisibility = () => {
    setIsVariablesVisible(!isVariablesVisible);
  };

  const toggleOperatorsVisibility = () => {
    setIsOperatorsVisible(!isOperatorsVisible);
  };

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

        <View style={[styles.dropdownBlock, { backgroundColor: theme.colors.accent }]}>
          <TouchableOpacity style={styles.dropdownHeader} onPress={toggleBasicProgramStructure}>
            <Text style={[styles.dropdownTitle, { color: theme.colors.textPrimary }]}>Basic Program Structure</Text>
            <FontAwesome
              name={isBasicProgramStructureVisible ? 'chevron-up' : 'chevron-down'}
              size={18}
              color={theme.colors.textPrimary}
            />
          </TouchableOpacity>
          {isBasicProgramStructureVisible && (
            <View style={styles.dropdownContent}>
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
                      {`// Program execution starts here`}
                    </Text>
                    {'\n'}
                  </Text>
                  <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text>
                  {'\n'}
                </Text>
                <Text style={[{ color: theme.colors.textPrimary }]}>{`}`}</Text>
              </Text>
            </View>
          )}
        </View>

        <View style={[styles.dropdownBlock, { backgroundColor: theme.colors.accent }]}>
          <TouchableOpacity style={styles.dropdownHeader} onPress={toggleCommentsVisibility}>
            <Text style={[styles.dropdownTitle, { color: theme.colors.textPrimary }]}>Comments</Text>
            <FontAwesome
              name={isCommentsVisible ? 'chevron-up' : 'chevron-down'}
              size={18}
              color={theme.colors.textPrimary}
            />
          </TouchableOpacity>
          {isCommentsVisible && (
            <View style={styles.dropdownContent}>
              <Text style={styles.syntaxContent}>
                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Single-line comment:</Text>
                {'\n'}
                <Text style={[styles.comment, { color: theme.colors.textTertiary }]}>
                  <Text style={[{ fontFamily: 'monospace' }]}>{`// This is a single-line comment`}</Text>
                </Text>
                {'\n\n'}
                <Text style={[styles.keyword, { color: theme.colors.textSecondary }]}>Multi-line comment:</Text>
                {'\n'}
                <Text style={[styles.comment, { color: theme.colors.textTertiary }]}>
                  <Text style={[{ fontFamily: 'monospace' }]}>
                    {`/*\nThis is a\nmulti-line\ncomment\n*/`}
                  </Text>
                </Text>
              </Text>
            </View>
          )}
        </View>

        <View style={[styles.dropdownBlock, { backgroundColor: theme.colors.accent }]}>
          <TouchableOpacity style={styles.dropdownHeader} onPress={toggleOutputVisibility}>
            <Text style={[styles.dropdownTitle, { color: theme.colors.textPrimary }]}>Output</Text>
            <FontAwesome
              name={isOutputVisible ? 'chevron-up' : 'chevron-down'}
              size={18}
              color={theme.colors.textPrimary}
            />
          </TouchableOpacity>
          {isOutputVisible && (
            <View style={styles.dropdownContent}>
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
          )}
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